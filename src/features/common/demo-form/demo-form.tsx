import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import { Button, SelectBox, TextBox, Textarea } from "~/components/controls";


const arrOptions = [
   { value: "", label: "--Tất cả--" },
   { value: "1", label: "Cao đẳng" },
   { value: "2", label: "Đại học" },
   { value: "3", label: "Thạc sĩ" }
]

const arrOptionsMulti = [
   { value: "1", label: "Nghe nhạc" },
   { value: "2", label: "Nấu ăn" },
   { value: "3", label: "Xem phim" }
]

const schema = yup.object({
   full_name: yup.string().required('Bắt buộc nhập Họ tên'),

   address: yup.string().required('Bắt buộc nhập Địa chỉ'),

   age: yup.number().typeError('Bắt buộc nhập Tuổi').max(100, 'Tuổi không hợp lệ').required('Bắt buộc nhập Tuổi'),

   selectOnly: yup.mixed().required('Vui lòng chọn Trình độ').test('is-selected', 'Bắt buộc chọn Trình độ', (val: any) => !!val && !!val.value),

   selectMulti: yup.array().of(
      yup.object().shape({
         value: yup.string().required(),
      })
   ).required('Bắt buộc chọn Sở thích').min(2, 'Bắt buộc chọn ít nhất 2 Sở thích'),
})

interface TFormData {
   full_name: string;
   email?: string;
   address: string;
   age: number;
   selectOnly: any;
   selectMulti: any;
}

function DemoForm() {
   const formRHF = useForm<TFormData>({
      resolver: yupResolver(schema),
      defaultValues: {
         selectOnly: { value: "", label: "--Tất cả--" },
         selectMulti: null,
      }
   })

   const onFormSubmit = (values: TFormData) => {
      alert("---->Submit Form value: " + JSON.stringify(values));
      formRHF.reset();
   }

   return (
      <div>
         <form onSubmit={formRHF.handleSubmit(onFormSubmit)} noValidate>

            <TextBox
               formRHF={formRHF}
               name='full_name'
               label="Họ tên"
               isRequired
            />

            <TextBox
               formRHF={formRHF}
               name='email'
               label="Email"
            />

            <TextBox
               formRHF={formRHF}
               name='age'
               label="Tuổi"
               isRequired
               type="number"
               min={1}
            />

            <Textarea
               formRHF={formRHF}
               name='address'
               label="Địa chỉ"
               isRequired
            />

            <div>Radio Giới tính

            </div>

            <SelectBox
               formRHF={formRHF}
               name='selectOnly'
               label="Trình độ"
               isRequired
               options={arrOptions}
            />

            <SelectBox
               formRHF={formRHF}
               name='selectMulti'
               label="Sở thích"
               isRequired
               isMulti
               isCloseMenuOnSelect={false}
               options={arrOptionsMulti}
            />

            <div>DatePicker ngày sinh</div>

            <div>Checkbox </div>

            <Button
               variant="contained"
               size="medium"
               type='submit'
               //disabled={!formRHF.formState.isValid}
               leftIcon={<i className="fa-solid fa-circle-check"></i>}
            >
               LƯU
            </Button>
         </form>
      </div>
   );
}

export default DemoForm;