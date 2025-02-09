import React from 'react'
import './contact.css'
import msg from "./assets/message.png"
export default function Contact() {
  return (
    <div className='MaincontentPacakage' id='contact'>
        <div className="headercontact">
            <p>Contact Us</p>
            <h2>Get in Touch</h2>
        </div>
        <div className="subcontentcontact">
            <div className="info">
                <h2>Send us a message <img src={msg} className='msg' alt="" /></h2>
                <p className='Feel'>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <p className='emailid'><i class="fa-solid fa-envelope"></i>Beyondthehorizon@yahoo.com</p>
                <p className='phoneno'><i class="fa-solid fa-phone"></i>+1 123-456-7890</p>
                <p className='location'><pre><i class="fa-solid fa-location-dot"></i>        25 Anna Salai, Chennai,<br/>        Tamil Nadu 600002, India</pre></p>
            </div>
            <div className="formcontact">
                <form  className='contactform'>
                    <label className='yourname'><span className='spanname'>Your name</span></label><br/>
                    
                    <input type="text" name='name' className='inname' required placeholder='Enter your name'/><br/>
                    <label >Phone Number</label><br/>
                    <input type="tel" name='phone' className='mobileno' required placeholder='Enter your mobile number' /><br/>
                    <label className='Write'>Write your messages here</label><br/>
                    <textarea name="message"rows="6" className='inmessage' id="" placeholder='Enter your message'></textarea><br/>
                    <button type='sumbit' className='btwsumbit'>Sumbit Now <i class="fa-solid fa-arrow-right"></i></button>
                </form>
            </div>
        </div>
    </div>
  )
}
