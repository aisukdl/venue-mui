import {
    createBrowserRouter,
    RouterProvider,
    Navigate
  } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";
import { DashboardPage } from "../pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/dashboard"/>
    }
    ,
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path:"*",
        element: <MainPage />,
        children: [
            {path: 'products', element: <ProductPage/>},
            {path: 'dashboard', element: <DashboardPage/>}
        ]
    }
  ])

  export const Router = () => {
    return <RouterProvider router={router} />
  }