import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import CryptoJS from "crypto-js";

import { Sidebar as Aside, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppContext } from '~/contexts/app-context';
import path from '~/constants/path';
// import config from '~/constants/config';

function Sidebar() {
   const { groupRoles, menuRoles } = useContext(AppContext);

   const [collapsed] = useState(false);

   console.log("------------Sidebar groupRoles", menuRoles);

   return (
      <Aside collapsed={collapsed} width="230px">
         <Menu closeOnClick={true}>
            <MenuItem
               component={<NavLink to={path.home} />}
               icon={<i className="fa-solid fa-house"></i>}
            >
               Trang chủ
            </MenuItem>

            <MenuItem
               component={<NavLink to={path.accounts} />}
               icon={<FontAwesomeIcon icon={['fas', 'gear']} />}
            >
               Accounts
            </MenuItem>

            {groupRoles && groupRoles.length > 0
               && groupRoles.map((item, index) => {
                  if (menuRoles.filter((i) => i.NhomQuyenId.includes(item.Id)).length > 0) {
                     return (
                        <SubMenu
                           key={`menu-${index}`}
                           label={item.TenGoi}
                           icon={<i className={item.Icon}></i>}
                           title={item.TenGoi}
                        >
                           {menuRoles && menuRoles.length > 0
                              && menuRoles.map((item2, index2) => {
                                 if (item.Id === item2.NhomQuyenId && item2.IsActived) {
                                    return (
                                       <MenuItem
                                          key={`menusub-${index2}`}
                                          icon={<i className={item2.Icon} ></i>}
                                          component={
                                             <NavLink
                                                to={`/${item2.Controller}`}
                                             // onClick={() => {
                                             //    localStorage.setItem(config.STORAGE_CURRENTURL , CryptoJS.Rabbit.encrypt(`/${item2.Controller}`, config.SECRET_ENCRYPTION));

                                             //    localStorage.setItem(config.STORAGE_CURRENTPAGE, `${item2.TenGoi}`);

                                             //    localStorage.setItem(config.STORAGE_CURRENTCONTROLLERNAME, CryptoJS.Rabbit.encrypt(`${item2.ControllerName}`, config.SECRET_ENCRYPTION));
                                             // }}
                                             />
                                          }
                                          title={item2.TenGoi}
                                       >
                                          {item2.TenGoi}
                                       </MenuItem>
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
   );
}

export default Sidebar;