import { createBrowserRouter } from "react-router-dom";
import MainLayoute from "../MainLayoute/MainLayoute";
import Favorites from "../Pages/Favorites/Favorites";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";


   const myRoute = createBrowserRouter([
      {
        path:"/", 
        element:<MainLayoute></MainLayoute>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:"/favorites",
                element:<Favorites></Favorites>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
      }
   ])


export default myRoute ;