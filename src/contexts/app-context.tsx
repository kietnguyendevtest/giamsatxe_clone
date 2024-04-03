import { createContext, useState } from 'react'
import { Menu, NhomQuyen } from '~/types/auth-type';
import { getAccessTokenFromLS } from '~/utils'

interface AppContextInterface {
   isAuthenticated: boolean;
   setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;

   groupRoles: NhomQuyen[];
   setGroupRoles: React.Dispatch<React.SetStateAction<any>>;
   menuRoles: Menu[],
   setMenuRoles: React.Dispatch<React.SetStateAction<any>>;

   reset: () => void;
}

const initialAppContext: AppContextInterface = {
   isAuthenticated: Boolean(getAccessTokenFromLS()),
   setIsAuthenticated: () => null,

   groupRoles: [],
   setGroupRoles: () => null,
   menuRoles: [],
   setMenuRoles: () => null,

   reset: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated);

   const [groupRoles, setGroupRoles] = useState<NhomQuyen[]>(initialAppContext.groupRoles);
   const [menuRoles, setMenuRoles] = useState<Menu[]>(initialAppContext.menuRoles);

   const reset = () => {
      setIsAuthenticated(false);
      localStorage.clear();
   }

   return (
      <AppContext.Provider
         value={{
            isAuthenticated,
            setIsAuthenticated,

            groupRoles,
            setGroupRoles,
            menuRoles,
            setMenuRoles,

            reset
         }}
      >
         {children}
      </AppContext.Provider>
   )
}
