import { useForm } from "react-hook-form";

import { Account as AccountType } from "~/types/account-type";
import { Button, TextBox, Textarea } from "~/components/controls";
import BorderedSection from "~/components/bordered-section";

type TFormData = AccountType;

function ScanCard() {

   const formRHF = useForm<TFormData>()

   const handleSubmit = (values: TFormData) => {
      alert("Submit Form value: " + JSON.stringify(values));
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
               formRHF={formRHF}
               name='BienSoXe'
               label="Biển số xe"
               value={'63C-123.45'}
               disabled
               className="fz-24 fw-600"
            />

            <TextBox
               formRHF={formRHF}
               name='LoaiXe'
               label="Loại xe"
               value={'Khách hàng'}
               disabled
            />

            <TextBox
               formRHF={formRHF}
               name='SoDienThoai'
               label="Giờ vào"
               value={'20/04/2024 13:39:44'}
               disabled
            />

            <TextBox
               formRHF={formRHF}
               name='SoPhieuCan'
               label="Số phiếu cân"
               value={'PR-N3-20240420-0001'}
               disabled
            />

            <BorderedSection title="Trừ tạp chất" className="mt-20 mb-20" classNameTitle="fz-16">
               <div style={{ margin: "10px 10px -6px 10px" }}>
                  <TextBox
                     formRHF={formRHF}
                     name='TheoKg'
                     label="Trừ tạp chất theo Kg"
                     type="number"
                  />

                  <TextBox
                     formRHF={formRHF}
                     name='TheoPhanTram'
                     label="Trừ nước theo %"
                     type="number"
                  />
               </div>
            </BorderedSection>


            <Textarea
               formRHF={formRHF}
               name='Note'
               label="Ghi chú"
            />

            <BorderedSection title="Phân bổ trọng lượng hàng" className="mt-20 mb-20" classNameTitle="fz-16">
               ...
            </BorderedSection>

            {/* <SelectBox
               formRHF={formRHF}
               name='role1'
               label="Role 1"
               required
               options={[
                  { value: "", label: "--All--" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
               ]}
            /> */}

            {/* 
            <SelectBox
               formRHF={formRHF}
               name='role2'
               label="Role 2"
               required
               multi
               options={[
                  { value: "1", label: "One" },
                  { value: "2", label: "Two" },
                  { value: "3", label: "Three" },
               ]}
            /> */}

            <div style={{ width: "100%" }}>
               <Button
                  variant="contained"
                  size="medium"
                  type='submit'
                  //disabled={!formRHF.formState.isValid}
                  leftIcon={<i className="fa-solid fa-bookmark"></i>}
                  style={{ width: "inherit", marginBottom: "10px" }}
               >
                  Lưu tạm
               </Button>
               <Button
                  variant="contained"
                  size="large"
                  type='submit'
                  //disabled={!formRHF.formState.isValid}
                  leftIcon={<i className="fa-solid fa-circle-check"></i>}
                  style={{ width: "inherit", margin: 0 }}
               >
                  LƯU
               </Button>
            </div>
         </form>
      </div>
   );
}

export default ScanCard;


