import './App.css'
import Aboutus from './pages/Aboutus';
import Home from './pages/Home'
import Notfound from './pages/Notfound';
import {Route,Routes} from 'react-router-dom'
import Signup from './pages/Signup';
import Signin from './pages/Signin'
import Contact from './pages/contact';
import Denied from './pages/Denied';

function App() {

  return (
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<Aboutus/>}/>
  <Route path='*' element={<Notfound/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/contacts' element={<Contact/>}/>
  <Route path='/signin' element={<Signin/>}/>
  <Route path='/denied' element={<Denied/>}/>
  

 </Routes>
  )
}

export default App;
