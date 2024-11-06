import './App.css'
import Aboutus from './pages/Aboutus';
import Home from './pages/Home'
import Notfound from './pages/Notfound';
import {Route,Routes} from 'react-router-dom'
import Signup from './pages/Signup';
import Signin from './pages/Signin'

function App() {



  return (
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<Aboutus/>}/>
  <Route path='*' element={<Notfound/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/signin' element={<Signin/>}/>

 </Routes>
  )
}

export default App;
