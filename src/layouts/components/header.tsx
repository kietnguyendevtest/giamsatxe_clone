import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { AppContext } from "~/contexts/app-context";

function Header() {
   const { reset } = useContext(AppContext);
   const navigate = useNavigate();

   const handeSubmitLogout = () => {
      reset();
      navigate('/login');
   }

   return (
      <header className="header-container">
         <div className="header-left">
            <NavLink
               to="/"
               className="header-left--logo"
            />
         </div>

         <div className="header-right">
            <button onClick={handeSubmitLogout}>Logout</button>
         </div>
      </header>
   );
}

export default Header;