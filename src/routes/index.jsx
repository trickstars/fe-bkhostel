import { createBrowserRouter } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
import AdminLayout from '../layouts/AdminLayout';
import ErrorPage from '../pages/error/Error';
import HomePage from '../pages/home/Home';
import LoginPage from '../pages/login/Login';
import RegisterPage from '../pages/register/Register';
import EnterEmailPage from '../pages/enter-email/EnterEmail';
import SendPasswordPage from '../pages/send-password/SendPassword';
import SavePost from '../pages/save-post/SavePost';
const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/enter-email',
    element: <EnterEmailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/send-password',
    element: <SendPasswordPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/save-post',
    element: <SavePost />,
    errorElement: <ErrorPage />,
  },
  // Admin routes will be updated soon
]);

export default router;
