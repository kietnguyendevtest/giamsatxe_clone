import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar as Aside, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import Tippy from '@tippyjs/react';
import { isMobile } from 'react-device-detect';

import { AppContext } from '~/contexts/app-context';
import { storage } from '~/utils';
import path from '~/constants/path';

function Sidebar() {
   const { groupRole, menuRole } = useContext(AppContext);

   const [collapsed, setCollapsed] = useState<boolean>(isMobile ? true : false);

   const handleCollapsed = () => {
      setCollapsed(prev => !prev);
   }

   const handleClickMenu = (_url: string, _pagelv1: string, _pagelv2: string) => {
      isMobile && handleCollapsed();

      storage.setCurrentUrl(_url);
      storage.setCurrentPageLv1(_pagelv1);
      storage.setCurrentPageLv2(_pagelv2);
      //storage.setCurrentControllerName(`${item2.ControllerName}`);
   }

   return (
      <>
         <div
            className="btn-collapsed"
            onClick={handleCollapsed}
         >
            <i className="fa-solid fa-bars"></i>
         </div>


         {!collapsed &&
            <div className="sidebar-header-mobile">
               <div className="sidebar-header-mobile__logo"></div>
               <div
                  className="sidebar-header-mobile__btn-close"
                  onClick={handleCollapsed}
               >
                  <i className="fa-solid fa-xmark"></i>
               </div>
            </div>
         }

         <Aside collapsed={collapsed} width="230px">
            <Menu closeOnClick={true}>
               <MenuItem
                  component={
                     <NavLink
                        to={path.home}
                        onClick={() => {
                           isMobile && handleCollapsed();

                           storage.setCurrentUrl(path.home);
                           storage.setCurrentPageLv1("");
                           storage.setCurrentPageLv2("");
                           storage.setCurrentControllerName("");
                        }}
                     />
                  }
                  icon={<i className="fa-solid fa-house"></i>}
               >
                  Trang chủ
               </MenuItem>

               <MenuItem
                  component={
                     <NavLink
                        to={path.demo_form}
                        onClick={() => handleClickMenu(path.demo_form, "Common", "Demo Form")}
                     />
                  }
                  icon={<i className="fa-solid fa-book"></i>}
               >
                  Demo Form
               </MenuItem>

               <SubMenu
                  label="BP Bảo vệ"
                  icon={<i className="fa-solid fa-mobile-screen-button fz-17"></i>}
               >
                  <MenuItem icon={<i className='fa-regular fa-hand-point-right'></i>}
                     component={<NavLink to={path.khcnss__kcs_app__security__vehicle_in}
                        onClick={() => handleClickMenu(path.khcnss__kcs_app__security__vehicle_in, "BP Bảo vệ", "Xe vào")} />}
                  >
                     Xe vào
                  </MenuItem>
                  <MenuItem
                     icon={<i className='fa-regular fa-hand-point-right'></i>}
                     component={<NavLink to={path.khcnss__kcs_app__security__vehicle_out}
                        onClick={() => handleClickMenu(path.khcnss__kcs_app__security__vehicle_out, "BP Bảo vệ", "Xe ra")} />}
                  >
                     Xe ra
                  </MenuItem>
               </SubMenu>

               <SubMenu
                  label="BP Kiểm liệu"
                  icon={<i className="fa-solid fa-mobile-screen-button fz-17"></i>}
               >
                  <MenuItem icon={<i className='fa-regular fa-hand-point-right'></i>}
                     component={<NavLink to={path.khcnss__kcs_app__kcs__scan_card}
                        onClick={() => handleClickMenu(path.khcnss__kcs_app__kcs__scan_card, "BP Kiểm liệu", "Quét thẻ")} />}
                  >
                     Quét thẻ
                  </MenuItem>
                  <MenuItem
                     icon={<i className='fa-regular fa-hand-point-right'></i>}
                     component={<NavLink to='*' />}
                  >
                     Danh sách KL chưa duyệt
                  </MenuItem>
               </SubMenu>

               {groupRole && groupRole.length > 0
                  && groupRole.map((item, index) => {
                     if (menuRole.filter((i) => i.NhomQuyenId.includes(item.Id)).length > 0) {
                        return (
                           <SubMenu
                              key={`menu-${index}`}
                              label={item.TenGoi}
                              icon={<i className={item.Icon}></i>}
                              open={item.TenGoi === storage.getCurrentPageLv1() ? true : undefined}
                           >
                              {menuRole && menuRole.length > 0
                                 && menuRole.map((item2, index2) => {
                                    if (item.Id === item2.NhomQuyenId && item2.IsActived) {
                                       return (
                                          <Tippy
                                             key={`menusub-${index2}`}
                                             placement='auto-end'
                                             delay={[500, 0]}
                                             content={item2.TenGoi}
                                             disabled={item2.TenGoi.length > 20 ? false : true}
                                          >
                                             <MenuItem
                                                icon={<i className={item2.Icon} ></i>}
                                                component={
                                                   <NavLink
                                                      to={`/${item2.Controller}`}
                                                      onClick={() => {
                                                         isMobile && handleCollapsed();

                                                         storage.setCurrentUrl(`/${item2.Controller}`);
                                                         storage.setCurrentPageLv1(`${item.TenGoi}`);
                                                         storage.setCurrentPageLv2(`${item2.TenGoi}`);
                                                         storage.setCurrentControllerName(`${item2.ControllerName}`);
                                                      }}
                                                   />
                                                }
                                             >
                                                {item2.TenGoi}
                                             </MenuItem>
                                          </Tippy>
                                       );
                                    }
                                 })}
                           </SubMenu>
                        );
                     }
                  })
               }

               {/* <SubMenu
                  label="Quản trị hệ thống"
                  icon={<i className="fa-solid fa-gears"></i>}
               //open={true}
               >
                  <MenuItem icon={<i className='fa-regular fa-hand-point-right'></i>}
                     component={<NavLink to={path.auth__group_role2} onClick={() => handleClickMenu(path.auth__group_role2, "Nhóm quyền")} />}
                  >
                     Nhóm quyền
                  </MenuItem>
                  <MenuItem
                     icon={<i className='fa-regular fa-hand-point-right'></i>}
                     component={<NavLink to={path.auth__menu_role2} onClick={() => handleClickMenu(path.auth__menu_role2, "Menu")} />}
                  //active={true}
                  >
                     Menu
                  </MenuItem>
                  <MenuItem icon={<i className='fa-regular fa-hand-point-right'></i>}
                     component={<NavLink to={path.auth__setting_role2} onClick={() => handleClickMenu(path.auth__setting_role2, "Vai trò")} />}
                  >
                     Vai trò
                  </MenuItem>
                  <MenuItem icon={<i className='fa-regular fa-hand-point-right'></i>}
                     component={<NavLink to={path.auth__accounts2} onClick={() => handleClickMenu(path.auth__accounts2, "Tài khoản")} />}
                  >
                     Tài khoản
                  </MenuItem>
               </SubMenu> */}

               {/* <SubMenu label="Test 2" icon={<FontAwesomeIcon icon={['fas', 'gear']} />}>
                  <SubMenu label="Test 2.1" icon={<FontAwesomeIcon icon={['fas', 'hand-point-right']} />}>
                     <MenuItem icon={<FontAwesomeIcon icon={['fas', 'hand-point-right']} />}>Test 2.1.1</MenuItem>
                  </SubMenu>

                  <MenuItem icon={<FontAwesomeIcon icon={['fas', 'hand-point-right']} />}>Test 2.2</MenuItem>

                  <SubMenu label="Test 2.3" icon={<FontAwesomeIcon icon={['fas', 'hand-point-right']} />}>
                     <SubMenu label="Test 2.3.1" icon={<FontAwesomeIcon icon={['fas', 'hand-point-right']} />}>
                        <MenuItem icon={<FontAwesomeIcon icon={['fas', 'hand-point-right']} />}>Test 2.3.1.1</MenuItem>
                        <MenuItem icon={<FontAwesomeIcon icon={['fas', 'hand-point-right']} />}>Test 2.3.1.2</MenuItem>
                     </SubMenu>

                     <MenuItem icon={<FontAwesomeIcon icon={['fas', 'hand-point-right']} />}>Test 2.3.2</MenuItem>
                  </SubMenu>
               </SubMenu> */}
            </Menu>
         </Aside>
      </>
   );
}

export default Sidebar;