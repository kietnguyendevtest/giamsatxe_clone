import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { isMobile } from 'react-device-detect';
import { toast } from "react-toastify";

import { AppContext } from "~/contexts/app-context";
import { authApi } from "~/api";
import { authShema } from "~/utils/rules";
import { AuthLogin as AuthLoginType } from "~/types/auth-type";
import { Button, TextBox } from "~/components/controls";
import images from '~/assets/images/index';

export type TFormData = AuthLoginType

function Login() {
   const { setIsAuthenticated, setGroupRole, setMenuRole, setSetRole } = useContext(AppContext);
   const navigate = useNavigate();

   useEffect(() => {
      document.getElementsByTagName("html")[0].classList.remove("dark");
   }, []);

   const formRHF = useForm<TFormData>({
      resolver: yupResolver(authShema)
   })

   const loginMutation = useMutation({
      mutationFn: (body: TFormData) => authApi.login(body)
   })

   const handleSubmit = (values: TFormData) => {
      loginMutation.mutate(values, {
         onSuccess: (data) => {
            if (data.data.StatusCode === 200) {
               setIsAuthenticated(true);
               setGroupRole(data.data.Result?.NhomQuyen || []);
               setMenuRole(data.data.Result?.Menu || []);
               setSetRole(data.data.Result?.PhanQuyen || []);

               navigate('/');
            } else {
               toast.error(data.data.Message);
            }
         },
         onError: (error) => {
            console.log("onError", error);
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
                  name='username'
                  label="Tài khoản"
                  leftIcon={<i className="fa-solid fa-user"></i>}
               />

               <TextBox
                  formRHF={formRHF}
                  name='password'
                  label="Mật khẩu"
                  type="password"
                  eyeIcon
                  leftIcon={<i className="fa-solid fa-lock"></i>}
               />

               <div className="login-btn">
                  <Button
                     variant="contained"
                     type='submit'
                     //disabled={!formRHF.formState.isValid}
                     leftIcon={<i className="fa-solid fa-right-to-bracket"></i>}
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