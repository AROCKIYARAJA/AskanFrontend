import React from 'react'
import { GoArrowDownRight } from "react-icons/go";
import Coffee1 from "../assets/Coffee1.png";
import Coffee2 from "../assets/Coffee2.png";
import Coffee3 from "../assets/Coffee3.png";
import Coffee4 from "../assets/Coffee4.png";
import Coffee5 from "../assets/Coffee5.png";
import "./font.css";
import { MdRocket } from "react-icons/md";
function HeroContainer() {
    return (
        <>
            <br id='Top' />
            <div>
                <div className="lg:mt-20 md:mt-10 mt-14">
                    <div className="container flex flex-col items-center px-4 py-16 pb-14 mx-auto text-center lg:pb-20 md:py-16 md:px-10 lg:px-32 text-gray-900">
                        <h1 className="text-[2.5rem] md:leading-none leading-[40px] font-[800] sm:text-6xl xl:max-w-3xl text-gray-900 md:w-full w-[90%] mx-auto font-roman">Enjoy Your Favorite Coffee with Ngopi</h1>
                        <p className="mt-6 mb-7 text-md sm:mb-10 xl:max-w-3xl text-gray-900  w-[90%] md:w-[75%] lg:w-[60%] mx-auto">Discover tranquility at Ngopi a sanctuary for unwinding,
                            where your evenings are perfected with relaxation and rich flavors.</p>
                        <div className="flex  justify-center">
                            <button type="button" className="px-8 py-3 rounded-bl-[20px] rounded-tr-[20px] text-lg font-[300] bg-orange-900 text-gray-50 flex items-center justify-center gap-3"><span>EXPLORE PRODUCT</span> <GoArrowDownRight className='text-[1.5rem]' /></button>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <div className="grid grid-cols-5 w-[1000px] mx-auto max-w-[94%] items-center justify-center gap-2">
                        <img src={Coffee1} alt="Coffee 1" />
                        <img src={Coffee2} alt="Coffee 2" />
                        <img src={Coffee3} alt="Coffee 3" />
                        <img src={Coffee4} alt="Coffee 4" />
                        <img src={Coffee5} alt="Coffee 5" />
                    </div>
                </div>
                <hr className=' w-[1200px] h-[1.5px] mx-auto max-w-[90%] bg-gray-400' />
                <div className="lg:my-14 md:my-10 my-5 w-[1200px] mx-auto max-w-[90%] grid grid-cols-2 lg:grid-cols-4 justify-center items-center md:gap-5 gap-3">
                    <div className="flex items-center justify-center flex-col border rounded-xl hover:shadow-2xl bg-orange-950  text-white p-3">
                        <div className="md:text-[3.5rem] sm:text-[2.3rem] text-[2.1rem] font-[500]">30+</div>
                        <div className="md:text-[1.4rem] sm:text-[1.5rem] text-[0.9rem] font-[300]">Coffee Variant</div>
                    </div>
                    <div className="flex items-center justify-center flex-col border rounded-xl hover:shadow-2xl p-3 bg-orange-800 text-white">
                        <div className="md:text-[3.5rem] sm:text-[2.3rem] text-[2.1rem] font-[500]">20+</div>
                        <div className="md:text-[1.4rem] sm:text-[1.5rem] text-[0.9rem] font-[300]">Meeting</div>
                    </div>
                    <div className="flex items-center justify-center flex-col border rounded-xl hover:shadow-2xl p-3 bg-orange-300 text-white">
                        <div className="md:text-[3.5rem] sm:text-[2.3rem] text-[2.1rem] font-[500]">25+</div>
                        <div className="md:text-[1.4rem] sm:text-[1.5rem] text-[0.9rem] font-[300]">Event Space</div>
                    </div>
                    <div className="flex items-center justify-center flex-col border rounded-xl hover:shadow-2xl p-3 bg-white border-orange-900">
                        <div className="md:text-[3.5rem] sm:text-[2.3rem] text-[2.1rem] font-[500]">40+</div>
                        <div className="md:text-[1.4rem] sm:text-[1.5rem] text-[0.9rem] font-[300]">Global Achievements</div>
                    </div>
                </div>
                <hr className=' w-[1200px] h-[1.5px] mx-auto max-w-[90%] bg-gray-400' id='Products' />
                <a href='#Top' className=' fixed bottom-10 right-10 rounded-full p-3 text-white bg-orange-900'><MdRocket className='text-[1.6rem]' /></a>
            </div>
        </>
    )
}

export default HeroContainer