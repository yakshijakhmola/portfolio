import React, { useState } from 'react'
import Project from './Project';
import Skills from './Skills';
import { GrDownload } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiUserStarLine } from "react-icons/ri";
import Footer from './Footer';
import { assets } from '../assets/assets';


const HeroSection = () => {
    const [form, setform] = useState({
        username: "", useremail: "", userphone: "", usermsg: ""
    })
    const [error, setError] = useState({});
    const Validationhandle =(e)=>{
        e.preventDefault();
        const newError = {};
        if(!form.username.trim()){
            newError.username = "Name field are required!"
        }
        else if(!form.useremail.trim()){
            newError.useremail = "Email field are required!"
        }
        else if(!form.userphone.trim()){
            newError.userphone = "Phone Number field are required!"
        }
        else if(isNaN(form.userphone)){
            newError.userphone = "only number allowed"
        }
        else if(form.userphone.length <= 10){
            newError.userphone = "only 10 digit number allowed"
        }
        else if(!form.usermsg.trim()){
            newError.usermsg = "Enquiry field are required!"
        }
        else if(form.usermsg.length > 5 && form.usermsg.length <= 200){
            newError.usermsg = "Enquiry field are required!"
        }
        else{
            alert("Thankyou for submitting form")
        }
        setError(newError)
    }
  return (
    <>
        <div className='pt-10' id='about'>
            <div className='container'>
                <div className='centerdiv'>
                    <div>
                        <h1 className='text-2xl md:text-3xl lg:text-6xl xl:text-6xl text-white font-HeadingFont font-bold mb-3'>I am Yakshi Jakhmola <br/> A Web Designer</h1>
                        <p className='text-lg text-ParaColor'>I am a skilled <b className='text-white'>web designer</b> with expertise in crafting visually stunning and user-friendly websites. My technical proficiency includes <b className='text-white'>HTML, CSS, JavaScript, and React,</b> allowing me to build dynamic and <b className='text-white'>responsive web applications</b>. I also have experience working with WordPress, enabling me to create and customize websites efficiently. creativity with technical expertise, I am dedicated to delivering designs that meet both client goals and user needs.</p>
                        <a href={assets.CV} target='_blank' className='whitebtn mt-5 font-HeadingFont inline-flex items-center justify-between'><span>Download CV</span> <span><GrDownload /></span></a>
                    </div>
                    <div className='flex items-center justify-end'>
                        <img src={assets.HeroBanner}/>
                    </div>
                </div>
            </div>
        </div>
        <Skills/>
        <Project/>
        <div className='py-10' id='contact'>
            <div className='container'>
                <div className='grid grid-cols-12 gap-x-16'>
                    <div className='col-span-5'>
                        <form className='bg-lightblacktheme p-5 rounded-xl' onSubmit={Validationhandle}>
                            <h3 className='text-whitetheme text-bold text-xl lg:text-4xl xl:text-4xl font-HeadingFont mb-5'>Reach Us</h3>
                            <div className='mb-5'>
                                <input className='inputdiv' type='text' placeholder='Name*' value={form.username} onChange={(e)=>setform({...form, username:e.target.value})}/>
                                {error.username? <p className='text-red-700'>{error.username}</p> : ""}
                            </div>
                            <div className='mb-5'>
                                <input className='inputdiv' type='text' placeholder='Email*' value={form.useremail} onChange={(e)=>setform({...form, useremail:e.target.value})}/>
                                {error.useremail? <p className='text-red-700'>{error.useremail}</p> : ""}
                            </div>
                            <div className='mb-5'>
                                <input className='inputdiv' type='text' placeholder='Phone Number*' value={form.userphone} onChange={(e)=>setform({...form, userphone:e.target.value})}/>
                                {error.userphone? <p className='text-red-700'>{error.userphone}</p> : ""}
                            </div>
                            <div className='mb-5'>
                                <input className='textareadiv' type='text' placeholder='Comment*' value={form.usermsg} onChange={(e)=>setform({...form, usermsg:e.target.value})}/>
                                {error.usermsg? <p className='text-red-700'>{error.usermsg}</p> : ""}
                            </div>
                            <button className='whitebtn w-full py-4'>Submit Enquiry</button>
                        </form>
                    </div>
                    <div className='col-span-7'>
                        <h2 className='text-xl xl:text-5xl lg:text-5xl md:text-3xl text-whitetheme font-bold font-HeadingFont'>Experience</h2>
                        <div className='mt-7'>
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