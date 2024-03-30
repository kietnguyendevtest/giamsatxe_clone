import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Account as AccountType } from "~/types/account-type";
import { accountSchema } from "~/utils/rules";
import { TextBox } from "~/components/controls";


type TFormData = AccountType;
interface IProps {
   onSubmit?: (values: TFormData) => void;
}

function FormData(props: IProps) {
   const { onSubmit } = props;

   const formRHF = useForm<TFormData>({
      resolver: yupResolver(accountSchema)
   })

   const handleSubmit = (values: TFormData) => {
      onSubmit && onSubmit(values);
   }

   return (
      <div>
         <form onSubmit={formRHF.handleSubmit(handleSubmit)} noValidate>
            {/* <input
               type="text"
               placeholder="Email"
               {...formRHF.register('Email', {
                  required: {
                     value: true,
                     message: 'bắt buộc'
                  },
                  minLength: {
                     value: 3,
                     message: 'ít nhất 3 ký tự'
                  }
               })}
            />
            <p>{formRHF.formState.errors.Email?.message}</p> */}

            <TextBox
               name='Email'
               formRHF={formRHF}
            />

            <TextBox
               name='UserName'
               formRHF={formRHF}
            />

            <button type="submit">Submit</button>
         </form>
      </div>
   );
}

export default FormData;