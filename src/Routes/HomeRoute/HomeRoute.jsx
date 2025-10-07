import { createBrowserRouter } from 'react-router-dom'

import Banner from '../../Components/Banner/Banner'
import Apps from '../../Pages/Apps/Apps'
import Home from '../../Pages/Home/Home'
import AppDetails from '../../Pages/Apps/AppDetails'
import Banner2 from '../../Components/Banner/Banner2'

// Ensure loaders return parsed JSON so useLoaderData() receives arrays/objects
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
    
    children: [
      {
        index: true,
        loader: () => fetch('/Home.json').then((res) => res.json()),
        Component: Banner
      },
      {
        path: 'Apps',
        loader: () => fetch('/Data.Json').then((res) => res.json()),
        Component: Apps
      },
      {
        path: 'AppDetails/:Id',
        loader: () => fetch('/Data.Json').then((res) => res.json()),       
        Component: AppDetails
      },
    ],
  },
])
