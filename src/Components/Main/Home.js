import React from 'react'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-scroll'


import './Styles/Home.css'

const Home = () => {
  return (
    <section className='home-section' id='home'>
        <h2>
            <div className='home-section-title'>
                <p>We bring <i>solutions</i> to make life easier for our customers.</p>
                <p>We have considered our solutions to support every stage of your growth.</p>
            </div>
            <Link to='footer' className='home-section-title-button' spy={true} smooth={true} offset={-20} duration={200}>
              Get Started
            </Link>
        </h2>
        <Spline className='home-section-spline' scene="https://prod.spline.design/93ZI98lk4rmu1BqL/scene.splinecode" />
    </section>
  )
}

export default Home