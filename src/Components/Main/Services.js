import React from 'react'
import { Link } from 'react-scroll'

import './Styles/Services.css'

import modeling3D from '../../Media/model_service.png'
import arInteg from '../../Media/ar_integ_service.png'
import mkting from '../../Media/mkting_service.png'
import webDev from '../../Media/webdev_service.png'


const Services = () => {
  return (
    <section className='services-section' id='services'>
        <div className='services-section-div1'>
          <div>
            <p>WHAT WE DO?</p>
            <h5>The service we offer is <i>specifically</i> designed to meet your needs.</h5>
          </div>
          <Link to='footer' className='services-section-div1-button' spy={true} smooth={true} offset={-20} duration={200}>
            Get in Touch
          </Link>
        </div>
        <div className='services-section-div2'>
          <div className='services-section-div2-div1'>
            <img src={modeling3D} alt='3d modeling service logo...' className='services-section-div2-image1'/>
            <p className='services-section-div2-p1'>3D <br/>Modeling</p>
          </div>
          <div className='services-section-div2-div2'>
            <img src={arInteg} alt='3d modeling service logo...' className='services-section-div2-image2'/>
            <p className='services-section-div2-p2'>AR <br/>Integration</p>
          </div>
          <div className='services-section-div2-div3'>
            <img src={mkting} alt='3d modeling service logo...' className='services-section-div2-image3'/>
            <p className='services-section-div2-p3'>Marketing <br/>& Advertising</p>
          </div>
          <div className='services-section-div2-div4'>
            <img src={webDev} alt='3d modeling service logo...' className='services-section-div2-image4'/>
            <p className='services-section-div2-p4'>Web <br/>Development</p>
          </div>
        </div>
    </section>
  )
}

export default Services