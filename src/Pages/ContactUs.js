import React from 'react'
import Navbar from '../Components/Navbar'
import { FaAngleLeft } from 'react-icons/fa6'
import Contact from '../Components/Home1/Contact'

const ContactUs = () => {
  return (
    <div>
        <Navbar/>
        <div>
        <div className='aboutUs'>
          <div >
            <div className='AboutUSHeader'>
              <h1>Contact Us</h1>
            </div>
            <div className='About team'>
              <h6>Home <FaAngleLeft/>
              <span> Contact Us</span> </h6>
            </div>
            </div>
            </div>
        </div>
        <Contact/>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.6365067585107!2d77.31620626107798!3d28.580675975591692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45a2fec4393%3A0xaa5938d112af449e!2sNoida%20Sector%203%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1727275015745!5m2!1sen!2sin"
          style={{ width: "100%", height: "29rem", borderRadius:"15px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default ContactUs