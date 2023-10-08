import React from 'react'

import { Container } from 'react-bootstrap'

import './Styles/Process.css'

const Process = () => {

  return (
    <section className='process-section'>
        <Container className='process-section-details'>
            <div className='process-section-details-div1'> 

            </div>
            <div className='process-section-details-div2'>
                <div>
                    <h5>01</h5>
                </div>
                <div>
                    <h5>02</h5>
                </div>
                <div>
                    <h5>03</h5>
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