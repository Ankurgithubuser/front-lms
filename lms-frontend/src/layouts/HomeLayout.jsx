import {FiMenu} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'; 
import {AiFillCloseCircle} from 'react-icons/ai';
import Footer from "../components/Footer";
function HomeLayout({children}) {
        
    const dispatch= useDispatch();
    const navigate = useNavigate();
        

    const isLoggedIn = useSelector((state)=>state?.auth.isLoggedIn)
    const role = useSelector((state)=>state?.auth?.role)
    

    function changeWidth(){
        const drawerSide = document.getElementsByClassName("drawer-side")
        drawerSide[0].style.width ='auto';
    }
    function hideDrawer(){
            const element =document.getElementsByClassName("drawer-toggle")
            element[0].checked = false;

            const drawerSide = document.getElementsByClassName("drawer-side")
            drawerSide[0].style.width ='0';
    }
    function onLogOut(e) {
        e.preventDefault();
        navigate("/");
        
    }
    return(
        <div className="min-h-[90vh]">
             <div className="drawer absolute left-0 z-50 w-full">
                <input  id="my-drawer" type="checkbox" className="drawer-toggle" />
           <div className="drawer-content">
            <label htmlFor="my-drawer">
            <FiMenu onClick={changeWidth} size={"32px"} className='font-bold text-white m-5 '/>
            </label>

                           </div>
            <div className="drawer-side w-0">
                <label htmlFor="my-drawer " className="drawer-overlay"></label>
                <ul className="menu p-4 w-48 sm:w-80 h-[100%] bg-base-200 text-base-content relative ">
                    
                    <li className='w-fit absolute right-2 z-50'>
                       <button onClick={hideDrawer}>
                        <AiFillCloseCircle size={24}/>
                       </button>
                    </li>
                    <li>
                        <Link to ="/">
                      Home
                        </Link>
                    </li>
                    <li>
                    
                        {isLoggedIn && role === "ADMIN" && (
                            <li>
                                <Link to="/admin/dasboard">Admin Dasboard</Link>
                            </li>
                        )}
                    
                        <Link to ="/about">
                      About us
                        </Link>
                    </li>
                    <li>
                        <Link to ="/contact">
                      Contact us
                        </Link>
                    </li>
                    <li>
                        <Link to ="/courses">
                     All courses
                        </Link>
                    </li>
                
                    {!isLoggedIn ?  (
                        <li className='bottom-4 absolute w-[90%]'>
                            <div className='w-full flex items-center justify-center'>
                                <button className=' bg-red-400  text-white px-4 py-1 font-semibold rounded-md w-full'>
                                    <Link to= "/login">Login</Link>
                                </button>
                                <button className=' bg-green-400 text-white px-4 py-1 font-semibold rounded-md w-full'>
                                    <Link to= "/signup">SignUp</Link>
                                </button>
                            </div>
                        </li>
                    ) :(
                        <li className='bottom-4 absolute w-[90%]'>
                            <div className='w-full flex items-center justify-center'>
                                <button className='bg-red-400 text-white  px-4 py-1 font-semibold rounded-md w-full'>
                                    <Link to= "/user/profile">Profile</Link>
                                </button>
                                <button className='bg-green-400 text-white px-4 py-1 font-semibold rounded-md w-full'>
                                    <Link onClick={onLogOut}>Logout</Link>
                                </button>
                            </div>
                        </li>
                    )
                    }
                </ul>
            </div>

            </div>
            {children}
            <Footer/>
        
        </div>
    )
}
export default HomeLayout