import React from 'react'

import './Styles/Testimonies.css'

const Testimony = ({rating, text, userPhoto, userName, userDesciption1, userDesciption2}) => {
  
    return (
        <div className='testimony-div'>
            <p className='testimony-div-p1'>{rating}</p>
            <p className='testimony-div-p2'>{text}</p>
            <div>
                <img src={userPhoto} alt={`User ${userName} pht...`}/>
                <div>
                    <p className='testimony-username'>{userName}</p>
                    <p className='testimony-description'>{userDesciption1}
                        <p>{userDesciption2}</p>
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Testimony