import React from 'react'
import "./Css/index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home1 from './Pages/Home1'
import About from './Pages/About'
import OurTeam from './Pages/OurTeam'
import AboutTeam from './AboutTeam'
import Pricing from './Pages/Pricing'
import ContactUs from './Pages/ContactUs'
import ProjectDone from './Pages/ProjectDone'
import Portfolio from './Pages/Portfolio'
import { Services } from './Pages/Services'
import BlogGrid from './Pages/BlogGrid'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home1/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/team' element={<OurTeam/>}/>
            <Route path='/teamDetails' element={<AboutTeam/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/project' element={<ProjectDone/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/blogs' element={<BlogGrid/>}/>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App