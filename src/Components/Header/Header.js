import React, { useEffect, useState, useRef } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

import nixon_logo from '../../Media/nixon_logo.png'

import './Header.css'

const Header = () => {

  const [scroller, setScroller] = useState(() => false)
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav')
  }

  useEffect(() => {

    const scrollOn = () => {
      window.scrollY >= 16 ? setScroller(true) : setScroller(false)
    }
    window.addEventListener('scroll', scrollOn)

    return () => window.removeEventListener('scroll', scrollOn)
  })

  return (
    <header className={scroller ? 'header-scroll' : 'header'}>
        <h1>
          <a href='/#'>
            <img src={nixon_logo} alt='Nixon Logo'/>
            <p><span className='span'>Ni</span>x<span className='span'>o</span>n <span className='span'>St</span>u<span className='span'>d</span>i<span className='span'>o</span></p>
          </a>
        </h1>
        <nav ref={navRef}>
          <a href='/#' onClick={showNavbar}>Home</a>
          <a href='/#' onClick={showNavbar}>Process</a>
          <a href='/#' onClick={showNavbar}>Testimonials</a>
          <a href='/#' onClick={showNavbar}>Services</a>
          <a href='/#' onClick={showNavbar}>About</a>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes/>
          </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars/>
        </button>
    </header>
  )
}
export default Header