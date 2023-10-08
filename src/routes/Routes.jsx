import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ErrorPage from "../shared/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../shared/Details";
import PrivateRoute from "./PrivateRoute";
import Galary from "../shared/Galary";
import Profile from "../shared/Profile";
import About from "../shared/About";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/service.json')
            },
            {
               path:'/details/:id',
               element:<PrivateRoute><Details></Details></PrivateRoute>,
               loader:()=>fetch('/service.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/gallery',
                element:<PrivateRoute><Galary></Galary></PrivateRoute>
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:'/about',
                element:<PrivateRoute><About></About> </PrivateRoute>
            }
        ]
    }
])
export default router;