import { useContext } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";

import { AppContext } from "~/contexts/app-context";
import path from "~/constants/path";

import AuthLayout from "~/layouts/auth-layout";
import MainLayout from "~/layouts/main-layout";

import Home from "~/pages/home";
import NotFound from "~/pages/not-found";

import Login from "~/pages/auth/login";
import Accounts from "~/pages/auth/accounts";

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
               path: path.accounts,
               element: (
                  <MainLayout>
                     <Accounts />
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