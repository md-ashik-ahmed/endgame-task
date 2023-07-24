import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import PrivateRoute from "./PrivateRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>, 
      element: <Main></Main>,
      children: [
        {
          path: "/college",
          element: <Colleges></Colleges>,
        },
        {
          path: "/admission",
          element: <Admission></Admission>,
        },
        {
          path: "/mycollege",
          element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>,
        },
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        }
      ]
    },
  ]);