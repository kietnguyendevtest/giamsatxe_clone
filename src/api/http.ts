import axios, { AxiosError, AxiosInstance } from 'axios';
import { toast } from 'react-toastify';

import config from '~/constants/config';
import { clearLS, getAccessTokenFromLS, getRefreshTokenFromLS, setAccessTokenToLS, setRefreshTokenToLS } from '~/utils';
import { URL_LOGIN, URL_REFRESH_TOKEN } from './auth-api';
import { AuthResponse, RefreshTokenReponse } from '~/types/auth-type';
import HttpStatusCode from '~/constants/http-status-code-enum';

class Http {
   instance: AxiosInstance

   private accessToken: string
   private refreshToken: string
   private refreshTokenRequest: Promise<string> | null

   constructor() {
      this.accessToken = getAccessTokenFromLS()
      this.refreshToken = getRefreshTokenFromLS()
      this.refreshTokenRequest = null

      this.instance = axios.create({
         baseURL: config.URL_BACKEND,
         timeout: 30000,
         headers: {
            'Content-Type': 'application/json',
         }
      })

      this.instance.interceptors.request.use(
         (config) => {
            if (this.accessToken && config.headers) {
               config.headers.Authorization = `Bearer ${this.accessToken}`
               return config
            }
            return config
         },
         (error) => {
            return Promise.reject(error)
         }
      )

      this.instance.interceptors.response.use(
         (response) => {
            const { url } = response.config
            if (url === URL_LOGIN) {
               const data = response.data as AuthResponse;
               this.accessToken = data.Result?.TaiKhoan.Token || "";
               this.refreshToken = data.Result?.TaiKhoan.RefreshToken || "";

               setAccessTokenToLS(this.accessToken)
               setRefreshTokenToLS(this.refreshToken)
            }
            return response
         },
         (error: AxiosError) => {

            // Chỉ toast lỗi không phải 422 và 401
            if (![HttpStatusCode.UnprocessableEntity, HttpStatusCode.Unauthorized].includes(error.response?.status as number)) {
               const data: any | undefined = error.response?.data
               const message = data?.message || error.message
               toast.error(message)
            }

            /*
            Lỗi Unauthorized (401) có rất nhiều trường hợp
            - Token không đúng
            - Không truyền token
            - Token hết hạn
            */

            /*======== Nếu là lỗi 401 ============================================================*/
            if (error.response?.status === HttpStatusCode.Unauthorized) {
               const config = error.response?.config || {}
               const { url } = config


               // Trường hợp Token hết hạn và request đó không phải là của request refresh token thì mới tiến hành gọi refresh token
               if (url !== URL_REFRESH_TOKEN && this.accessToken) {
                  // Hạn chế gọi 2 lần handleRefreshToken
                  this.refreshTokenRequest = this.refreshTokenRequest
                     ? this.refreshTokenRequest
                     : this.handleRefreshToken().finally(() => {
                        this.refreshTokenRequest = null
                     })

                  return this.refreshTokenRequest.then((access_token) => {
                     // Tiếp tục gọi lại request cũ vừa bị lỗi
                     return this.instance({ ...config, headers: { ...config.headers, Authorization: `Bearer ${access_token}` } })
                  })
               }

               /*
               Còn những trường hợp như:
                  + token không đúng
                  + không truyền token,
                  + token hết hạn nhưng gọi refresh token bị fail
                ==> thì tiến hành xóa local storage và toast message
               */

               clearLS()
               this.accessToken = ''
               this.refreshToken = ''
               window.location.href = '';
               alert('Phiên đăng nhập của bạn đã hết hạn vui lòng đăng nhập lại');
            }
            return Promise.reject(error)
         }
      )
   }

   private handleRefreshToken() {
      return this.instance
         .post<RefreshTokenReponse>(URL_REFRESH_TOKEN, {
            AccessToken: this.accessToken,
            RefreshToken: this.refreshToken,
         })
         .then((res) => {
            const access_token = res.data.Result?.Token || ""
            setAccessTokenToLS(access_token)
            this.accessToken = access_token
            return access_token
         })
         .catch((error) => {
            clearLS()
            this.accessToken = ''
            this.refreshToken = ''
            throw error
         })
   }
}

const http = new Http().instance;
export default http;