import './Whysakthi.css'
import { BsLightningChargeFill } from "react-icons/bs";
function Whysakthi(){
    return(
        <div className='reason-container'>
            <div className='reason-card'>
                <h3>Why Kalpa Electrikal Pvt Ltd?</h3>
                <p><BsLightningChargeFill className='lightning'/>Over 45 Years of Transformer expertise</p>
                <p><BsLightningChargeFill className='lightning'/>State of the art Manufacturing & Testing Infrastructure</p>
                <p><BsLightningChargeFill className='lightning'/>High Quality Products at Optimized Price & faster Delivery</p>
                <p><BsLightningChargeFill className='lightning'/>Proven technology & Type Tested products</p>
                <p><BsLightningChargeFill className='lightning'/>Fully customized products</p>
                <p><BsLightningChargeFill className='lightning'/>Consultative Selling</p>
            </div>
            <div className='news-card'>
                <h3>Latest News</h3>
                <p><BsLightningChargeFill className='lightning'/>New Manufacturing facilities for Distribution Transformers</p>
                <p><BsLightningChargeFill className='lightning'/>Proud Exhibitor at Elecrama-2020 (18-22 Jan, 2020)</p>
                <p><BsLightningChargeFill className='lightning'/>66kV range of Transformers under development</p>
                <p><BsLightningChargeFill className='lightning'/>Rectangular Moulded case CTs under construction</p>
                
            </div>
        </div>
    )
}
export default Whysakthi;