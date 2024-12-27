import React from 'react'
import { assets } from '../assets/assets';
const Project = () => {
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
      Project_link: "https://ninjarankers.com/",
      Project_img: assets.ninja,
    },
    {
      id: 12,
      Project_link: "https://wideindiaproducts.com/",
      Project_img: assets.wide,
    }
  ]
  return (
    <div className='py-10' id='project'>
      <div className='container'>
          <h2 className='text-xl xl:text-5xl lg:text-5xl md:text-3xl text-whitetheme font-bold font-HeadingFont text-left'>All Project that is  live on <br/> website url</h2>
          <div className='grid grid-cols-12 mt-10'>
              {ProjectCard.map((val)=>{
                return(
                  <div className='col-span-12 lg:col-span-4 m-3' key={val.id}>
                    <div className=''>
                      <a href={val.Project_link}><img src={val.Project_img} className='rounded-xl shadow-xl'/></a>
                    </div>
                  </div>
                )
              })}
          </div>
      </div>
    </div>
  )
}

export default Project