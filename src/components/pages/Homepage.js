import React from 'react';
import {Link} from 'react-router-dom'
import {SiParitysubstrate} from 'react-icons/si'
import {AiTwotoneInsurance} from 'react-icons/ai'
import {FaHandsHelping} from 'react-icons/fa'
import '../css/Homepage.css';
import HomepageSlider from './HomepageSlider';

const Homepage =()=> {
  return (
    <>
    <div className="homepage">
      <div className="homepage-hero">
       <div className="homepage-text">
         <div className="homepage-head">
           <div className="homepage-head-underline"></div>
           <p>committed to success</p>
         </div>
         <h1>We help to grow your business</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quam quibusdam aut, non tenetur voluptatibus necessitatibus blanditiis nihil sapiente voluptate?</p>
         <Link to='/services' className="homepage-head-link">our services</Link>
        </div>  
      </div>
    </div>
      {/* best servies */}
      <div className="best-service-container">
        <div className="best-service-head-text">
          <div className="best-service-head">
           <div className="best-service-underline"></div>
           <p>our top services</p>
         </div>
         <h1>Our Best Services</h1>
        </div>
        <div className="best-service-info-container">
          <div className="best-service-info-box-container">
            <div className="box-container">
                <span className="best-service-icon">
                  <SiParitysubstrate/>
                  </span>
                <h2>Strategy and Planning</h2> 
                <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
          </div>
          </div>      
            <div className="box-container">
                <span className="best-service-icon">
                  <AiTwotoneInsurance/>
                  </span>
                <h2>Insurance Service</h2> 
                <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
          </div>
          
            <div className="box-container">
                <span className="best-service-icon">
                  <FaHandsHelping/>
                  </span>
                <h2>Audit and Evaluation</h2> 
                <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
          </div>

        </div>
      </div>
      {/* Best services image */}
      <div className="best-service-image-container">
        <div className="best-service-image-container-1"> 
          <img src="https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="lol" className="best-service-img" />
          <div className="best-services-image-info-container">
            <div>
          <div className="best-service-image-head">
           <div className="best-service-image-head-underline"></div>
           <p>OUR TOP SERVICES</p>
         </div>
         <h1>Our Best Service</h1>
         <p>Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.</p>

         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quam quibusdam aut, non tenetur voluptatibus necessitatibus blanditiis nihil sapiente voluptate?</p>
         <Link to="/about" className="best-service-image-head-link">More About Us</Link>
        </div>  
          </div>
        </div>
      </div>

      {/* case  */}
      <div className="case-container">
        <div className="case-head">
          <div className="case-underline"></div>
          <p>our portfolio of cases</p>
        </div>
        <h1>Featured Case Study</h1>
        <div className="case-cover-container">
          <div className="case-cover">
            <img src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="img" />
            <div className="case-cover-detail">
              <div className="case-cover-detail-head">
                <div className="case-cover-detail-underline"></div>
                <p>Strategy Plan</p>
              </div>
                <p>Within the construction as their overdraft</p>
            </div>
          </div>

          <div className="case-cover">
            <img src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="img" />
            <div className="case-cover-detail">
              <div className="case-cover-detail-head">
                <div className="case-cover-detail-underline"></div>
                <p>Strategy Plan</p>
              </div>
                <p>Within the construction as their overdraft</p>
            </div>
          </div>

          <div className="case-cover">
            <img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="img" />
            <div className="case-cover-detail">
              <div className="case-cover-detail-head">
                <div className="case-cover-detail-underline"></div>
                <p>Strategy Plan</p>
              </div>
                <p>Within the construction as their overdraft</p>
            </div>

          </div>
          <div className="case-cover">
            <img src="https://images.unsplash.com/photo-1573497161079-f3fd25cc6b90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="img" />
            <div className="case-cover-detail">
              <div className="case-cover-detail-head">
                <div className="case-cover-detail-underline"></div>
                <p>Strategy Plan</p>
              </div>
                <p>Within the construction as their overdraft</p>
            </div>
          </div>
        </div>
      </div>
      <HomepageSlider/>
      <div className="more-about">
        <h1>ARE YOU SEARCHING FOR A FIRST CLASS CONSULTANT</h1>
          <Link to="/about" className="more-about-btn">MORE ABOUT US</Link>
      </div>
    </>
  )
}

export default Homepage
