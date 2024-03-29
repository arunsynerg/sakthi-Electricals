import "./Contact.css";
import contactimg from "../../Assets/contact.svg";
import { MdOutlineMail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { useState } from "react";
import conbg from '../../Assets/image-1.jpg'
function Contact() {
  return (
    <>
    <div className="contact">
      <div className="contact-left">
        <form className="form-container">
          <h2>Submit Your Query</h2>
          <h5>We will be glad to help you</h5>
          <div className="form-group-contactpage">
            <div className="form-input">
              <label></label>
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-input">
              <label></label>
              <input type="text" placeholder="Your Email" />
            </div>
          </div>
          <div className="form-group-contactpage">
            <div className="form-input">
              <label></label>
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="form-input">
              <label></label>
              <input type="text" placeholder="Subject" />
            </div>
          </div>
          <div className="form-group-message">
            <textarea placeholder="Message" />
          </div>
          <button>Submit</button>
          <div className="contact-info">
            <p>
              <a>
                <MdAddIcCall /> +91 9876543210
              </a>
            </p>
            <p className="email-info">
              <a>
                <MdOutlineMail /> email
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="contact-right">
        <h4>We are available 24x7 for you!</h4>
        <h2>Contact Us</h2>
        <img src={contactimg} />
      </div>
    </div>
    <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.03875674185!2d78.6066269540172!3d10.81600234753939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aecdad%3A0x6de02c3bedbbaea6!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710392220340!5m2!1sen!2sin" width="900" height="450" style={{border:'0', margin: '0 auto'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    {/* <div className="contactbg">
        <img src={conbg} />
    </div> */}
    </>
  );
}
export default Contact;
