import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const ProjectDoneDetails = ({image, jobType}) => {
  
  return (
    <div className='col-lg-6 col-md-6 col-sm-12 col-12 mb-5'>
        <div className='projectMade'>
        <img src={image} alt=''/>
        </div>
        <div className='projectDone'>
        <div className='marketing' >
            <p>
                Marketing, Software
            </p>
            <h3>
                {jobType}</h3>
        </div>
        
        </div>
    </div>
  )
}

export default ProjectDoneDetails