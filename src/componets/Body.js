import {useEffect} from 'react'
import Login from './Login';
import Browse from './Browse';
import {RouterProvider,createBrowserRouter,useNavigate} from "react-router-dom"
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firbase';
import { useDispatch } from "react-redux";

const Body = () => {
 const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<Login />
    },
    {
        path:'/browse',
        element:<Browse />
    }
 ])

 
  return (
   <RouterProvider router={appRouter} />
  )
}

export default Body