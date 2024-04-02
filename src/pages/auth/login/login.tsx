import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import images from '~/assets/images/index';
import { AppContext } from "~/contexts/app-context";
import { authApi } from "~/api";
import { authShema } from "~/utils/rules";
import { AuthLogin as AuthLoginType } from "~/types/auth-type";
import { Button, TextBox } from "~/components/controls";

export type TFormData = AuthLoginType

function Login() {
   const { setIsAuthenticated, setGroupRoles } = useContext(AppContext)
   const navigate = useNavigate();

   const formRHF = useForm<TFormData>({
      resolver: yupResolver(authShema)
   })

   const loginMutation = useMutation({
      mutationFn: (body: TFormData) => authApi.login(body)
   })

   const handleSubmit = (values: TFormData) => {
      loginMutation.mutate(values, {
         onSuccess: (data) => {
            console.log("handleSubmitLogin: ", data);

            if (data.data.StatusCode === 200) {
               setIsAuthenticated(true);

               const groupRoles: any[] = data.data.Result?.NhomQuyen || [];

               setGroupRoles(groupRoles)

               navigate('/')
            } else {
               alert(data.data.Message)
            }

         },
         onError: (error) => {
            alert(error)
         }
      })
   }

   return (
      <div className='login-container'>
         <img src={!isMobile ? images.bgLogin : images.bgLoginMobile} alt="" className='login-background' />

         <div className="login-content">
            <img src={images.logo} alt="" className='login-logo' />
            <h1 className='login-heading'>ĐĂNG NHẬP</h1>

            <form onSubmit={formRHF.handleSubmit(handleSubmit)} noValidate>
               <TextBox
                  formRHF={formRHF}
                  value={'admin'}
                  name='username'
                  label="Tài khoản"
                  leftIcon={<FontAwesomeIcon icon={['fas', 'user']} />}
               />

               <TextBox
                  formRHF={formRHF}
                  name='password'
                  label="Mật khẩu"
                  type="password"
                  eyeIcon
                  leftIcon={<FontAwesomeIcon icon={['fas', 'lock']} />}
               />

               <div className="login-btn">
                  <Button
                     variant="contained"
                     type='submit'
                     //disabled={!formRHF.formState.isValid}
                     leftIcon={<FontAwesomeIcon icon={['fas', 'right-to-bracket']} />}
                     size='large'
                  >
                     Đăng nhập
                  </Button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default Login;