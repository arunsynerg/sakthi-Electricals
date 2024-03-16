import './Background.css'

import backgroundimg from '../../Assets/image1.jpg'
import backgroundimg2 from '../../Assets/image2.jpg'
import backgroundimg3 from '../../Assets/image3.jpg'
import backgroundimg4 from '../../Assets/image4.jpg'

import video from '../../Assets/introvideo.mp4'

function Background({count, Setcount, playstatus, Setplaystatus}){
    const img = [ backgroundimg, backgroundimg2, backgroundimg3, backgroundimg4]
    const content = [
        {text:'Sakthi Electrical pvt.ltd',details:'Globally Acclaimed. India Centric'},
        {text:'Quality Forever',details:'Manufacturer of Instrument Transformers, Control, Power & Distribution Transformers up to 33kV'},
        {text:'Design by Engineers for Engineers Everywhere',details:'Our solutions for the industry are fully integrated '},
        {text:'Making a Difference',details:'Securing the power situation with technology proven Transformers that perform where others can’t.'},
    ]
    const imgurl = img[count]
    
    if (playstatus){
        return(
         
                <div className="Backgroud-image">
               
                    <video type='video/mp4' autoPlay loop muted>
                        <source src={video} />
                    </video>
                </div>
               
        )
    }
    else{
        return(
            <div>
                <div className="Backgroud-image fade-in">
                    <div className='img-content'>
                        <h1>{content[count].text}</h1>
                        <p>{content[count].details}</p>
                    </div>
                    <img src={imgurl}/>
                   
                </div>
                               
            </div>
        )
    }
    
}
export default Background;