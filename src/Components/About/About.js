import './About.css'
import about1 from '../../Assets/about1.png'
import mission from '../../Assets/mission.png'
import vision from '../../Assets/vision.png'
import leadership from '../../Assets/leadership.png'
import about2 from '../../Assets/about2.png'
function About(){
    return(
        <div className='about-container'>
        <div className='flex about'>            
            <div>
                <h2>Over 46 Years Of Experience In This Business.</h2>
                <p>Welcome to KALPA ELECTRIKAL, your number one source for all your Transformers need. We’re dedicated to giving you the very best of Instrument Transformers, Control, Power, Distribution Transformers and Line Chokes, with a focus on four characteristics, i.e., Quality, Cost, Delivery and Service.</p>
                <p>Our perseverance towards quality and business ethics has earned us a trustworthy position in the market. Owing to our professional approach, we have been able to maintain long-term relationships with our esteemed clients.</p>
            </div>
            <div><img src={about1} /></div>
        </div>
        <div className='flex goal-container'>
            <div className='goal-list'>
                <img src={mission} />
                <div>
                    <h3>MISSION</h3>
                    <p>To manufacture world class range of electrical transformers which will meet global standards & customer needs with a strong focus on quality.</p>
                </div>
            </div>
            <div className='goal-list'>
                <img src={vision} />
                <div>
                    <h3>VISION</h3>
                    <p>Be a global vendor of choice for electrical transformers with a wide range of product lines, providing full and efficient solutions.</p>
                </div>
            </div>
            <div className='goal-list'>
                <img src={leadership} />
                <div>
                    <h3>LEADERSHIP</h3>
                    <p>Sakthi's leadership team draws on decades of experience to chart a course for the future and guide the company towards its strategic goals.</p>
                </div>
            </div>
        </div>

        <div className='flex'>
            <div className='value-left'>
                <h2>How do we work: Adding Value</h2>
                <p>Most ethical way of transacting</p>
                <p>Superior quality products with quicker deliveries</p>
                <p>Forward and Backward Integration for better customer experience</p>
                <p>End to End solutions</p>
                <p>Educating customers, creating the most tailored solution</p>
               
            </div>
            <div className='value-img'>
                <img src={about2} />
            </div>
        </div>
        </div>
    )
}
export default About;