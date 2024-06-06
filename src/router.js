import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import AllExercises from './pages/all-exercises/AllExercises';
import CoachRequest from './pages/coach-request/CoachRequest';
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
        path: '/coach-request',
        element: <CoachRequest />,
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
        path: '/login',
        element: <Login />,
      },
      {
        path: '/*',
        element: <h1>404 Not Found</h1>,
      },
    ],
  },
]);

export default router;
