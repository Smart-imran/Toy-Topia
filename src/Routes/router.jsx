import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";


const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout ,
  },
  {
    path: "/auth",
    element: <h2>Auth</h2>,
  },
  {
    path: "/auth",
    element: <h2>Authentic Route</h2>,
  },
  {
    path: "/news",
    element: <h2>News layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error</h2>,
  },
]);

export default router;
