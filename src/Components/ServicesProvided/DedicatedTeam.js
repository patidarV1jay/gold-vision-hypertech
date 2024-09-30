import React from 'react'

const DedicatedTeam = ({image}) => {
  return (
    <div className='col-md-3'>
        <div className='dedicatedTeam'>
            <div className='dedicatedTeamMembers'>
            <div className='teamMembersHeading'>
                <h3>Al-Amin Hossain</h3>
                <h6>UI/UX DESIGNER</h6>
            </div>
            <div className='teamSocialMedia'>
                <div>
                    <span>FACEBOOK</span>
                </div>
                <div>
                    <span>TWITTER</span>
                </div>
                <div>
                    <span>BEHANCE</span>
                </div>
            </div>
            </div>
            <div className='teamMembersImage'>
                <img src={image} alt='teamMembers'/>
            </div>
            
        </div>
        
    </div>
  )
}

export default DedicatedTeam