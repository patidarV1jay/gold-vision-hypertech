import React from 'react'
import Navbar from '../Components/Navbar'
import { FaAngleLeft } from 'react-icons/fa6'
import Plans from "../Components/Home1/Plans"
import Blog from "../Components/Home1/Blog"
import Footer from '../Components/Footer'
const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <div>
        <div className='aboutUs'>
          <div >
            <div className='AboutUSHeader'>
              <h1>Pricing</h1>
            </div>
            <div className='About team'>
              <h6>Home <FaAngleLeft/>
              <span> Pricing</span> </h6>
            </div>
          </div>
          </div>
          </div>
        <Plans/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Pricing