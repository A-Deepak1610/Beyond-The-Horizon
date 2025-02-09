import React from 'react'
import "./packages.css"
import bgpic from "./assets/bg_packages.webp"
import bali from "./assets/bali.webp"
import Switzerland from "./assets/Switzerland.jpg"
import singapore from "./assets/singapore.webp"
import europe from "./assets/europe.jpg"
export default function Packages() {
  return (
    <div id='packages' className='packages'>
        <div className="maincontentPackages">
            <img src={bgpic} className='picpackages' alt="" />
            <div className="packagesheader">
                <div className="headerpackages">
                <p className='Latest'>Latest Tour Package Price</p>
                <h1>Affordable Tour Packages</h1>
                <p className='We'>We believe that everyone deserves to experience their dream vacation without breaking <br/> the bank. That's why we offer a price section on our website that features a range of <br/> affordable travel</p>
                </div>
            </div>
        </div>
        <div className="tourpackages">
            <div className="package1">
                <img src={bali} className='balii' />
                <p><i class="clock fa-regular fa-clock"></i> 10 Days / 9 Nights</p>
                <h2>Bali Holiday Deals</h2>
                <button>PACKAGE DETAILS</button>
            </div>
            <div className="package1">
            <img src={Switzerland} alt="" className='Switzerland' />
            <p><i class="clock fa-regular fa-clock"></i> 12 Days / 11 Nights</p>
            <h2>Swiss Travel Packages</h2>
            <button>PACKAGE DETAILS</button>
            </div>
            <div className="package1">
            <img src={singapore} alt="" className='singapore' />
            <p><i class="clock fa-regular fa-clock"></i> 9 Days / 8 Nights</p>
            <h2>Singapore Trip Offers</h2>
            <button>PACKAGE DETAILS</button>
            </div>
            <div className="package1">
            <img src={europe} alt="" className='europe' />
            <p><i class="clock fa-regular fa-clock"></i> 11 Days / 10 Nights</p>
            <h2>Europe Travel Tours</h2>
            <button>PACKAGE DETAILS</button>
            </div>
        </div>
    </div>
  )
}
