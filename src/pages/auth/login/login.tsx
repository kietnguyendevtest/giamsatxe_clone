import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { AppContext } from "~/contexts/app-context";
import { authApi } from "~/api";

type FormData = {
   username: string;
   password: string;
}

const initFormState: FormData = {
   username: 'kietnm',
   password: 'qrqr'
}

function Login() {
   const { setIsAuthenticated, setGroupRoles } = useContext(AppContext)
   const navigate = useNavigate();

   const [formState] = useState<FormData>(initFormState);

   const loginMutation = useMutation({
      mutationFn: (body: FormData) => authApi.login(body)
   })

   const handleSubmitLogin = () => {
      loginMutation.mutate(formState, {
         onSuccess: (data) => {
            console.log("handleSubmitLogin: ", data);
            setIsAuthenticated(true);

            const groupRoles: any[] = data.data.Result?.NhomQuyen || [];

            setGroupRoles(groupRoles)

            navigate('/')
         },
         onError: (error) => {
            alert(error)
         }
      })
   }



   return (
      <div>
         <label htmlFor="username">Tài khoản</label>
         <input id="username" type="text" />
         <br />
         <label htmlFor="password">Mật khẩu</label>
         <input id="password" type="text" />
         <br />
         <button onClick={handleSubmitLogin}>Đăng nhập</button>
      </div>
   );
}

export default Login;