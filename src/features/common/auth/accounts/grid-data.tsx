import { useQuery } from "@tanstack/react-query";
import accountApi from "~/api/account-api";



function GridData() {

   const body = {
      PageIndex: 0,
      RowPerPage: 20
   }

   const { data, isLoading } = useQuery({
      queryKey: ['account_list', body],
      queryFn: () => accountApi.getListPaging(body)
   })

   return (
      <div>
         {
            !isLoading &&
            <table>
               <thead>
                  <tr>
                     <th>Username</th>
                     <th>Họ</th>
                     <th>Tên</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     data?.data.Result?.Data.map((item, index) => {
                        return (
                           <tr key={index}>
                              <td>{item.UserName}</td>
                              <td>{item.HoLot}</td>
                              <td>{item.Ten}</td>
                           </tr>
                        )
                     })
                  }
               </tbody>
            </table>
         }
      </div>
   );
}

export default GridData;