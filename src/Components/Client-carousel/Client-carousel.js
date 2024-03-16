import './Client-carousel.css'
import React, { Component } from "react";
import Slider from "react-slick";
import client1 from '../../Assets/1.jpg'
import client2 from '../../Assets/2.jpg'
import client3 from '../../Assets/3.jpg'
import client4 from '../../Assets/6.jpg'
import client5 from '../../Assets/7.jpg'

function CenterMode() {
    const clientList = [
        {img : client1},
        {img : client2},
        {img : client3},
        {img : client4},
        {img : client5},
    ]
  const settings = {
   
    className: "center",
    centerMode: true,
    infinite: true,
   
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 500,
    swipeToSlide: true,
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {clientList.map((list)=>{
            return (
              
                <img src={list.img} />
             
            );
        })}
        
        
      </Slider>
    </div>
  );
}

export default CenterMode;
