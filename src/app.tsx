
import { useContext, useEffect } from "react";
import { useRouteElements } from "./hooks";

import { AppContext } from "./contexts/app-context";
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
      </>
   )
}

export default App;
