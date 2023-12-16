import Login from './Login';
import Browse from './Browse';
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import MovieDetails from './MovieDetails';

const Body = () => {
 const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<Login />
    },
    {
        path:'/browse',
        element:<Browse />
    },
    {
        path:'/movie-details/:movieId',
        element:<MovieDetails />
    }
 ])

 
  return (
   <RouterProvider router={appRouter} />
  )
}

export default Body