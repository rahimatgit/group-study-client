import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Pages/Home/Home";
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Assignments from '../Pages/Assignments';
import PrivateRoute from "./PrivateRoute";
import CreateAssignment from "../Pages/CreateAssignment";
import SubmittedAssignment from "../Pages/SubmittedAssignment";
import MyAssignment from "../Pages/MyAssignment";
import Update from "../Components/Update";

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
            element: <PrivateRoute><Assignments></Assignments></PrivateRoute>,
            loader: () => fetch('https://assignment-11-group-study-server.vercel.app/assignmentCount')
        },
        {
          path: "/create",
          element: <CreateAssignment></CreateAssignment>
        },
        {
          path: "/submitted",
          element: <SubmittedAssignment></SubmittedAssignment>
        },
        {
          path: "/my-assignment",
          element: <MyAssignment></MyAssignment>
        },
        {
          path: "/update/:id",
          element: <Update></Update>,
          loader: ({params}) => fetch(`https://assignment-11-group-study-server.vercel.app/assignments/${params.id}`)
        }
      ]
    },
  ]);

