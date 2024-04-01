
import { useRouteElements } from "./hooks";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "~/assets/scss/main.scss";

function App() {
   library.add(fas, far, fab);
   const routeElements = useRouteElements();

   return (
      <>
         {routeElements}
      </>
   )
}

export default App;
