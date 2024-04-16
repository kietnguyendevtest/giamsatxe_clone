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

   const handeChangeTheme = (e: any) => {
      if (!e.target.checked) {
         document.getElementsByTagName("html")[0].classList.remove("dark");
      } else {
         document.getElementsByTagName("html")[0].classList.add("dark");
      }
      setDisDark(prev => !prev);
   };

   const handleTippyRight = () => {
      setShowTippyRight(prev => !prev);
   }

   const handeSubmitLogout = () => {
      reset();
      navigate('/login');
   }

   return (
      <header className="header-container">
         <div className="header-left">
            <NavLink
               to={path.home}
               replace
               onClick={() => {
                  storage.setCurrentUrl(path.home);
                  storage.setCurrentPageLv1("");
                  storage.setCurrentPageLv2("");
                  storage.setCurrentControllerName("");
               }}
               className="header-left__logo d-md-none"
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
                              <div className="header-left__app-item">
                                 <i className="fa-solid fa-hand-point-right"></i>
                                 <span>Quản lý tài sản</span>
                              </div>

                              <div className="header-left__app-item active">
                                 <i className="fa-solid fa-hand-point-right"></i>
                                 <span>App kiểm liệu</span>
                              </div>

                              <div className="header-left__app-item">
                                 <i className="fa-solid fa-hand-point-right"></i>
                                 <span>PMC KHC|NSS</span>
                              </div>
                              <div className="header-left__app-item">
                                 <i className="fa-solid fa-hand-point-right"></i>
                                 <span>PMC AHT</span>
                              </div>
                              <div className="header-left__app-item">
                                 <i className="fa-solid fa-hand-point-right"></i>
                                 <span>PMC VMS</span>
                              </div>
                              <div className="header-left__app-item">
                                 <i className="fa-solid fa-hand-point-right"></i>
                                 <span>PMC TMS</span>
                              </div>
                              <div className="header-left__app-item">
                                 <i className="fa-solid fa-hand-point-right"></i>
                                 <span>PMC DNS</span>
                              </div>

                              <div className="header-left__app-item">
                                 <i className="fa-solid fa-hand-point-right"></i>
                                 <span>eDelivery KHC|NSS</span>
                              </div>
                              <div className="header-left__app-item">
                                 <i className="fa-solid fa-hand-point-right"></i>
                                 <span>eDelivery AHT</span>
                              </div>
                              <div className="header-left__app-item">
                                 <i className="fa-solid fa-hand-point-right"></i>
                                 <span>eDelivery TMS</span>
                              </div>
                              <div className="header-left__app-item">
                                 <i className="fa-solid fa-hand-point-right"></i>
                                 <span>eDelivery DNS</span>
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
                           <span>App kiểm liệu</span>
                           <i className="fa-solid fa-caret-down"></i>
                        </div>
                     </div>

                  </div>
               </Tippy>
            </div>
         </div>

         <div className="header-right">
            <ul className="header-right__list">
               <li className="d-md-none">
                  <label className="header-right__item ui-switch">
                     <input
                        id="changeTheme"
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
                                 <div className='header-right__dropdown-item item-user d-none d-md-block'>
                                    <i className="fa-solid fa-circle-user"></i>
                                    <span>{getFullName()}</span>
                                 </div>

                                 <label className='header-right__dropdown-item d-none d-md-block' htmlFor="changeTheme">
                                    {isDark ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
                                    <span>Đổi giao diện</span>
                                 </label>

                                 <NavLink
                                    to={path.change_password}
                                    className='header-right__dropdown-item'
                                    children={
                                       <>
                                          <i className="fa-solid fa-repeat"></i>
                                          <span>Đổi mật khẩu</span>
                                       </>
                                    }
                                    onClick={() => {
                                       handleTippyRight();

                                       storage.setCurrentUrl(path.change_password);
                                       storage.setCurrentPageLv1("");
                                       storage.setCurrentPageLv2("Đổi mật khẩu");
                                       storage.setCurrentControllerName("");
                                    }}
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
                     onClickOutside={handleTippyRight}
                  >
                     <div className="header-right__item-wrapper">
                        <div className="header-right__item d-md-none" onClick={handleTippyRight}>
                           <i className="fa-solid fa-circle-user"></i>
                           <span>{getFullName()}</span>
                        </div>

                        <button className="header-right__btn-more d-none d-md-block" onClick={handleTippyRight}>
                           <i className="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                     </div>
                  </Tippy>
               </li>
            </ul>
         </div>
      </header>
   );
}

export default Header;