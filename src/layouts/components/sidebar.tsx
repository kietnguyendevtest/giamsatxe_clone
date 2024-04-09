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

   return (
      <>
         <div
            className="btn-collapsed"
            onClick={handleCollapsed}
         >
            <i className="fa-solid fa-bars"></i>
         </div>


         {
            !collapsed &&
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

                           //storage.setCurrentUrl(path.home);
                           storage.setCurrentPage("");
                           //storage.setCurrentControllerName("");
                        }}
                     />
                  }
                  icon={<i className="fa-solid fa-house"></i>}
               >
                  Trang chủ
               </MenuItem>

               {groupRole && groupRole.length > 0
                  && groupRole.map((item, index) => {
                     if (menuRole.filter((i) => i.NhomQuyenId.includes(item.Id)).length > 0) {
                        return (
                           <SubMenu
                              key={`menu-${index}`}
                              label={item.TenGoi}
                              icon={<i className={item.Icon}></i>}
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

                                                         //storage.setCurrentUrl(`/${item2.Controller}`);
                                                         storage.setCurrentPage(`${item2.TenGoi}`);
                                                         //storage.setCurrentControllerName(`${item2.ControllerName}`);
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
                  })}

               {/* <SubMenu label="Test 1" icon={<FontAwesomeIcon icon={['fas', 'gear']} />}>
               <MenuItem icon={<FontAwesomeIcon icon={['fas', 'hand-point-right']} />} component={<NavLink to="/ho-so-nhan-su" />}>Test 1.1</MenuItem>
               <MenuItem icon={<FontAwesomeIcon icon={['fas', 'hand-point-right']} />}>Test 1.2</MenuItem>
            </SubMenu>
            <SubMenu label="Test 2" icon={<FontAwesomeIcon icon={['fas', 'gear']} />}>
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