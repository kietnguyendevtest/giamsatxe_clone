import * as yup from 'yup'
import { Account } from './account-type'
import { SuccessResponse } from './utils-type'
import { authShema } from '~/utils/rules'

export type AuthLogin = yup.InferType<typeof authShema>

export type AuthResponse = SuccessResponse<{
   TaiKhoan: Account
   PhanQuyen: [{
      ControllerName: string,
      IsXem: boolean,
      IsThem: boolean,
      IsCapNhat: boolean,
      IsXoa: boolean,
      IsDuyet: boolean,
      IsThongKe: boolean,
      IsImport: boolean,
      IsExport: boolean
   }]
   Menu: []
   NhomQuyen: []
}>

export type RefreshTokenReponse = SuccessResponse<{
   Token: string,
   RefreshToken: string
}>
