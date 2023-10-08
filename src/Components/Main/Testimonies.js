import React from 'react'

import './Styles/Testimonies.css'

import Testimony from './Testimony'
import { testimonies } from '../../constants'

const Testimonies = () => {

  return (
    <section className='testimonies-section'>
        <div className='testimonies-section-div1'>

        </div>
        <div className='testimonies-section-div2'>
            {
                testimonies && testimonies.map(testimony => {
                    const {id, rating, text, user_photo, user_name, user_description1, user_description2} = testimony
                    return <Testimony
                        key={id}
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