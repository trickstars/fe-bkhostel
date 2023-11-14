import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import ErrorPage from "../pages/error/Error";
import HomePage from "../pages/home/Home";
import LoginPage from "../pages/login/Login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    errorElement:<ErrorPage />, 
    children: [
      {index: true, element: <HomePage />}
    ]
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  }
  // Admin routes will be updated soon
]);

export default router;