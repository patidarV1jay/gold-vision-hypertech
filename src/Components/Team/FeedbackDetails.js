import React from 'react'
import { FaStar } from 'react-icons/fa6'
import "../../Css/OurTeam.css"

const FeedbackDetails = (props) => {
  return (
    <div className='col-md-4'>
      <div className='feedback'>
        <div className='feedbackImage1'>
                <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1722403279/testi1_nglbnh.png' alt='' />
            </div>
            <div >
                <p>
                paradigms. Monotonectally extend open-source mvia competitive methods of empowerment dri revolutionize stand- business.
                </p>
            </div>
            <hr/>
            <div >
            <FaStar className='starIcon'/>
            <FaStar className='starIcon'/>
            <FaStar className='starIcon'/>
            <FaStar className='starIcon'/>
            </div>
            <div className='feedbackclients'> 
                <h3 >{props.name}</h3>
                <p>{props.jobPost}</p>
            </div>
      
            </div>
    </div>
  )
}

export default FeedbackDetails