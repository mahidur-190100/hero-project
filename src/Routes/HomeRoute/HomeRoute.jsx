import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Banner from "../../Components/Banner/Banner";
import Apps from "../../Pages/Apps/Apps";
import Home from "../../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [ 
        {index:true,
        loader:()=> fetch("./Home.json"),
        Component:Banner},
       
        {
        path:"/Apps",
        loader:()=> fetch("./Data.Json"),
        Component: Apps
    }
    ],
    
    
  },
]);
