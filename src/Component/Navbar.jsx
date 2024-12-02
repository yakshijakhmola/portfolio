import React, { useState } from 'react'
import { FaBars} from "react-icons/fa";
import { FaXmark } from 'react-icons/fa6';
import { MdOutlineMailOutline } from "react-icons/md";

const Navbar = () => {
    const [mobileset, setmobileset] = useState(false)
  return (
    <>
        <div className='py-5'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <div className='logo-design'>
                        <a className='font-HeadingFont text-3xl bg-white px-3 rounded-xl'>YAKSHI</a>
                    </div>
                    <div className=''>
                        <ul className='mendesign hidden md:hidden xl:flex lg:flex items-center justify-between gap-x-10'>
                            <li><a href='#home' className='menudesign-a'>Home</a></li>
                            <li><a href='#about' className='menudesign-a'>About</a></li>
                            <li><a href='#skills' className='menudesign-a'>Skills</a></li>
                            <li><a href='#project' className='menudesign-a'>Project</a></li>
                            <li><a href='#contact' className='menudesign-a'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='whitebtn'>
                        <MdOutlineMailOutline/>
                        <a href='mailto: jakhmolayakshi12@gmail.com'>  jakhmolayakshi12@gmail.com</a>
                    </div>
                    <FaBars className='block md:block lg:hidden xl:hidden text-white text-xl'
                    onClick={()=> setmobileset(true)}/>
                </div>
            </div>
        </div>
        <div className={`mobile-menu ${mobileset? 'activemobile' : ''}`}>
            <div className=''>
                <img src='/logo.png' alt='logo' className='xl:w-44 lg:w-44 md:w-40 w-28'/>
            </div>
            <div>
                <FaXmark className='absolute top-8 right-5 text-2xl text-white' onClick={()=> setmobileset(false)}/>
            </div>
            <div className='mt-10'>
                <h6 className='text-white font-HeadingFont  text-lg  py-1'>Home</h6>
                <h6 className='text-white font-HeadingFont  text-lg  py-1'>About</h6>
                <h6 className='text-white font-HeadingFont  text-lg  py-1'>Portfolio</h6>
                <h6 className='text-white font-HeadingFont  text-lg  py-1'>Experience</h6>
                <h6 className='text-white font-HeadingFont  text-lg  py-1'>Contact</h6>
            </div>
        </div>
    </>
  )
}

export default Navbar