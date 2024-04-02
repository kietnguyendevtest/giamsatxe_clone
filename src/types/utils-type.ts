export interface SuccessResponse<Data> {
   Result?: Data
   Success: boolean
   Message: string
   StatusCode: number
}
export interface ErrorResponse<Data> {
   Result?: Data
   Success?: boolean
   Message: string
   StatusCode: number
}


// cú pháp `-?` sẽ loại bỏ undefiend của key optional
export type NoUndefinedField<T> = {
   [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>
}
