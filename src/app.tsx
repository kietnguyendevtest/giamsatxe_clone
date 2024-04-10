
import { useContext, useEffect } from "react";
import { useRouteElements } from "./hooks";


import { AppContext } from "~/contexts/app-context";
import { storage } from "./utils";
import Toastify from "~/components/toastify";

import 'tippy.js/dist/tippy.css';
import "~/assets/scss/main.scss";

function App() {
   const { refresh } = useContext(AppContext);
   const routeElements = useRouteElements();

   useEffect(() => {
      try {
         if (storage.getAccessToken()) {
            refresh();
         }
      } catch (error) {
         storage.clearAll();
         window.location.reload();
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
