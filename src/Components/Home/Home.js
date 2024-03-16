import "./Home.css";
import Background from '../Background/Background.js';
import Navbar from '../Nav/Nav.js';
import Hero from '../Hero/Hero.js';
import { useState } from 'react';
import { useEffect } from 'react';
import { GiDeskLamp } from "react-icons/gi";
import Footer from "../Footer/Footer.js";
import Products from "../ourProducts/Products.js";
import CenterMode from "../Client-carousel/Client-carousel.js";
function Home() {
    const [count, Setcount] = useState(0);
    const [playstatus, Setplaystatus] = useState(false);
    useEffect(()=>{
      const intervalId = setInterval(()=>{
          Setcount((prevCount)=>{
            return (prevCount === 2 ? 0 : prevCount+1)
          })
      },3000) 
      return () => clearInterval(intervalId);
  },[])
  return (
    <>
    <Background count={count} Setcount={Setcount} playstatus={playstatus} Setplaystatus={Setplaystatus}/>
      <Hero count={count} Setcount={Setcount} playstatus={playstatus} Setplaystatus={Setplaystatus}/>
      {/* <Navbar /> */}
     <div class="home-about">
      <h2>About <span>Us</span></h2>
      <div class="separator">
        <div className="dot"></div>
      </div>
    </div>
    <div class="home-about-inner">
          <h2>Over 46 Years of Experience in this Business.</h2>
          <p> Kalpa Electrikal Pvt. Ltd., an ISO 9001:2015 Certified Company, established in 1978 in Bengaluru, India.
Globally Preferred, India Centric manufacturers & exporters of LV & MV Instrument Transformers for
Indoor & Outdoor applications, Dry Type Control, Power Transformers, Oil filled Distribution
Transformers, Line Chokes/Reactors and Special Application Transformers.</p>
<p>
    Advanced design, manufacturing & testing facility provides high quality-assured products. All products
are tested for Quality Assurance at the Company’s sophisticated laboratory before final dispatch.
</p><br/>
         <a href="" data-text="About Us" class="home-about-btn"><span>About Us</span></a> 
         </div>

         <div className="home-card-container">
            <div className="home-cards">
                <div><GiDeskLamp className="service-icon"/></div>
                <h3>Our Products</h3>
          <p>We are specialized in offering the high quality Transformers of multi range that is manufactured using
quality components, which are procured from reliable vendors. </p>
          <a href="" data-text="Our Products" class="home-product-btn"><span>Our Products</span></a>
            </div>
            <div className="home-cards">
                <div><GiDeskLamp className="service-icon"/></div>
                <h3>Our Products</h3>
          <p>We are specialized in offering the high quality Transformers of multi range that is manufactured using
quality components, which are procured from reliable vendors. </p>
          <a href="" data-text="Our Products" class="home-product-btn"><span>Our Products</span></a>
            </div>
            <div className="home-cards">
                <div><GiDeskLamp className="service-icon"/></div>
                <h3>Our Products</h3>
          <p>We are specialized in offering the high quality Transformers of multi range that is manufactured using
quality components, which are procured from reliable vendors. </p>
          <a href="" data-text="Our Products" class="home-product-btn"><span>Our Products</span></a>
            </div>
         </div>
      
        <Products />
        <CenterMode />
    {/* <Footer /> */}
    </>
  );
}
export default Home;
