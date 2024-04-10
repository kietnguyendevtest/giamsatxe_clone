import { useContext, useLayoutEffect, useState } from 'react';

import { AppContext } from '~/contexts/app-context';
import { PhanQuyen } from '~/types/auth-type';
import { storage } from '~/utils';

function useSetRole() {
   const context = useContext(AppContext);

   const [roles, setRoles] = useState<PhanQuyen>({});

   useLayoutEffect(() => {
      const currentControllerName = storage.getCurrentControllerName();

      if (currentControllerName && context.setRole.length > 0) {
         for (let x in context.setRole) {
            if (context.setRole[x]["ControllerName"] === currentControllerName) {
               const objRole = {
                  IsXem: context.setRole[x]["IsXem"] || false,
                  IsThem: context.setRole[x]["IsThem"] || false,
                  IsCapNhat: context.setRole[x]["IsCapNhat"] || false,
                  IsXoa: context.setRole[x]["IsXoa"] || false,
                  IsImport: context.setRole[x]["IsImport"] || false,
                  IsExport: context.setRole[x]["IsExport"] || false
               }
               setRoles(objRole);
               break;
            }
         }
      }
   }, [context.setRole]);

   return roles;
}

export default useSetRole;