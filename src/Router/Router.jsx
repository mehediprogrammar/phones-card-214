import { createBrowserRouter } from "react-router-dom";
import MainLayoute from "../MainLayoute/MainLayoute";
import Favorites from "../Pages/Favorites/Favorites";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Phone from "../Pages/Phone/Phone";
import Eroors from "../component/Eroors/Eroors";


   const myRoute = createBrowserRouter([
      {
        path:"/", 
        element:<MainLayoute></MainLayoute>,
        errorElement:<Eroors></Eroors>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('/Phones.json')
            },
            {
                path:"/favorites",
                element:<Favorites></Favorites>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/phones/:id",
                element:<Phone></Phone>,
                loader:() => fetch('/Phones.json')
            }
        ]
      }
   ])


export default myRoute ;