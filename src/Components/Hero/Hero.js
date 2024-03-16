import './Hero.css'
import pausebtn from '../../Assets/pause_icon.png'
import playbtn from '../../Assets/play_icon.png'

function Hero({count, Setcount, playstatus, Setplaystatus}){
   
    return(
        <div className='home'>
            
           <div className='imgchangebtn'>
                <div className={count===0 ? 'activebtn green' : 'activebtn'} onClick={()=>Setcount(0)}></div>
                <div className={count===1 ? 'activebtn green' : 'activebtn'} onClick={()=>Setcount(1)}></div>
                <div className={count===2 ? 'activebtn green' : 'activebtn'} onClick={()=>Setcount(2)}></div>
            </div>
            <div className='videocontrolbtn'>
                <img src={playstatus ? pausebtn : playbtn} onClick={()=>Setplaystatus(!playstatus)}/>
                <p>See the video</p>
            </div>
        </div>
    )
}
export default Hero;