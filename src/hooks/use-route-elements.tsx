import { useContext } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";

import { AppContext } from "~/contexts/app-context";
import path from "~/constants/path";

import AuthLayout from "~/layouts/auth-layout";
import MainLayout from "~/layouts/main-layout";

///--Features Common
import Home from "~/features/common/home";
import NotFound from "~/components/not-found";
import Login from "~/features/common/auth/login";
import ChangePassword from "~/features/common/auth/change-password";
import GroupRole from "~/features/common/auth/group-role";
import MenuRole from "~/features/common/auth/menu-role";
import SettingRole from "~/features/common/auth/setting-role";
import Accounts from "~/features/common/auth/accounts";

///--Features kcs
import XeVao from "~/features/kcs/xe-vao";
import XeRa from "~/features/kcs/xe-ra";

function ProtectedRoute() {
   const { isAuthenticated } = useContext(AppContext)
   return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
   const { isAuthenticated } = useContext(AppContext)
   return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

function useRouteElements() {
   const routeElements = useRoutes([
      {
         path: '',
         element: <RejectedRoute />,
         children: [
            {
               path: path.login,
               element: (
                  <AuthLayout>
                     <Login />
                  </AuthLayout>
               )
            },
         ]
      },
      {
         path: '',
         element: <ProtectedRoute />,
         children: [
            {
               path: '',
               index: true,
               element: (
                  <MainLayout>
                     <Home />
                  </MainLayout>
               )
            },
            {
               path: path.change_password,
               element: (
                  <MainLayout>
                     <ChangePassword />
                  </MainLayout>
               )
            },
            {
               path: path.auth__group_role,
               element: (
                  <MainLayout>
                     <GroupRole />
                  </MainLayout>
               )
            },
            {
               path: path.auth__menu_role,
               element: (
                  <MainLayout>
                     <MenuRole />
                  </MainLayout>
               )
            },
            {
               path: path.auth__setting_role,
               element: (
                  <MainLayout>
                     <SettingRole />
                  </MainLayout>
               )
            },
            {
               path: path.auth__accounts,
               element: (
                  <MainLayout>
                     <Accounts />
                  </MainLayout>
               )
            },

            ///--Features kcs
            {
               path: path.kcs__xe_vao,
               element: (
                  <MainLayout>
                     <XeVao />
                  </MainLayout>
               )
            },
            {
               path: path.kcs__xe_ra,
               element: (
                  <MainLayout>
                     <XeRa />
                  </MainLayout>
               )
            },
         ]
      },
      {
         path: '*',
         element: (
            <MainLayout>
               <NotFound />
            </MainLayout>
         )
      }
   ])
   return routeElements
}

export default useRouteElements;