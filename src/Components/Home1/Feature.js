import React from 'react'
import "../../Css/Services.css"

const Feature = (props) => {
  return (
    <div className=''>
         <div className='col-md-11 '>
                <div className='features'>
                    <div>
                        <img src={props.image} alt=''/>
                    </div>
                    <div>
                        <h2>{props.heading}</h2>
                      <p> Monotonectally Gold Vision  in fermentum quis</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Feature