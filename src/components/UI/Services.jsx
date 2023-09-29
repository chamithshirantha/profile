import React from "react";
import frontendImg from '../../assets/images/front-end.png';
import backendImg from '../../assets/images/backend.png';
import uiImg from '../../assets/images/design.png';
import appsImg from '../../assets/images/apps.png';

const Services = () => {
    return(
        <section id="services">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">What do I</h2>
                    <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
                    I'm versatile professional with a passion for creating exceptional digital experiences. 
                    With expertise in Backend Development, Frontend Development, and UI/UX Design, 
                    I bring a unique blend of technical prowess and design sensibility to every project 💪.  
                    </p>
                </div>
                <div className="flex flex-col jusitfy-center sm:py-12">
                    <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                        <div className="relative text-gray-700 antialiased text-sm font-semiblod">
                            <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>
                            {/* ============= left card ============= */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                   <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1300" className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">Backend Development</h3>
                                                <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                                Strong backend develop Using Laravel, Nodejs(express), Python(Flask & Django).
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={backendImg} alt=""/>
                                        </figure>
                                    </div>
                                </div>

                                
                            </div>
                            {/* ============= right card ============= */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                   <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1300" className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">Frontend Development</h3>
                                                <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                                Responsive Websites Develop Using React JS, Tailwind CSS, Html5, CSS, JavaScript.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={frontendImg} alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>

                             {/* ============= left card ============= */}
                             <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                   <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1400" className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">API Development</h3>
                                                <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                                API development Using Laravel & Nodejs(express).Dashbord for mobile app & websites.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={uiImg} alt=""/>
                                        </figure>
                                    </div>
                                </div>

                                
                            </div>
                            {/* ============= right card ============= */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                   <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos="fade-left" data-aos-delay="150" data-aos-duration="1500" className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">UI/UX Design</h3>
                                                <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                                Creative UI design using wordpress and figma.full custom design for website and mobile app
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={appsImg} alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services