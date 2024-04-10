import { AuthResponse } from '~/types/auth-type'
import http from './http'
import { SuccessResponse } from '~/types/utils-type'

export const URL_LOGIN = 'TaiKhoan/login'
export const URL_REFRESH_TOKEN = 'TaiKhoan/refresh'

const authApi = {
   login: (body: { username: string; password: string }) => {
      return http.post<AuthResponse>(URL_LOGIN, body)
   },
   changePassword: (body: any) => {
      return http.post<SuccessResponse<any>>('TaiKhoan/change-password', body)
   },
}

export default authApi
