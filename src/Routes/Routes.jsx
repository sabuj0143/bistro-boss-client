import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "../components/PrivateRoute/AdminRoute";
import ManageItems from "../Layout/ManageItems/ManageItems";
// import Payment from "../Layout/Dashboard/Payment/Payment";
import UserHome from "../Layout/Dashboard/UserHome/UserHome";
import AdminHome from "../Layout/Dashboard/Admin-Home/AdminHome";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "myCart",
          element: <MyCart></MyCart>
        },
        {
          path: "userhome",
          element: <UserHome></UserHome>
        },
        // {
        //   path: "payment",
        //   element: <Payment></Payment>
        // },
        // Admin routers
        {
          path: "adminhome",
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: "allUsers",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: "addItem",
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: "manageItem",
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        }
      ]
    }
  ]);