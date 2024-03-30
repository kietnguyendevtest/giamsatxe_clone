import http from "./http";
import { SuccessResponse } from "~/types/utils-type";
import { Accounts } from "~/types/account-type";

const accountApi = {
   getListPaging: (body: any) => {
      const url = 'TaiKhoan/get-list-paging';
      return http.post<SuccessResponse<Accounts>>(url, body)
   }
}

export default accountApi;