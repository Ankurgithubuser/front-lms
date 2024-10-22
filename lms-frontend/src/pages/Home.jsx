import { Link } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout"
import homePageMainImage from "../assets/Images/homePageMainImage.png"
function Home(){

    return( 
       <HomeLayout>

       <div className="pt-10 text-white flex items-center justify-center gap-10 max-16 h-[90vh] ">

        <div className="w-1/2 space-y-6">
        <h1 className="semibold text-6xl">Find out Best <span className="text-yellow-500 font-bold">Online Course </span>
         </h1>
         <p className="text-2xl text-gray-200">
            We have large library of course tought by highily skilled and qualified faculties at a very affordable price.
         </p>
         <div className="space-x-6">
         <Link to="/courses">
         <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
            Explore courses
         </button>
         
         </Link>
         <Link to="/Contact">
         <button className="border border-yellow-500 px-6 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
            Contact us
         </button>
         
         </Link>
         </div>
        </div>
        <div className="w-1/2 flex item-center justify-center">
        <img src={homePageMainImage} alt="home page" />
        </div>
       </div>
       </HomeLayout>
       
    )

}
export default Home;