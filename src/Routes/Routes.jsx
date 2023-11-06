import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Pages/Home";
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Assignments from '../Pages/Assignments';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/assignments",
            element: <Assignments></Assignments>
        }
      ]
    },
  ]);

