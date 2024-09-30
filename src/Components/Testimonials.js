import React from 'react'
import "../Css/Testimonials.css"
import Slick3 from './Slider/Slick3'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className='testimonialSpace'>
        <div className="testinomailsHead">
        <h5>TESTIMONIALS</h5>
        </div>
        <div className='customerReview'>
            <h1>
            What Our Customer
                <span> Says</span>
            </h1>
        </div>
        <Slick3/>

        </div>
    </div>
  )
}

export default Testimonials