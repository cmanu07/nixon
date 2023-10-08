import React from 'react'

import Spline from '@splinetool/react-spline';

import './Styles/Home.css'

const Home = () => {
  return (
    <section className='home-section'>
        <h2>
            <div className='home-section-title'>
                <p>We bring <i>solutions</i> to make life easier for our customers.</p>
                <p>We have considered our solutions to support every stage of your growth.</p>
            </div>
            <button>Get Started</button>
        </h2>
        <Spline className='home-section-spline' scene="https://prod.spline.design/93ZI98lk4rmu1BqL/scene.splinecode" />
    </section>
  )
}

export default Home