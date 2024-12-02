import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { assets } from '../../public/assets'

const Skills = () => {
    const SkillsSlider = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    }
    const SkillCard = [
        {
            id: 1,
            Skill_img: assets.html,
        },
        {
            id: 2,
            Skill_img: assets.css,
        },
        {
            id: 3,
            Skill_img: assets.js,
        },
        {
            id: 4,
            Skill_img: assets.bootstrap,
        },
        {
            id: 5,
            Skill_img: assets.vercel,
        },
        {
            id: 6,
            Skill_img: assets.github,
        },
        {
            id: 7,
            Skill_img: assets.tailwind,
        },
        {
            id: 8,
            Skill_img: assets.react,
        },
        {
            id: 9,
            Skill_img: assets.wordpress,
        }
    ]
  return (
    <> 
    <div className='py-5 bg-lightblacktheme' id='skills'>
        <div className='container mx-auto'>
            <div className=''>
                <Slider {...SkillsSlider} className='w-full'>
                    {SkillCard.map((val)=>{
                        return(
                            <div key={val.id}>
                                <div className='mx-2 flex items-center justify-center'>
                                    <img src={val.Skill_img} className='w-20'/>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    </div>
    </>
  )
}

export default Skills