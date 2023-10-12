import React from 'react'

import './Styles/Testimonies.css'

import Testimony from './Testimony'

import { testimonies } from '../../constants'

const Testimonies = () => {

  return (
    <section className='testimonies-section' id='testimonies'>
        <div className='testimonies-section-div1'>
            <p>HAPPY CUSTOMERS</p>
            <h5>Don't take our word for it. See what <i>customers</i> are saying about us.</h5>
        </div>
        <div className='testimonies-section-div2'>
            {
                testimonies && testimonies.map(testimony => {
                    const {rating, text, user_photo, user_name, user_description1, user_description2} = testimony
                    return <Testimony
                        key={text}
                        rating={rating}
                        text={text}
                        userPhoto={user_photo}
                        userName={user_name}
                        userDesciption1={user_description1}
                        userDesciption2={user_description2}   
                    />
                })
            }
        </div>
    </section>
  )
}

export default Testimonies