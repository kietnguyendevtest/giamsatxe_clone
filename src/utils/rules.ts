import * as yup from 'yup'

export const authShema = yup.object({
   username: yup
      .string()
      .required('Vui lòng nhập dữ liệu'),
   password: yup
      .string()
      .required('Vui lòng nhập dữ liệu'),
})

export const accountSchema = yup.object({
   Email: yup
      .string()
      .required('Email là bắt buộc')
      .email('Email không đúng định dạng')
      .min(5, 'Độ dài từ 5 - 160 ký tự')
      .max(160, 'Độ dài từ 5 - 160 ký tự'),
   UserName: yup.string()
      .required('User Name là bắt buộc')
})