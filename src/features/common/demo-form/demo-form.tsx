import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import { Button, SelectBox, TextBox, Textarea, RadioButtons, Checkbox, DatePicker } from "~/components/controls";


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
const radioOptions = [
   { value: 'male', text: 'Nam' },
   { value: 'female', text: 'Nữ' },
   { value: 'other', text: 'Khác' },
]
const checkboxOptions = [
   { value: 'vn', text: 'Tiếng Việt' },
   { value: 'en', text: 'Tiếng Anh' },
   { value: 'jb', text: 'Tiếng Nhật' },
   { value: 'kr', text: 'Tiếng Hàn' },
]

const schema = yup.object({
   full_name: yup.string().required('Bắt buộc nhập Họ tên'),

   age: yup.number().typeError('Bắt buộc nhập Tuổi').max(100, 'Tuổi không hợp lệ').required('Bắt buộc nhập Tuổi'),

   address: yup.string().required('Bắt buộc nhập Địa chỉ'),

   gender: yup.string().required('Bắt buộc chọn Giới tính'),

   selectOnly: yup.mixed().required('Vui lòng chọn Trình độ').test('is-selected', 'Bắt buộc chọn Trình độ', (val: any) => !!val && !!val.value),

   selectMulti: yup.array().of(
      yup.object().shape({
         value: yup.string().required(),
      })
   ).required('Bắt buộc chọn Sở thích').min(2, 'Bắt buộc chọn ít nhất 2 Sở thích'),

   date_of_birth: yup.date().max(new Date(), 'Hãy chọn một ngày trong quá khứ'),//.required('Chọn ngày sinh'),

   languages: yup.array().required().typeError('Bắt buộc chọn Ngôn ngữ').min(2, 'Chọn ít nhất 2 ngôn ngữ'),
})

type TFormData = {
   full_name: string;
   email?: string;
   age: number;
   address: string;
   gender: string;
   selectOnly: any;
   selectMulti: any;
   date_of_birth?: Date;
   languages: string[];
}

function DemoForm() {
   const [result, setResult] = useState<string>('');
   const formRHF = useForm<TFormData>({
      resolver: yupResolver(schema),
      defaultValues: {
         //gender: 'male',
         selectOnly: { value: "", label: "--Tất cả--" },
         selectMulti: null,
         date_of_birth: new Date(),
      },
   })

   const onFormSubmit = (values: TFormData) => {
      setResult(JSON.stringify(values))
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

            <RadioButtons
               formRHF={formRHF}
               name='gender'
               label="Giới tính"
               isRequired
               options={radioOptions}
               isHorizontal
            />

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

            <DatePicker
               formRHF={formRHF}
               name='date_of_birth'
               label="Ngày sinh"
               isRequired
            />

            <Checkbox
               formRHF={formRHF}
               name='languages'
               label="Ngôn ngữ"
               isRequired
               options={checkboxOptions}
               isHorizontal
            />

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

         {
            result && <>
               <br /><div>Kết quả:</div><br />
               <div>
                  {result}
               </div>
            </>
         }
      </div>
   );
}

export default DemoForm;