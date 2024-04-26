import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import { Button, TextBox, Textarea } from "~/components/controls";
import BorderedSection from "~/components/bordered-section";


function ScanCard() {
   const schema = yup.object()

   const formRHF = useForm({
      resolver: yupResolver(schema),
   })

   const onFormSubmit = (values: any) => {
      alert("---->Submit Form value: " + JSON.stringify(values));
      formRHF.reset();
   }

   return (
      <div>
         <form onSubmit={formRHF.handleSubmit(onFormSubmit)} noValidate>
            <TextBox
               formRHF={formRHF}
               name='BienSoXe'
               label="Biển số xe"
               value={'63C-123.45'}
               isDisabled
               className="fz-24 fw-600"
            />

            <TextBox
               formRHF={formRHF}
               name='LoaiXe'
               label="Loại xe"
               value={'Khách hàng'}
               isDisabled
            />

            <TextBox
               formRHF={formRHF}
               name='SoDienThoai'
               label="Giờ vào"
               value={'20/04/2024 13:39:44'}
               isDisabled
            />

            <TextBox
               formRHF={formRHF}
               name='SoPhieuCan'
               label="Số phiếu cân"
               value={'PR-N3-20240420-0001'}
               isDisabled
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


