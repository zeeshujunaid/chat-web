import Home from './screens/home'
import Login from './screens/login'
import Singup from './screens/singup'
import Loading from './screens/loading'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
export default function App() {

  const router = createBrowserRouter([
    {path: "/", element:<Loading/>},
    {path: "/home", element:<Home/>},
    {path: "/singup", element:<Singup/>},
    {path: "/login", element:<Login/>},
  ]);
  return <RouterProvider router={router}/>
}

