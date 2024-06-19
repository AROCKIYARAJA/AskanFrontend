import React from 'react'
import { GoArrowDownRight } from 'react-icons/go';
import AboutImage from "../assets/AboutImage.png";
import "./font.css";

function AboutUs() {
    return (
        <div className='mt-0'>
            <hr className=' w-[1200px] h-[1.5px] mx-auto max-w-[90%] bg-gray-400' />
            <div className="mt-10">
                <div className="text-center text-[1rem] w-fit mx-auto px-3 py-1 rounded-md bg-orange-900 text-white">About Us</div>
                <div className="text-center text-[2rem] text-gray-700 font-roman font-[800] mt-5">Why We are the Best</div>
            </div>
            <div className="w-[1200px] mx-auto max-w-[90%] lg:mt-20 mt-10 flex justify-center gap-10 lg:flex-row flex-col ">
                <div className="lg:hidden block">
                    <img src={AboutImage} alt="" className='w-[350px] mx-auto'/>
                </div>
                <div className="flex flex-col gap-5 leading-relaxed tracking-wide lg:w-[50%]">
                    <div className="md:text-left text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quidem necessitatibus nemo alias. Architecto suscipit, nisi fugiat tempore quod voluptatum alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ad voluptas doloribus, dolorum incidunt officiis magnam eius placeat similique rerum.
                    </div>
                    <div className="md:text-left text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ad iusto, accusamus pariatur similique cum. Commodi itaque corporis vero exercitationem sapiente veritatis hic, alias odio distinctio omnis qui, animi atque porro facere? Sint architecto earum sit dolorem dolor ab maxime.
                    </div>
                    <div className="md:text-left text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste deleniti corrupti debitis optio dolore molestias eos eum aliquam nam quos ut distinctio minima odio, nobis ipsum aspernatur earum voluptate. Saepe culpa placeat adipisci illum sint?</div>
                    <div className="flex lg:justify-normal justify-center text-center">
                        <button className='flex items-center justify-center gap-2 px-14 py-3 rounded-bl-[25px] w-fit rounded-tr-[25px] bg-orange-900 text-white '>
                            <span className='text-[1.3rem] font-[300] font-roman'>Read More</span>
                            <GoArrowDownRight className='text-[1.7rem]' />
                        </button>
                    </div>
                </div>
                <div className="w-[45%] lg:block hidden">
                    <img src={AboutImage} alt="" />
                </div>
            </div>
            <br id='Testimonial'/>
        </div>
    )
}

export default AboutUs