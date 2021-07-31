import React from 'react'
import {AiOutlineHome,MdPhoneAndroid,BiEnvelope} from 'react-icons/all'
import '../css/Contact.css'

const Contact =()=>{
  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-info-contact">
      <h1 className='form-text'>Get In Touch</h1>
      <div className="form-container">

        <form action="">
          <div className="form-group">
            <textarea placeholder="Leave a message..." cols="20" rows="10"></textarea>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Enter your name..." />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email..." />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Enter subject" />
          </div>
          <a href="#" className="contact-btn">SEND</a>
        </form>
        <div className="contact-address-container">
          <div className="address-contact">
            <span><AiOutlineHome/></span>
            <div className="address-contact-info">
              <h4>Ablekuma, Accra</h4>
              <p>Manhean,AB 47709</p>
            </div>
          </div>
          <div className="address-contact">
            <span><MdPhoneAndroid/></span>
            <div className="address-contact-info">
              <h4>+234,56677678</h4>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="address-contact">
            <span><BiEnvelope/></span>
            <div className="address-contact-info">
              <h4>consulting@yahoo.gh</h4>
              <p>Send us your query anytime</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
