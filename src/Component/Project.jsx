import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { assets } from '../../public/assets';
const Project = () => {
  const ProjectSlider = {
    dots: false,
    centerMode: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
  }
  const ProjectCard = [
    {
      id: 1,
      Project_link: "https://vizensolutions.com/",
      Project_img:  assets.vizen
    },
    {
      id: 2,
      Project_link: "https://dynamicdisplays.co.nz/",
      Project_img: assets.dynamic,
    },
    {
      id: 3,
      Project_link: "https://harisonsfurnishings.com/",
      Project_img: assets.harisons,
    },
    {
      id: 4,
      Project_link: "https://vedantpainclinic.com/",
      Project_img: assets.vedant,
    },
    {
      id: 5,
      Project_link: "https://www.goyalcementblocking.com/",
      Project_img: assets.goyal,
    },
    {
      id: 6,
      Project_link: "https://numismaticsacademy.com/",
      Project_img: assets.nac,
    },
    {
      id: 7,
      Project_link: "https://www.saifidevelopers.com/",
      Project_img: assets.saifi,
    },
    {
      id: 8,
      Project_link: "https://geetainjaliglobal.com/",
      Project_img: assets.geetanjali,
    },
    {
      id: 9,
      Project_link: "https://cafe103.in/",
      Project_img: assets.cafe,
    },
    {
      id: 10,
      Project_link: "https://wafly.app/",
      Project_img: assets.wafly,
    },
    {
      id: 11,
      Project_img: assets.mmai,
    },
    {
      id: 12,
      Project_link: "",
      Project_img: assets.magnite,
    }
  ]
  return (
    <div className='py-10' id='project'>
      <div className='container'>
          <h2 className='text-xl xl:text-5xl lg:text-5xl md:text-3xl text-whitetheme font-bold font-HeadingFont text-right'>Client's get always exceptional <br/> works from me...</h2>
          <div className='grid grid-cols-12 mt-10'>
              <Slider {...ProjectSlider} className='col-span-12 lg:col-span-8'>
                {ProjectCard.map((val)=>{
                  return(
                    <div key={val.id}>
                      <div className='mx-3'>
                        <a href={val.Project_link}><img src={val.Project_img} className='rounded-xl shadow-xl'/></a>
                      </div>
                    </div>
                  )
                })}
              </Slider>
              <div className='lg:col-span-4'></div>
          </div>
      </div>
    </div>
  )
}

export default Project