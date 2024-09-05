import Home from './screens/home'
import Login from './screens/login'
import Signup from './screens/singup'
import Loading from './screens/loading'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
export default function App() {

  const router = createBrowserRouter([
    {path: "/", element:<Loading/>},
    {path: "/home", element:<Home/>},
    {path: "/signup", element:<Signup/>},
    {path: "/login", element:<Login/>},
  ]);
  return <RouterProvider router={router}/>
}

