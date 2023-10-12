import React from 'react'

import { AiFillStar } from 'react-icons/ai'

import './Styles/Testimonies.css'

const Testimony = ({rating, text, userPhoto, userName, userDesciption1, userDesciption2}) => {
  
    return (
        <div className='testimony-div'>
            <p className='testimony-div-p1'>
                <AiFillStar className='testimony-div-p1-star'/>
                <AiFillStar className='testimony-div-p1-star'/>
                <AiFillStar className='testimony-div-p1-star'/>
                <AiFillStar className='testimony-div-p1-star'/>
                <AiFillStar className='testimony-div-p1-star'/>
                <AiFillStar className='testimony-div-p1-star'/>
            </p>
            <p className='testimony-div-p2'>{text}</p>
            <div>
                <img src={userPhoto} alt={`User ${userName} pht...`}/>
                <div className='testimony-div-user'>
                    <p className='testimony-username'>{userName}</p>
                    <div className='testimony-description'>{userDesciption1}
                        <p>{userDesciption2}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Testimony