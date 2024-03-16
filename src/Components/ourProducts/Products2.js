import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../../Assets/image1.jpg'
import slide2 from '../../Assets/image2.jpg'
import slide3 from '../../Assets/image3.jpg'
import slide4 from '../../Assets/image4.jpg'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>Slide 1</h3>
        <img src={slide1} alt="slide 1" />
      </div>
      <div>
        <h3>Slide 2</h3>
        <img src={slide2} alt="slide 2" />
      </div>
      <div>
        <h3>Slide 3</h3>
        <img src={slide3} alt="slide 3" />
      </div>
    </Slider>
  );
};

export default Carousel;
