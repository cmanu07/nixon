import React from 'react'

import nixonLogo from '../../Media/Nixon_main.webp'
import facebookLogo from '../../Media/footer_facebook_logo.svg'

import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='footer-company'>
          <img src={nixonLogo} alt='Company Logo...' className='footer-company-logo'/>
          <h6>
            © NIXON STUDIO
            <p>2023 - All Rights Reserved</p>
          </h6>
          <div>
            <a href='https://www.facebook.com/profile.php?id=100076375976323' target='blank' className='footer-company-facebook'> </a>
            <a href='https://www.youtube.com/@NIXON-STUDIO/featured' target='blank' className='footer-company-youtube'> </a>
            <a href='https://www.instagram.com/nixonstudio.co/' target='blank' className='footer-company-instagram'> </a>
          </div>
        </div>
        <div className='footer-contact'>
            <div className='footer-contact-div1'>
              <h6>Get in Touch</h6>
              <p>Satu Mare, Romania</p>
            </div>
            <p className='footer-contact-p'>nixonstudio.co@gmail.com</p>
            <div className='footer-contact-div2'>
              <p>+40 753 971 076</p>
              <p>+40 770 465 700</p>
            </div>
        </div>
        <div className='footer-newsletter'>
            <h6>Our newsletter</h6>
            <p>Subscribe to our newsletter to get our news delivered to you.</p>
            <div>
              <input type='email'/>
              <button>Join</button>
            </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer