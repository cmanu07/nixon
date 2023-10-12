import React from 'react'

import { Container } from 'react-bootstrap'

import './Styles/Process.css'

const Process = () => {

  return (
    <section className='process-section' id='process'>
        <Container className='process-section-details'>
            <div className='process-section-details-div1'> 
                <p>WHY CHOOSE US?</p>
                <h5>Here are a few <i>reasons</i> why our customers choose<br/>NIXON STUDIO</h5>
            </div>
            <div className='process-section-details-div2'>
                <div>
                    <h3>01</h3>
                    <p>Create augmented reality experiences that turn everyday objects, images, and places into new opportunities with a real-world ROI – bring your brand to the next level!</p>
                </div>
                <div>
                    <h3>02</h3>
                    <p>Stay ahead of the curve with rapid in-house development that continually redefines what’s possible in AR displays. We ensure both high performance and high-yield mass manufacturing methods for our displays.</p>
                </div>
                <div>
                    <h3>03</h3>
                    <p>We use self-developed algorithms and parallel computing for diffractive waveguide design and optimization.</p>
                </div>
            </div>
        </Container>
        <Container className='process-section-youtube'>
            <div className='ratio ratio-16x9'>
                <iframe src="https://www.youtube.com/embed/J2Dgabiv96s?si=87eH2X5-M_2P6_pb" title='Youtube Video' allowFullScreen ></iframe>
            </div>
        </Container>
    </section>
  )
}

export default Process