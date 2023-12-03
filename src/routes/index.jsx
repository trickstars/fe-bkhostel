import { createBrowserRouter } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
// import AdminLayout from '../layouts/AdminLayout';
import ErrorPage from '../pages/error/Error';
import HomePage from '../pages/home/Home';
import LoginPage from '../pages/login/Login';
import RegisterPage from '../pages/register/Register';
import EnterEmailPage from '../pages/enter-email/EnterEmail';
import SendPasswordPage from '../pages/send-password/SendPassword';
import PricingPage from '../pages/pricing/Pricing';
import PostsPage from '../pages/posts/Posts';
import DetailPost from '../pages/posts/DetailPost';
import PostDetail from '../pages/post-detail/PostDetail'
import { PostFilterContextProvider } from '../contexts/PostFilterContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <PostFilterContextProvider><HomePage /></PostFilterContextProvider>}],
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
    path: '/pricing',
    element: <PricingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/posts',
    element: <PostsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/posts/detail',
    element: <DetailPost />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/post/detail/:id',
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <PostDetail />}],
  },
  
  // Admin routes will be updated soon
]);

export default router;
