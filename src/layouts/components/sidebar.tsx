import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar as Aside, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppContext } from '~/contexts/app-context';
import path from '~/constants/path';

function Sidebar() {
   const { groupRoles, menuRoles } = useContext(AppContext);

   const [collapsed] = useState(false);

   console.log("------------Sidebar groupRoles", groupRoles);

   return (
      <Aside collapsed={collapsed} width="230px">
         <Menu closeOnClick={true}>
            <MenuItem
               component={<NavLink to={path.home} />}
               icon={<FontAwesomeIcon icon={['fas', 'home']} />}
            >
               Trang chủ
            </MenuItem>

            <MenuItem
               component={<NavLink to={path.accounts} />}
               icon={<FontAwesomeIcon icon={['fas', 'gear']} />}
            >
               Accounts
            </MenuItem>

            <SubMenu label="Test 1" icon={<FontAwesomeIcon icon={['fas', 'gear']} />}>
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
            </SubMenu>
         </Menu>
      </Aside>
   );
}

export default Sidebar;