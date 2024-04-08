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

   const [showTippyLeft, setShowTippyLeft] = useState<boolean>(false);
   const [showTippyRight, setShowTippyRight] = useState<boolean>(false);

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
               className="header-left__logo"
            />
            <div className="header-left__app-wrapper">
               <Tippy
                  interactive
                  render={(attrs) => (
                     <div className="header-left__dropdown" tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                           <div className="header-left__app-list">
                              <div className="header-left__app-item ">
                                 <i className="fa-solid fa-hand-point-right"></i>
                                 <span>Quản lý đặt hàng</span>
                              </div>
                              <div className="header-left__app-item active">
                                 <i className="fa-solid fa-hand-point-right"></i>
                                 <span>Quản lý tài sản</span>
                              </div>
                              <div className="header-left__app-item">
                                 <i className="fa-solid fa-hand-point-right"></i>
                                 <span>PMC KHC|NSS</span>
                              </div>
                              <div className="header-left__app-item">
                                 <i className="fa-solid fa-hand-point-right"></i>
                                 <span>PMC AHT</span>
                              </div>
                           </div>
                        </PopperWrapper>
                     </div>
                  )}
                  visible={showTippyLeft}
                  onClickOutside={() => setShowTippyLeft(!showTippyLeft)}
               >
                  <div onClick={() => setShowTippyLeft(!showTippyLeft)}>
                     <div className="header-left__app-choose">
                        <div className="app-choose--text">
                           <i className="fa-solid fa-layer-group"></i>
                           <span>Quản lý tài sản</span>
                           <i className="fa-solid fa-caret-down"></i>
                        </div>
                     </div>

                  </div>
               </Tippy>
            </div>
         </div>

         <div className="header-right">
            <ul className="header-right__list">
               <li>
                  <label className="header-right__item ui-switch">
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
                        <div className="header-right__dropdown" tabIndex={-1} {...attrs}>
                           <PopperWrapper>
                              <div className='header-right__dropdown-list'>
                                 <NavLink
                                    to={path.change_password}
                                    className='header-right__dropdown-item'
                                    children={
                                       <>
                                          <i className="fa-solid fa-repeat"></i>
                                          <span>Đổi mật khẩu</span>
                                       </>
                                    }
                                 />
                                 <div className='header-right__dropdown-item' onClick={handeSubmitLogout}>
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                    <span>Đăng xuất</span>
                                 </div>
                              </div>
                           </PopperWrapper>
                        </div>
                     )}
                     visible={showTippyRight}
                     onClickOutside={() => setShowTippyRight(!showTippyRight)}
                  >
                     <div className="header-right__item" onClick={() => setShowTippyRight(!showTippyRight)}>
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