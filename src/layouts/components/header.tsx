import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Tippy from '@tippyjs/react/headless';

import { AppContext } from "~/contexts/app-context";
import { storage } from "~/utils";
import path from "~/constants/path";
import PopperWrapper from "~/components/popper";

function Header() {
   const { reset } = useContext(AppContext);
   const navigate = useNavigate();

   const [showTippy, setShowTippy] = useState<boolean>(false);

   const [isDark, setDisDark] = useState<boolean>(false);

   const handeChangeTheme = (e: any) => {
      if (!e.target.checked) {
         document.getElementsByTagName("html")[0].classList.remove("dark");
      } else {
         document.getElementsByTagName("html")[0].classList.add("dark");
      }
      setDisDark(!isDark);
   };


   const handeSubmitLogout = () => {
      reset();
      navigate('/login');
   }

   const getFullName = () => {
      try {
         const infoProfile = storage.getProfile();

         if (infoProfile) {
            const jsonInfo = JSON.parse(infoProfile);
            return jsonInfo.HoLot.toString() + " " + jsonInfo.Ten.toString();
         }
      } catch (error) {
         return "";
      }
   }


   return (
      <header className="header-container">
         <div className="header-left">
            <NavLink
               to={path.home}
               className="header-left--logo"
            />
         </div>

         <div className="header-right">
            <ul className="header-right__list">
               <li>
                  <label className="ui-switch">
                     <input
                        type="checkbox"
                        checked={isDark}
                        onChange={handeChangeTheme}
                     />
                     <div className="slider">
                        <div className="circle"></div>
                     </div>
                  </label>
               </li>
               <li>
                  <Tippy
                     interactive
                     render={(attrs) => (
                        <PopperWrapper {...attrs}>
                           <button onClick={handeSubmitLogout} >Logout</button>
                        </PopperWrapper>
                     )}
                     visible={showTippy}
                     onClickOutside={() => setShowTippy(!showTippy)}
                  >
                     <div className="header-right__item" onClick={() => setShowTippy(!showTippy)}>
                        <i className="fa-solid fa-circle-user"></i>
                        <span>{getFullName()}</span>
                     </div>
                  </Tippy>
               </li>
            </ul>

         </div>
      </header>
   );
}

export default Header;