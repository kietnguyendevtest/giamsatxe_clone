
import { useRouteElements } from "./hooks";

import "~/assets/scss/main.scss";

function App() {
   const routeElements = useRouteElements();

   return (
      <>
         {routeElements}
      </>
   )
}

export default App;
