import { createBrowserRouter } from "react-router-dom";

import Banner from "../../Components/Banner/Banner";
import Apps from "../../Pages/Apps/Apps";
import Home from "../../Pages/Home/Home";
import AppDetails from "../../Pages/Apps/AppDetails";
import Installation from "../../Pages/Installation/Installation";
import Error from "../../Pages/ErrorPage/Error";

// Ensure loaders return parsed JSON so useLoaderData() receives arrays/objects
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <Error> </Error>,

    children: [
      {
        index: true,
        // loader: () => fetch('/Home.json').then((res) => res.json()),
        loader: async () => {
          // Add artificial delay (e.g., 2 seconds)
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const res = await fetch("/Home.json");
          return res.json();
        },
        Component: Banner,
        errorElement: <Error />,
      },
      {
        path: "/Apps",
        loader: () => fetch("/Data.Json").then((res) => res.json()),
        Component: Apps,
        errorElement: <Error> </Error>,
      },
      {
        path: "/AppDetails/:Id",
        loader: () => fetch("/Data.Json").then((res) => res.json()),
        Component: AppDetails,
        errorElement: <Error> </Error>,
      },
      {
        path: "/Installation",
        loader: () => fetch("/Data.Json").then((res) => res.json()),
        Component: Installation,
        errorElement: <Error> </Error>,
      },
    ],
  },
]);
