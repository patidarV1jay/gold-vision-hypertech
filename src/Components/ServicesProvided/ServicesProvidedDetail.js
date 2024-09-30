import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const ServicesProvidedDetail = ({image, service}) => {
  return (
    <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
        <div className='servicesDetailProvided'>
            <div>
                <img className='serviceDetialsImage' src={image} alt='services' />
            </div>
            <div className='servicesDetails'>
                <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1722669881/service-icon_oza2to.png' alt='serviceIcon'/>
            </div>
            <div className='servicePost'>
                <h4> {service}</h4>
            </div>
            <div className='ServicesGiven'> 
            <div>
                <p>
                Marketing repurpose success tech sapien maximus design.
                </p>

            </div>
            <div className='serviceShape'>
                <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1722665764/serice-shape_itb9ar.png' alt='serviceShape'/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesProvidedDetail