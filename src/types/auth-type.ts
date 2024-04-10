import * as yup from 'yup'
//import { Account } from './account-type'
import { SuccessResponse } from './utils-type'
import { authShema } from '~/utils/rules'

///--Login
export type AuthLogin = yup.InferType<typeof authShema>

///--Account
export interface Account {
   Id?: string,
   UserName: string,
   VaiTro?: string,
   VaiTroId?: string,
   SoDienThoai?: string,
   Email: string,
   HoLot?: string,
   Ten?: string,
   NgaySinh?: string,
   GioiTinh?: number,
   Token?: string,
   RefreshToken?: string,
   IsAD?: boolean,
}
export interface Accounts {
   PageIndex: 0,
   TotalRow: 24,
   Data: Account[]
}

///--Nhóm quyền
export interface NhomQuyen {
   Id: string,
   TenGoi: string,
   Icon: string,
   //Sort: 20,=
}

///--Menu
export interface Menu {
   Id: string,
   ControllerName: string,
   Controller: string,
   Icon: string,
   TenGoi: string,
   NhomQuyenId: string,
   TenNhom: string,
   // NhomSort: 20,
   // Sort: 20,
   CoXem: boolean,
   CoThem: boolean,
   CoCapNhat: boolean,
   CoXoa: boolean,
   CoDuyet: boolean,
   CoThongKe: boolean,
   CoImport: boolean,
   CoExport: boolean,
   IsActived: boolean
}

///--Phân quyền
export interface PhanQuyen {
   ControllerName?: string,
   IsXem?: boolean,
   IsThem?: boolean,
   IsCapNhat?: boolean,
   IsXoa?: boolean,
   IsDuyet?: boolean,
   IsThongKe?: boolean,
   IsImport?: boolean,
   IsExport?: boolean
}


///--Response
export type AuthResponse = SuccessResponse<{
   TaiKhoan: Account
   PhanQuyen: PhanQuyen[]
   Menu: Menu[]
   NhomQuyen: NhomQuyen[]
}>

export type RefreshTokenReponse = SuccessResponse<{
   Token: string,
   RefreshToken: string
}>
