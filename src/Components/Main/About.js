
import React from 'react'

import founders from '../../Media/Andrei&Darian.webp'

import './Styles/About.css'

const About = () => {
  return (
    <section className='about-section' id='about'>
        <div className='about-section-div1'>
          <figure>
              <p>Your content here...</p>
          </figure>
          <img src={founders} alt='Founders of the company...'/>
        </div>
        <div className='about-section-div2'>
          <p className='about-section-div2-p'>WHAT MAKES US DIFFERENT?</p>
          <h5>We bring <i>solutions</i> to make life easier for our customers.</h5>
          <div>
            <p>
              NIXON STUDIO proposes an innovative solution to improve the shopping experience in the retail sector, using augmented reality technology. The developed system works by means of helping visualize the products, created by 3D modeling techniques. It helps consumers to simulate the presence of desired objects before purchasing them, directly on the merchant's website.
            </p>
            <p>
              The proposed solution thus contributes to avoiding returns and improving the online shopping experience, as it provides a more accurate and realistic way to experience the desired product, so that consumers can make an informed decision and be satisfied with their purchase.
            </p>
          </div>
        </div>
    </section>
  )
}

export default About