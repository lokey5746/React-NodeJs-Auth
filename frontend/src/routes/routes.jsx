import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "../screens/layout/HomeLayout";
import Error from "../screens/error/Error";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";
import DashboardLayout from "../screens/layout/DashboardLayout";
import Home from "../screens/home/Home";
import Profile from "../screens/user/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },

      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,

        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

const routes = () => {
  return <RouterProvider router={router} />;
};

export default routes;
