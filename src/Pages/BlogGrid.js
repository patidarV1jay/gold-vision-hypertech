import React from 'react'
import Navbar from '../Components/Navbar'
import { FaAngleLeft } from 'react-icons/fa6'
import BlogGridDetails from '../Components/BlogGrid/BlogGridDetails'
import Footer from '../Components/Footer'

const BlogGrid = () => {
  const BlogGrid=[
    {
      id:'a',
      image:"https://res.cloudinary.com/dixfg1bvv/image/upload/v1722683433/blog-grid6_og1mfv.png",
      heading:"Supervisor Disapproved Of Latest Work."
    },
    {
      id:'b',
      image:"https://res.cloudinary.com/dixfg1bvv/image/upload/v1722683430/blog-grid4_kbqrwr.png",
      heading:"Simplify Streamline Succeed IT Solutions."
    },
    {
      id:"c",
      image:"https://res.cloudinary.com/dixfg1bvv/image/upload/v1722683430/blog-grid5_yxvdp7.png",
      heading:"Unlocking Potential Through Technology."
    },
    {
      id:'d',
      image:"https://res.cloudinary.com/dixfg1bvv/image/upload/v1722683430/blog-grid3_jmd83r.png",
      heading:"Balancing AI Innovation with Ethical Standards."
    },
    {
      id:"e",
      image:"https://res.cloudinary.com/dixfg1bvv/image/upload/v1722683429/blog-grid2_i0y0gu.png",
      heading:"UX/UI Designing the Future Web Design."
    },
    {
      id:"f",
      image:"https://res.cloudinary.com/dixfg1bvv/image/upload/v1722683433/blog-grid6_og1mfv.png",
      heading:"Your Business Safe & Ensure High Handiness."
    }

  ]
  return (
    <div>
        <Navbar/>
        <div>
        <div className="aboutUs">
          <div>
            <div className="AboutUSHeader">
              <h1>Blogs</h1>
            </div>
            <div className="About team">
              <h6>
                Home <FaAngleLeft />
                <span> Blogs</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {BlogGrid.map((item,id)=>{
            return(
              <BlogGridDetails
              key={id}
              image={item.image}
              heading={item.heading}
              />

            )
          })}
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default BlogGrid