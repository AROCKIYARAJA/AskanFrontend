import React from 'react'
import { IoIosMail } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import FooterLogo from "../assets/FooterLogo.png";
import "./font.css"
function Footer() {
    return (
        <div className='w-full bg-[#272C40] ' id='Contact'>
            <div className="w-[1300px] mx-auto max-w-full grid grid-cols-1 tfxl:grid-cols-10 p-5 md:p-16 mt-16 h-fit gap-5">
                <div className=" tfxl:col-span-3 flex flex-col gap-3 p-4">
                    <div className="flex gap-3">
                        <img src={FooterLogo} alt="" className='w-[40px]' />
                        <span className='font-roman text-[2rem] text-white font-[900]'>Ngopi</span>
                    </div>
                    <div className="text-white font-[400] tracking-wider leading-relaxed my-5">Discover tranquility at Ngopi a sanctuary for unwinding, where your evenings are perfected with relaxation and rich flavors.</div>
                    <div className="">
                        <div className="text-white">hello@ngopi.com</div>
                        <div className="text-white">Phone: +01 23456789</div>
                    </div>
                </div>
                <div className="tfxl:col-span-6 p-5 flex flex-col">
                    <div className="flex items-normal justify-between flex-wrap gap-8">
                        <div className="">
                            <div className="font-roman font-[800] text-white text-[1.6rem] tracking-wider">Quick Links</div>
                            <ul className='mt-3'>
                                <li className='my-3 text-gray-300 tracking-wide'>Services</li>
                                <li className='my-3 text-gray-300 tracking-wide'>Portfolio</li>
                                <li className='my-3 text-gray-300 tracking-wide'>About us</li>
                                <li className='my-3 text-gray-300 tracking-wide'>Testimonial</li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="font-roman font-[800] text-white text-[1.6rem] tracking-wider">Resources</div>
                            <ul className='mt-3'>
                                <li className='my-3 text-gray-300 tracking-wide'>Support</li>
                                <li className='my-3 text-gray-300 tracking-wide'>Privacy Policy</li>
                                <li className='my-3 text-gray-300 tracking-wide'>Terms & Conditions</li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="font-roman font-[800] text-white text-[1.6rem] tracking-wider">Social Media</div>
                            <ul className='mt-3 flex items-center gap-2'>
                                <li className='text-gray-300 hover:text-[#3c52f9] hover:bg-white bg-gray-500 p-2 rounded-md' title='FaceBook'><FaFacebookF className='text-[1.3rem]' /></li>
                                <li className='text-gray-300 hover:text-[#000000] hover:bg-white bg-gray-500 p-2 rounded-md' title='Twitter'><FaXTwitter className='text-[1.3rem]' /></li>
                                <li className='text-gray-300 hover:text-[#ff5bb0] hover:bg-white bg-gray-500 p-2 rounded-md' title='Instagram'><IoLogoInstagram className='text-[1.3rem]' /></li>
                                <li className='text-gray-300 hover:text-[#006eff] hover:bg-white bg-gray-500 p-2 rounded-md' title='Linked In'><FaLinkedinIn className='text-[1.3rem]' /></li>
                                <li className='text-gray-300 hover:text-[red] hover:bg-white bg-gray-500 p-2 rounded-md' title='You Tube'><FaYoutube className='text-[1.3rem]' /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="font-roman font-[800] text-[1.6rem] text-white tracking-wider w-[90%] mx-auto max-w-full">Subscribe</div>
                        <div className="flex items-center justify-center gap-3 bg-gray-700 rounded-lg border-gray-400 w-[90%] mx-auto max-w-full px-3">
                            <span className='text-white'><IoIosMail className='text-[2.5rem]' /></span>
                            <input type="email" placeholder='name@domain.com' className=' bg-transparent text-white w-full text-[15px] h-[45px]' />
                            <button className='px-5 py-2 text-white bg-orange-900 rounded-md'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer