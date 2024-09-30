import React from 'react'
import "../../Css/OurTeam.css"

const TeamDetails = (props) => {
  return (
    <div className='col-md-3 '>
        <div className='teamDetails'>
        <div className='teamDetailsHead'>
            <h3>AI-Amin Hossian </h3>
            <h6>
                UI/UX DESIGNER
            </h6>
        </div>
        <div className='socialMedia'>
            <div>
                Facebook
            </div>
            <div>
                <span>Twitter</span>
            </div>
            <div>Behance</div>
        </div>

        <div className='conatiner teamMembersImage'>
            <img src={props.image} alt=''/>
        </div>
        <div className='teamDetailImage'>
        </div>

        </div>
    </div>
  )
}

export default TeamDetails