import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import AllExercises from './pages/all-exercises/AllExercises';
import Community from './pages/community/Community';
import Shop from './pages/shop/Shop';
import Login from './pages/login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: '/all-exercises',
        element: <AllExercises />,
      },
      {
        path: '/community',
        element: <Community />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/*',
        element: <h1>404 Not Found</h1>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
