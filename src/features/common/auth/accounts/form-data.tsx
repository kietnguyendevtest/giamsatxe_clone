import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Account as AccountType } from "~/types/account-type";
import { accountSchema } from "~/utils/rules";
import { Button, TextBox, Textarea } from "~/components/controls";
import { PhanQuyen } from "~/types/auth-type";


type TFormData = AccountType;
interface IProps {
   onSubmit?: (values: TFormData) => void;
   roles: PhanQuyen;
}

function FormData(props: IProps) {
   const { onSubmit, roles } = props;

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

            <div className="row">
               <div className="col-3 col-xl-6 col-lg-12">
                  <TextBox
                     formRHF={formRHF}
                     name='UserName'
                     label="User name"
                     isRequired
                  />
               </div>
               <div className="col-3 col-xl-6 col-lg-12">
                  <TextBox
                     formRHF={formRHF}
                     name='Email'
                     label="Email"
                     isRequired
                  />
               </div>
               <div className="col-3 col-xl-6 col-lg-12">
                  <TextBox
                     formRHF={formRHF}
                     name='SoDienThoai'
                     label="Số điện thoại"
                  />
               </div>
               <div className="col-3 col-xl-6 col-lg-12">
                  <Textarea
                     formRHF={formRHF}
                     name='Note'
                     label="Ghi chú"
                  />
               </div>
            </div>









            {/* <SelectBox
               formRHF={formRHF}
               name='role1'
               label="Role 1"
               isRequired
               options={[
                  { value: "", label: "--All--" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
               ]}
            /> */}

            {/* <SelectBox
               formRHF={formRHF}
               name='role2'
               label="Role 2"
               isRequired
               multi
               options={[
                  { value: "1", label: "One" },
                  { value: "2", label: "Two" },
                  { value: "3", label: "Three" },
               ]}
            /> */}

            {
               roles.IsThem &&
               <Button
                  variant="contained"
                  type='submit'
                  //disabled={!formRHF.formState.isValid}
                  leftIcon={<i className="fa-solid fa-circle-check"></i>}
               >
                  Submit
               </Button>
            }

         </form>
      </div>
   );
}

export default FormData;