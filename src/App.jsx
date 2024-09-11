import { BrowserRouter, Routes ,Route} from "react-router-dom"
import Signup from "./signup"
import Login from "./login"
import Chat from "./chatarea"
import Loader from "./loaders"
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loader props='flex justify-center items-center h-screen w-full' />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

