import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Account as AccountType } from "~/types/account-type";
import { accountSchema } from "~/utils/rules";
import { Button, TextBox, Textarea } from "~/components/controls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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

   console.log("formRHF", formRHF.formState);

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

            <Textarea
               formRHF={formRHF}
               name='Email'
               label="Email"
            />

            <TextBox
               formRHF={formRHF}
               name='UserName'
               label="User name"
            />

            <Textarea
               formRHF={formRHF}
               name='SoDienThoai'
               label="Số điện thoại"
            />

            <Button
               variant="contained"
               type='submit'
               //disabled={!formRHF.formState.isValid}
               leftIcon={<FontAwesomeIcon icon="fa-solid fa-circle-check" />}
            >
               Submit
            </Button>
         </form>
      </div>
   );
}

export default FormData;