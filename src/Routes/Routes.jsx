import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Auth/Login/Login";
import SignUp from "../pages/Auth/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../pages/Sheard/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/menu',
            element:<Menu></Menu>,
        },
        {
            path:'/order/:category',
            element:<Order></Order>,
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>,
        },
        {
            path:'secret',
            element:<PrivateRoutes><Secret></Secret></PrivateRoutes>,
        },
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoutes><Dashboard/></PrivateRoutes>,
      children:[
        {
          path: 'cart',
          element: <Cart></Cart>
        }
      ]
    }
  ]);