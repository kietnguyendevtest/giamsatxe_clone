import { createContext, useState } from 'react'
import { Menu, NhomQuyen, PhanQuyen } from '~/types/auth-type';

interface AppContextInterface {
   isAuthenticated: boolean;
   setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;

   groupRole: NhomQuyen[];
   menuRole: Menu[],
   setRole: PhanQuyen[],

   setGroupRole: React.Dispatch<React.SetStateAction<any>>;
   setMenuRole: React.Dispatch<React.SetStateAction<any>>;

   refresh: () => void;
   reset: () => void;
}

const initialAppContext: AppContextInterface = {
   isAuthenticated: Boolean(localStorage.getItem('access_token')),
   setIsAuthenticated: () => null,

   groupRole: [],
   menuRole: [],
   setRole: [],
   setGroupRole: () => null,
   setMenuRole: () => null,

   refresh: () => null,
   reset: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated);

   const [groupRole, setGroupRole] = useState<NhomQuyen[]>(initialAppContext.groupRole);
   const [menuRole, setMenuRole] = useState<Menu[]>(initialAppContext.menuRole);
   const [setRole, setSetRole] = useState<PhanQuyen[]>(initialAppContext.setRole);

   const reset = () => {
      setIsAuthenticated(false);
      localStorage.clear();
   }

   const refresh = () => {

      setGroupRole(JSON.parse(localStorage.getItem('group_role') || '[]'));
      setMenuRole(JSON.parse(localStorage.getItem('menu_role') || '[]'));
      setSetRole(JSON.parse(localStorage.getItem('set_role') || '[]'));
   }

   return (
      <AppContext.Provider
         value={{
            isAuthenticated,
            setIsAuthenticated,

            groupRole,
            menuRole,
            setRole,
            setGroupRole,
            setMenuRole,

            refresh,
            reset,
         }}
      >
         {children}
      </AppContext.Provider>
   )
}
