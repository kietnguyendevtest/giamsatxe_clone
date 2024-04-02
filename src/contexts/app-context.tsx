import { createContext, useState } from 'react'
import { getAccessTokenFromLS } from '~/utils'

interface AppContextInterface {
   isAuthenticated: boolean;
   setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;

   groupRoles: [];
   setGroupRoles: React.Dispatch<React.SetStateAction<any>>;
   menuRoles: [],

   reset: () => void;
}

const initialAppContext: AppContextInterface = {
   isAuthenticated: Boolean(getAccessTokenFromLS()),
   setIsAuthenticated: () => null,

   groupRoles: [],
   setGroupRoles: () => null,
   menuRoles: [],

   reset: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated);

   const [groupRoles, setGroupRoles] = useState<[]>(initialAppContext.groupRoles);
   const [menuRoles] = useState<[]>(initialAppContext.menuRoles);

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

            reset
         }}
      >
         {children}
      </AppContext.Provider>
   )
}
