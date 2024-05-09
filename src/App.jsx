import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import AllExercises from './pages/all-exercises/AllExercises';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "/all-exercises",
        element: <AllExercises />
      },
      {
        path: "/coach-request",
        element: <h1>Coach Request</h1>
      },
      {
        path: "/community",
        element: <h1>Community</h1>
      },
      {
        path: "/shop",
        element: <h1>shop</h1>
      },
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
