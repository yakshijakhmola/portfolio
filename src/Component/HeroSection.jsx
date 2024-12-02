import React from 'react'
import Project from './Project';
import Skills from './Skills';
import { GrDownload } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiUserStarLine } from "react-icons/ri";
import Footer from './Footer';
import { assets } from '../../public/assets';


const HeroSection = () => {
  return (
    <>
        <div className='pt-10' id='about'>
            <div className='container'>
                <div className='centerdiv'>
                    <div>
                        <h1 className='text-2xl md:text-3xl lg:text-6xl xl:text-6xl text-white font-HeadingFont font-bold mb-3'>I am Yakshi Jakhmola <br/> A Web Designer</h1>
                        <p className='text-lg text-white'>I am a skilled web designer with expertise in crafting visually stunning and user-friendly websites. My technical proficiency includes HTML, CSS, JavaScript, and React, allowing me to build dynamic and responsive web applications. I also have experience working with WordPress, enabling me to create and customize websites efficiently. creativity with technical expertise, I am dedicated to delivering designs that meet both client goals and user needs.</p>
                        <a href={assets.CV} target='_blank' className='whitebtn mt-5 font-HeadingFont inline-flex items-center justify-between'><span>Download CV</span> <span><GrDownload /></span></a>
                    </div>
                    <div className='flex items-center justify-end'>
                        <img src='/hero.png'/>
                    </div>
                </div>
            </div>
        </div>
        <Skills/>
        <Project/>
        <div className='pt-10' id='contact'>
            <div className='container'>
                <div className='w-full flex items-start gap-10 flex-wrap xl:flex-nowrap lg:flex-nowrap'>
                    <div className='w-full md:w-full xl:w-5/12 lg:w-5/12'>
                        <form className='bg-lightblacktheme p-5 rounded-xl'>
                            <h3 className='text-whitetheme text-bold text-xl lg:text-4xl xl:text-4xl font-HeadingFont mb-5'>Reach Us</h3>
                            <div className='mb-5'>
                                <input className='inputdiv' type='text' placeholder='Name'/>
                            </div>
                            <div className='mb-5'>
                                <input className='inputdiv' type='text' placeholder='Email'/>
                            </div>
                            <div className='mb-5'>
                                <input className='inputdiv' type='text' placeholder='Phone Number'/>
                            </div>
                            <div className='mb-5'>
                                <input className='textareadiv' type='text' placeholder='Comment'/>
                            </div>
                            <button className='whitebtn w-full py-4'>Submit Enquiry</button>
                        </form>
                    </div>
                    <div className='w-full md:w-full lg:w-8/12 xl:w-8/12'>
                        <h2 className='text-xl xl:text-5xl lg:text-5xl md:text-3xl text-whitetheme font-bold font-HeadingFont'>Experience</h2>
                        <div className='mt-7'>
                            <div className='flex items-start space-x-5 border-b-solid border-b-white-theme border-b-2 py-4'>
                                <div>
                                    <h6 className='text-white text-3xl'><FiPhoneCall/></h6>
                                </div>
                                <div>
                                    <h6 className='text-white font-bold text-xl'>Phone Number</h6>
                                    <p className=' text-white mt-1'>8588906090</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-5 border-b-solid border-b-white-theme border-b-2 py-4'>
                                <div>
                                    <h6 className='text-white text-3xl'><MdOutlineMailOutline/></h6>
                                </div>
                                <div>
                                    <h6 className='text-white font-bold text-xl'>Email Id</h6>
                                    <p className=' text-white mt-1'>jakhmolayakshi12@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-5 border-b-solid border-b-white-theme border-b-2 py-4'>
                                <div>
                                    <h6 className='text-white text-3xl'><IoLocationOutline/></h6>
                                </div>
                                <div>
                                    <h6 className='text-white font-bold text-xl'>Address</h6>
                                    <p className=' text-white mt-1'>Currently Living in Faridabad</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-5 border-b-solid border-b-white-theme border-b-2 py-4'>
                                <div>
                                    <h6 className='text-white text-3xl'><FaRegUser/></h6>
                                </div>
                                <div>
                                    <h6 className='text-white font-bold text-xl'>Working Position</h6>
                                    <p className=' text-white mt-1'>Web Designer</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-5 border-b-solid py-4'>
                                <div>
                                    <h6 className='text-white text-3xl'><RiUserStarLine/></h6>
                                </div>
                                <div>
                                    <h6 className='text-white font-bold text-xl'>Experience</h6>
                                    <p className=' text-white mt-1'>2 yr</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default HeroSection;