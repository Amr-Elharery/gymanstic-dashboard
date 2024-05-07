import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {
        path: "",
        element: <h1>Dashboard</h1>
      },
      {
        path: "/all-exercises",
        element: <h1>All Exercises</h1>
      },
      {
        path: "/coach-request",
        element: <h1>Coach Request</h1>
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
