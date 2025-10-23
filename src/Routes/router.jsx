import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../components/pages/Home";
import CategoryToys from "../components/pages/CategoryToys";


const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout ,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryToys,
        loader:()=>fetch('/toys.json')
      },
    ],
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
