import './Footer.css';
import { MdAttachEmail, MdVisibility } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaHandPointUp } from "react-icons/fa";
import { useState } from 'react';
function Footer(){
    const [topnav, setTopnav] = useState(false);
    // set the range for visibility to top navigation btn
    const topscroll = ()=>{
        if(window.scrollY >= 80){
            setTopnav(true)            
        }
        else{
            setTopnav(false)
        }
    }
    window.addEventListener('scroll', topscroll)
     // Function to handle click on navigation button
     const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Optional: Smooth scroll behavior
        });
    };
    return(
        <>
        <div className='Footer-conatainer'>
            <div className='social-media-icons'>
            <MdAttachEmail className='social-icons'/>
            <FaPhoneVolume className='social-icons'/>
            </div>
            <div className='Quick-links'>
                <p>Home</p>
                <p>about</p>
                <p>Products</p>
                <p>Our Products</p>
                <p>Careers</p>
                <p>Contact</p>

            </div>
        </div>
        <div className='whatsapp-btn'>
            <a href='https://api.whatsapp.com/send?phone=6374455269' target='_blank'><FaSquareWhatsapp className='whatsapp-logo'/></a>
            <p className='tooltip'>Chat With Us</p>
            </div>
            <div className='navigation-btn' style={{display: topnav ? 'block' : 'none'}} onClick={scrollToTop}>
            <FaHandPointUp className='navigation-logo'/>
            </div>
        </>
    )
}
export default Footer;