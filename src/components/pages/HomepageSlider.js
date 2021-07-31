import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {team} from '../../data'
import '../css/Homepage.css'



const HomepageSlider =()=>{

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:true,
    autoplaySpeed:3000
  };
  return (
    <>
    <Slider  {...settings}>
      {team.map((member,index)=>{
     const {id,title,img,desc,job} = member
     return(
       <div key={id} className="team-slider-container">
         <div className="team-slider-cover">
           <img src={img} className="team-slider-image"></img>
            <h3>{title}</h3>
            <h2>{job}</h2>
            <p>{desc}</p>
         </div>
       </div>
     )
      })}
      </Slider>
    </>
  )
}

export default HomepageSlider
