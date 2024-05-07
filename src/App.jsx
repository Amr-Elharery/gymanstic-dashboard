import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SideBar from './layout/aside/SideBar';


const router = createBrowserRouter([
  {
    path:"/",
    element: <SideBar />,
    children:[]
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
