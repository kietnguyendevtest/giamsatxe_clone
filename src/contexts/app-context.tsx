import { createContext, useState } from 'react'
import { Menu, NhomQuyen, PhanQuyen } from '~/types/auth-type';
import { storage } from '~/utils';

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
   isAuthenticated: Boolean(storage.getAccessToken()),
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
      storage.clearAll();
   }

   const refresh = () => {

      setGroupRole(JSON.parse(storage.getGroupRole()) || []);
      setMenuRole(JSON.parse(storage.getMenuRole()) || []);
      setSetRole(JSON.parse(storage.getSetRole()) || []);
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
