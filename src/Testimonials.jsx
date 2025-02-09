import "./Testimonials.css"
import React, { useRef, useState } from 'react';
import review1pic from './assets/review1pic.jpg'
import review2pic from './assets/review2pic.jpg'
export const Testimonials = () => {
  return (
    <div >
        <div className="bgt" id='testimonials'>
          <div className="contentreviews">
          <div className="head">
            <h1>Customer Reviews</h1>
            <p>Our customers' feedback, especially on Best Domestic Tour Packages, is essential for building a great reputation and maintaining excellent service. By listening to our customers' needs, we can improve our offerings and provide an exceptional travel experience.</p>
          </div>
          <div className="reviews">
            <div className="review1">
              <p>It was a great trip for all of us who had visited vagomon for the first  time and we had great time in both kochi and vagamon. Mr. Sanjay had been a great guide and did a lot of things for the trip he made this trip memorable for all of us. Thanks you sanjay sir for planning so much for us</p>
              <div className="review1name">
                <img src={review1pic} alt="review1pic" className="review1pic" />
                <p>ADITI NARAYANAN  <br/><span className="Coimbatore">Coimbatore</span></p>
              </div>
            </div>
            <div className="review2">
                <p>We've planned our all India educational tour program to visit many north indian cities including Hyderabad mumbai delhi and so on. so we seeked the guidance of aspire holidays. Our tour experience with Ashok brother as tourist guide was really good and memorable.</p>
                <div className="review2name">
                  <img src={review2pic} alt="review2pic" className="review2pic" /> 
                  <p>KAVYA MOORTHY <br/><span className="Bangalore">Bangalore</span></p>
                </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
