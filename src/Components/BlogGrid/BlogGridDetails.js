import React from 'react'
import { FaUser } from 'react-icons/fa'
import { FaArrowRight, FaCalendar } from 'react-icons/fa6'
import "../../Css/BlogGrid.css"

const BlogGridDetails = ({image, heading}) => {
  return (
    <div className='col-md-4'>
        
        <div className='blogGrid'>
            <div>
            <img src={image}/>
        </div>
        <div className='blogCalendar' >
            <div>
            <FaUser className='userIcon'/>
            </div>
            <div>
           <span> By wotech </span>
            </div>
            <div className='blogIcons'>
                <FaCalendar className='userIcon'/>
            </div>
            <div>
                <span>January 5, 2024</span>
            </div>
        </div>
        <div>
            <h4>
                {heading}
            </h4>
        </div>
        <div>
            <p> READ MORE <FaArrowRight className='arrowRighticon'/></p>

        </div>
        </div>
    </div>
  )
}

export default BlogGridDetails