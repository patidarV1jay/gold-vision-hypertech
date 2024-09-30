import React from 'react'
import { FaAngleLeft, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaPhone, FaYoutube } from 'react-icons/fa6'
import Navbar from './Components/Navbar'
import "./Css/AboutTeam.css"
import Footer from './Components/Footer'

const AboutTeam = () => {
  return (
    <div className='teamMemeberDetails'>
        <Navbar/>
        <div>
        <div className='aboutUs'>
          <div >
            <div className='AboutUSHeader'>
              <h1>Team Detail</h1>
            </div>
            <div className='About team'>
              <h6>Home <FaAngleLeft/>
              <span> Team Detail</span> </h6>
            </div>
          </div>
          </div>
          <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12 col-12 teamDetailMember'>
                    <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1722503467/team-inner1_vmilca.png' alt="teamMember"/>
                </div>
                <div className='col-md-6 aboutTeamMember'>
                    <h2>
                    Anowar Hossin Omio
                    </h2>
                    <p>Dream-IT Founder & CEO</p>
                    
                
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor creative labore et dolore magna aliqua ipsum suspendisse ultrices gravida commodo viverra accu eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='howToContact'>
                <div className=' col-md-6 call'>
                        <FaPhone className='phoneIcon'/>
                        <h4>Call Us Any Time</h4>
                        <div>
                            <span>+91 99820020011</span>
                            </div>
               </div>
               <div className='col-md-6 call'>
                <FaEnvelope className='phoneIcon'/>
                <h4>Send Email</h4>
                <div>
                    <span>info123@gmail.com</span>
                </div>
               </div>
               </div>
               <div className='socialMediaSites'>
                <div>
                    <h3>Social Media</h3>
                </div>
                <div className='socialMedia'>
                    <FaInstagram className='socialMediaIcons'/>
                </div>
                <div className='socialMedia'>
                <FaFacebook className='socialMediaIcons'/>
                </div>
                <div className='socialMedia'>
                    <FaYoutube className='socialMediaIcons'/>
                </div>   
                <div className='socialMedia'>
                    <FaLinkedin className='socialMediaIcons'/>
                    </div>            
                </div>
                <div className='location'>
                    <FaLocationDot className='loctionIcon'/>
                    <h3>Location</h3>
                 
                </div>
                <p>
                        Sector-2 Noida, U.P, India
                    </p>
                </div>
            </div>
            <div className='row formAndLocation'>
                <div className='col-md-6'>
                <div className=''>
                <form >
                    <div className='row contactform'>
                        <div className='col-md-6'>
                        <input
                        type='text'
                        placeholder='Name'
                        />
                        </div>
                        <div className='col-md-6'>
                            <input
                            type='email'
                            placeholder='E-mail'
                            />

                        </div>
                            <div className='col-md-6'>
                                <input type='text'
                                placeholder='Subject'/>

                            </div>
                            <div className='col-md-6'>
                                <input 
                                type='text'
                                placeholder='Contact'
                                />
                                
                            </div>
                            
                    <div className='contactMessage'>
                        <input 
                        type='text'
                        placeholder='Message'
                        />
                    </div>
                    </div>
                   <div className='exploreMoreBtn'>
                    <button className='submitBtn' type='submit'>
                    Submit
                    </button>
                   </div>
                </form>
            </div>
                </div>
                <div className='col-md-6'>
                    <div className='skillHeading'>
                        <h2>SKILLS</h2>
                    </div>
                    <div className='skills'>
                    <div >
                       <span>
                       SEO Optimization
                       </span>
                       <span className='skill-percent'>
                        94%
                       </span>
                       <div className='skill-bar'>

                       </div>
                    </div>
                    <div >
                       <span>
                       Web Development
                       </span>
                       <span className='skill-percent'>
                        98%</span>
                        
                       <div className='skill-bar'>

                       </div>
                    </div>
                    <div >
                       <span>
                       Data Optimaization
                       </span>
                       <span className='skill-percent'>
                        95%
                       </span>
                       <div className='skill-bar'>

                       </div>
                       </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutTeam