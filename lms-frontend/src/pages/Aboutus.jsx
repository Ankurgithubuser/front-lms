import HomeLayout from "../layouts/HomeLayout";
import aboutMainPage from "../assets/Images/aboutMainImage.png"
import apj from "../assets/Images/apj.png"
import billGates from "../assets/Images/billGates.png"
import nelsonMandela from "../assets/Images/nelsonMandela.png"
import steveJobs from "../assets/Images/steveJobs.png"

function Aboutus() {
 
    
    return(
        <HomeLayout>
            <div className="flex pl-20 pt-24 flex-col text-white">

                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-100 ">
                           our goal is to provide the affordable and quality education to the world.
                           we are providing the paltform for the the aspiring teachers and students to share their
                           skills,creativity and knowledge to each other to empower and contribute in the growth and wellness of mankind. 
                        </p>
                    </section>
                            <div className="w-1/2">
                                <img src={aboutMainPage} 
                                alt="about Main page"
                                className="drop-shadow-2xl"
                                

                                 />
                            </div>
                         </div>
                         <div className="carousel w-1/2 my-10 mx-auto">
                    <div id="slide1" className="carousel-item relative w-full">
                       <div className="flex flex-col items-center justify-center gap-4 px-[15%]">

                     <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
                     <p className="text-xl text-gray-200">“It Is Very Easy To Defeat Someone, But It Is Very Hard To Win Someone”
                     </p>
                     <h1 className="text-2xl font-semibold">APJ Abdul Kalam</h1>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                       </div>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img
                        src={billGates}
                        className="w-40 rounded-full border-2 border-gray-400" />
                         <p className="text-xl text-gray-200">“Patience is a key element of success.”

                     </p>
                     <h1 className="text-2xl font-semibold">Bill Gates</h1>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                       <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                       <img
                        src={nelsonMandela}
                        className="w-40 rounded-full border-2 border-gray-400" />
                         <p className="text-xl text-gray-200">“Overcoming poverty is not a task of charity, it is an act of justice.”

                     </p>
                     <h1 className="text-2xl font-semibold">Nelson Mandela</h1>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                       </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img
                        src={steveJobs}
                        className="w-40 rounded-full border-2 border-gray-400" />
                         <p className="text-xl text-gray-200">“Innovation distinguishes between a leader and a follower.”
                     </p>
                     <h1 className="text-2xl font-semibold">Steve Jobs</h1>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                        </div>
                    </div>
                    </div>
                                </div>
                            </HomeLayout>
                        )
                    }

export default Aboutus;