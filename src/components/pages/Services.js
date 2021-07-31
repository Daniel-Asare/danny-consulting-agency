import React from 'react'
import {SiParitysubstrate, AiTwotoneInsurance,FaHandsHelping} from 'react-icons/all'
import '../css/Services.css'

const Services =()=> {
  return (
    <div className="services-container">
      <div className="services-hero">
        <h1>Our Services</h1>
      </div>
      <div className="best-services-container">
      <div className="best-services-head">
          <div className="best-services-head-underline"></div>
          <p>OUR TOP SERVICES</p>
        </div>
        <h1>Our Best Services</h1>
        <div className="best-services-list-container">
        <div className=" best-services-box-container">
            <div className="best-services-info-box">
                <span className="best-service-icon">
                  <SiParitysubstrate/>
                  </span>
                <h2>Strategy and  Planning</h2> 
                <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
            </div>
          </div>
        <div className=" best-services-box-container">
            <div className="best-services-info-box">
                <span className="best-service-icon">
                  <AiTwotoneInsurance/>
                  </span>
                <h2>Insurance Service</h2> 
                <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
            </div>
          </div>
        <div className=" best-services-box-container">
            <div className="best-services-info-box">
                <span className="best-service-icon">
                  <FaHandsHelping/>
                  </span>
                <h2>Audit and Evaluation</h2> 
                <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
            </div>
          </div>
        <div className=" best-services-box-container">
            <div className="best-services-info-box">
                <span className="best-service-icon">
                  <FaHandsHelping/>
                  </span>
                <h2>Audit and Evaluation</h2> 
                <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
            </div>
          </div>
        <div className=" best-services-box-container">
            <div className="best-services-info-box">
                <span className="best-service-icon">
                  <AiTwotoneInsurance/>
                  </span>
                <h2>Insurance Services</h2> 
                <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
            </div>
          </div>
        <div className=" best-services-box-container">
            <div className="best-services-info-box">
                <span className="best-service-icon">
                  <SiParitysubstrate/>
                  </span>
                <h2>Strategy and  Planning</h2> 
                <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
