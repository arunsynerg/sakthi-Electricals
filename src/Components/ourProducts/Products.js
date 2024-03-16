import './Product.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sample from '../../Assets/product1.png'
import { useEffect, useState } from 'react';
function Products(){

    
    const productlists =[
        {
            img: sample,
            name: 'product1'
        },
        {
            img: sample,
            name: 'product2'
        },
        {
            img: sample,
            name: 'product3'
        },
        {
            img: sample,
            name: 'product4'
        },
        {
            img: sample,
            name: 'product5'
        },
        {
            img: sample,
            name: 'product6'
        },
        {
            img: sample,
            name: 'product7'
        },
       
       
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
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
      };
    // const [count,Setcount] = useState(0);
    // const changecount = ()=>{
        
    //         if(count === 0){
    //            Setcount(count + 1);
    //         }
    //         else{
    //             Setcount(count - 1);
    //         }
       
    // }
    // useEffect(()=>{
    //    const intervalId = setInterval(()=>{
    //        return( (count === 0 ?
    //          Setcount(count + 1) :
    //      Setcount(count - 1)
    //       )
    //        )},2000)
    //        return () => clearInterval(intervalId);
    // },[])
    return (
      <>
       <div class="home-about">
      <h2>Our <span>Products</span></h2>
      <div class="separator">
        <div className="dot"></div>
      </div>
    </div>
         <div className="product-con">
                <Slider {...settings}>
                    {productlists.map((list, index) => (
                        <div className="product-list" key={index}>
                           <img src={list.img} alt={list.name} />
                            <h3>{list.name}</h3>
                        </div>
                    ))}
                </Slider>
            </div>

      
      </>
    );
}
export default Products;