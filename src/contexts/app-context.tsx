import { createContext, useState } from 'react'
import { getAccessTokenFromLS } from '~/utils'

interface AppContextInterface {
   isAuthenticated: boolean;
   setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;

   groupRoles: any;
   setGroupRoles: React.Dispatch<React.SetStateAction<any>>;

   reset: () => void;
}

const initialAppContext: AppContextInterface = {
   isAuthenticated: Boolean(getAccessTokenFromLS()),
   setIsAuthenticated: () => null,

   groupRoles: [],
   setGroupRoles: () => null,

   reset: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated);

   const [groupRoles, setGroupRoles] = useState<any>(initialAppContext.groupRoles);

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

            reset
         }}
      >
         {children}
      </AppContext.Provider>
   )
}
