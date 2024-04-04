
import { useContext, useEffect } from "react";
import { useRouteElements } from "./hooks";

import { AppContext } from "~/contexts/app-context";
import Toastify from "~/components/toastify";
import "~/assets/scss/main.scss";

function App() {
   const { refresh } = useContext(AppContext);
   const routeElements = useRouteElements();

   useEffect(() => {
      if (localStorage.getItem('access_token')) {
         refresh();
      }
   }, []);

   return (
      <>
         {routeElements}

         <Toastify />
      </>
   )
}

export default App;
