import React, { useEffect, useState, useRef } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

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
          <a href='/'>
            <img src={nixon_logo} alt='Nixon Logo'/>
            <p><span className='span'>Ni</span>x<span className='span'>o</span>n <span className='span'>St</span>u<span className='span'>d</span>i<span className='span'>o</span></p>
          </a>
        </h1>
        <nav ref={navRef} className='header-nav'>
          <Link to='home' className='header-link' onClick={showNavbar}
                  spy={true} smooth={true} offset={-20} duration={200}>
              Home
          </Link>
          <Link to='process' className='header-link' onClick={showNavbar}
                  spy={true} smooth={true} offset={-20} duration={200}>
              Process
          </Link>
          <Link to='testimonies' className='header-link' onClick={showNavbar}
                  spy={true} smooth={true} offset={-10} duration={200}>
              Testimonials
          </Link>
          <Link to='services' className='header-link' onClick={showNavbar}
                  spy={true} smooth={true} offset={-10} duration={200}>
              Services
          </Link>
          <Link to='about' className='header-link' onClick={showNavbar}
                  spy={true} smooth={true} offset={-10} duration={200}>
              About
          </Link>
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