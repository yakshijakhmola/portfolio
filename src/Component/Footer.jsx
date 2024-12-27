import React from 'react'
import { FaFacebook} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
const Footer = () => {
    const FooterIcon =[
        {
            id: 1,
            FooterIconLink: "javascript:void(0)",
            FooterIcon_img: <FaFacebook/>
        },
        {
            id: 2,
            FooterIconLink: "javascript:void(0)",
            FooterIcon_img: <FaInstagram/>
        },
        {
            id: 3,
            FooterIconLink: "javascript:void(0)",
            FooterIcon_img: <FaTwitter/>
        },
        {
            id: 4,
            FooterIconLink: "https://www.linkedin.com/in/yakshi-jakhmola-312178325/",
            FooterIcon_img: <FaLinkedin/>
        },
        {
            id: 5,
            FooterIconLink: "https://github.com/yakshijakhmola",
            FooterIcon_img: <FaGithub/>
        }
    ]
  return (
    <div className='py-2 bg-lightblacktheme shadow-2xl'>
        <div className='container'>
            <div className='flex items-center justify-center xl:justify-between lg:justify-between flex-wrap xl:flex-nowrap lg:flex-nowrap'>
                <div>
                    <p className='text-whitetheme'>Copy Right All Reserved by Yakshi</p>
                </div>
                <div className='grid grid-cols-5 grid-rows-1 gap-x-5 mt-5 xl:mt-0'>
                    {FooterIcon.map((val)=>(
                        <a className='iconstyle' href={val.FooterIconLink} target='_blank' key={val.id}>{val.FooterIcon_img}</a>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer