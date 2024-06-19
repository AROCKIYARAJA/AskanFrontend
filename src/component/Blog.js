import React from 'react'
import BlogImage1 from "../assets/BlogImage1.png";
import BlogImage2 from "../assets/BlogImage2.png";
import BlogImage3 from "../assets/BlogImage3.png";
import { GoArrowDownRight } from 'react-icons/go';
import "./font.css";

function Blog() {
    return (
        <div>
            <div className="text-[1.2rem] text-center text-gray-400 font-[500]">Blog</div>
            <div className="md:text-[2rem] lg:text-[2.5rem] text-[1.5rem] text-center text-orange-900 font-[700] font-roman">Read Our Articles</div>
            <div className="flex items-center justify-normal gap-5 mt-5 w-fit mx-auto max-w-[90%] md:py-10 px-5 snap-x overflow-x-scroll">
                <div className="flex snap-start flex-col gap-5 min-w-[250px] w-[280px] md:w-[300px] p-3 lg:hover:shadow-2xl duration-300 transition-all bg-white lg:hover:-translate-y-5">
                    <img src={BlogImage1} alt="BlogImage1" className='w-[100%] mx-auto md:w-[95%]' />
                    <div className="flex items-center justify-between">
                        <span>👤John Doe</span>
                        <span>📅 Feb 23, 2024</span>
                    </div>
                    <div className="text-[12.5px] md:text-[13px] lg:text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id enim dignissimos minima quaerat beatae.</div>
                    <div className="text-right"><button className='px-2 py-1 text-[12px] bg-gray-500 text-gray-50 rounded-md'>View Details </button></div>
                </div>
                <div className="flex snap-start flex-col gap-5 min-w-[250px] w-[280px] md:w-[300px] p-3 lg:hover:shadow-2xl duration-300 transition-all bg-white lg:hover:-translate-y-5">
                    <img src={BlogImage2} alt="BlogImage2" className='w-[100%] mx-auto md:w-[95%]' />
                    <div className="flex items-center justify-between">
                        <span>👤John Doe</span>
                        <span>📅 Feb 23, 2024</span>
                    </div>
                    <div className="text-[12.5px] md:text-[13px] lg:text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id enim dignissimos minima quaerat beatae.</div>
                    <div className="text-right"><button className='px-2 py-1 text-[12px] bg-gray-500 text-gray-50 rounded-md'>View Details </button></div>
                </div>
                <div className="flex snap-start flex-col gap-5 min-w-[250px] w-[280px] md:w-[300px] p-3 lg:hover:shadow-2xl duration-300 transition-all bg-white lg:hover:-translate-y-5">
                    <img src={BlogImage3} alt="BlogImage3" className='w-[100%] mx-auto md:w-[95%]' />
                    <div className="flex items-center justify-between">
                        <span>👤John Doe</span>
                        <span>📅 Feb 23, 2024</span>
                    </div>
                    <div className="text-[12.5px] md:text-[13px] lg:text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id enim dignissimos minima quaerat beatae.</div>
                    <div className="text-right"><button className='px-2 py-1 text-[12px] bg-gray-500 text-gray-50 rounded-md'>View Details </button></div>
                </div>
            </div>
            <div className="w-fit mx-auto mt-5">
                <button type="button" className="px-8 py-3 rounded-bl-[20px] rounded-tr-[20px] text-lg font-[300] bg-orange-900 text-gray-50 flex items-center justify-center gap-3">
                    <span className='font-roman'>READ MORE</span>
                    <GoArrowDownRight className='text-[1.5rem]' />
                </button>
            </div>
        </div>
    )
}

export default Blog