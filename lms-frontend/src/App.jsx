import './App.css'
import Aboutus from './pages/Aboutus';
import RequireAuth from './components/Auth/RequireAuth'

import Home from './pages/Home'
import Notfound from './pages/Notfound';
import {Route,Routes} from 'react-router-dom'
import Signup from './pages/Signup';
import Signin from './pages/Signin'
import Contact from './pages/Contact';
import Denied from './pages/Denied';
import CourseList from './pages/Course/CourseList';
import CourseDescription from './pages/Course/CourseDescription';
import CreateCourse from './pages/Course/CreateCourse';
import Profile from './pages/User/Profile';
import EditProfile from './pages/User/EditProfile';

function App() {

  return (
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<Aboutus/>}/>
  <Route path='*' element={<Notfound/>}/>
  <Route path='/signup' element={<Signup/>}/>

    
  <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/editprofile" element={<EditProfile />} />

      </Route>
  <Route  element={<RequireAuth allowedRoles={["ADMIN","USER"]} />} >
        <Route path="/course/create" element={<CreateCourse />} />
        
      </Route>

  <Route path='/contacts' element={<Contact/>}/>
  <Route path='/signin' element={<Signin/>}/>
  <Route path='/denied' element={<Denied/>}/>
  <Route path='/courses' element={<CourseList/>}/>
  <Route path='/course/description' element={<CourseDescription/>}/>
  

 </Routes>
  )
}

export default App;
