import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import classNames from 'classnames/bind';

import { AppContext } from "~/contexts/app-context";
import { authApi } from "~/api";
import { Button, TextBox } from "~/components/controls";
import { ChangePassword as ChangePasswordType } from "~/types/auth-type";
import { changePasswordShema } from "~/utils/rules";
import { toast } from "react-toastify";
import { storage } from "~/utils";

import styles from './change-password.module.scss';

const cx = classNames.bind(styles);

type TFormData = ChangePasswordType

function ChangePassword() {
   const { reset } = useContext(AppContext);


   const formRHF = useForm<TFormData>({
      resolver: yupResolver(changePasswordShema)
   })
   const changePasswordMutation = useMutation({
      mutationFn: authApi.changePassword
   })
   const handleSubmit = (values: TFormData) => {
      const body = {
         UserName: storage.getUserName(),
         ...values,
      };

      changePasswordMutation.mutate(body, {
         onSuccess: (data) => {
            if (data.data.StatusCode === 200) {
               toast.success('Đổi mật khẩu thành công. Vui lòng đăng nhập lại!')
               reset();
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
      <div className={cx('wrapper')}>
         <form onSubmit={formRHF.handleSubmit(handleSubmit)} noValidate>
            <TextBox
               formRHF={formRHF}
               name='MatKhauCu'
               label="Mật khẩu cũ"
               required
               type="password"
               eyeIcon
            />
            <TextBox
               formRHF={formRHF}
               name='MatKhauMoi'
               label="Mật khẩu mới"
               required
               type="password"
               eyeIcon
            />
            <TextBox
               formRHF={formRHF}
               name='XacNhanMatKhauMoi'
               label="Xác nhận mật khẩu mới"
               required
               type="password"
               eyeIcon
            />

            <div className={cx('footer')}>
               <Button
                  variant="contained"
                  type='submit'
                  disabled={changePasswordMutation.isPending}
                  leftIcon={<i className="fa-solid fa-floppy-disk"></i>}
               >
                  Lưu
               </Button>
            </div>
         </form>
      </div>
   );
}

export default ChangePassword;