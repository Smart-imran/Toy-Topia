import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../components/pages/Home";
import CategoryToys from "../components/pages/CategoryToys";
import Login from "../components/pages/LogPage/Login";
import Register from "../components/pages/LogPage/Register";
import AuthLayout from "../Layouts/AuthLayout";
import ToysDetails from "../components/ToysDetails";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryToys,
        loader: () => fetch("/toys.json"),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },

  {
    path: "/card-details/:toyId",
    element: (
      <PrivateRoute>
        <ToysDetails />
      </PrivateRoute>
    ),
    loader: () => fetch("/toys.json"),
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
