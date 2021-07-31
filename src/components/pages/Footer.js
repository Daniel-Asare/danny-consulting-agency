import React from 'react'
import '../css/Footer.css'
import {FaFacebookF,AiOutlineTwitter,FaInstagram,AiOutlineGlobal} from 'react-icons/all';

const Footer =()=> {
  const date = new Date().getFullYear()
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-text">
          <h2>CONSULTING</h2>
          <p>Receive updates and latest news direct from Simply enter.</p>
          <h3>+564 <b> 7885 3222 </b></h3>
          <p>consult27@yahoo.gh</p>
        </div>
        <div className="footer-text">
          <h2>LOCATION</h2>
          <p>Advanced</p>
          <p>Management</p>
          <p>Corporate</p>
          <p>Customer</p>
          <p>Information</p>
        </div>
        <div className="footer-text">
          <h2>EXPLORE</h2>
          <p>Cookies</p>
          <p>About</p>
          <p>Privacy policy</p>
          <p>Properties</p>
          <p>Licenses</p>
        </div>
        <div className="footer-text">
          <h2>LOCATION</h2>
          <p>Subscribe now to get daily updates</p>
          <input type="email" placeholder="Enter to sign up....." />
          <a href="" className="footer-btn">SIGN UP</a>
        </div>
      </div>
      <div className="footer-foot">
        <p>Copyright &copy; {date}  All right reserved </p>
        <div className="footer-social">
      <span><FaFacebookF/></span>
      <span><FaInstagram/></span>
      <span><AiOutlineTwitter/></span>
      <span><AiOutlineGlobal/></span>
        </div>
      </div>
    </div>
  )
}

export default Footer