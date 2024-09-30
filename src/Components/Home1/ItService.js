import React from "react";
import "../../Css/Services.css";
import Feature from "./Feature";
import EssentialSolution from "./EssentialSolution";
import ProfessionalServices from "./ProfessionalServices";
import Project from "./Project";
import Plans from "./Plans";
import Guide from "./Guide";
import Testimonials from "../Testimonials";
import Contact from "./Contact";
// import Blog from "./Blog";
import Footer from "../Footer";

const ItService = () => {
  return (
    <div className="container-fluid services">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 col-12">
            <div className="serviceProvided">
              <div className="servicesAvailable">
                <h5>GOLD VISION SERVICES</h5>
                <div className="itServicesHeader">
                  <h2>
                  Empowering Innovation 
                  <br/>with <span> Precision Technology</span>
                  </h2>
                  <p>
                  At Gold Vision, we transform ideas into cutting-edge solutions. Our expert team specializes in custom software development, mobile app design, and digital marketing strategies to drive your business forward. Discover the future of innovation with Gold Vision – where your vision turns into reality
                  </p>
                </div>
                <div className="exploreMoreBtn">
                  <button className="exploreMore">Explore More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 ">
            <div className="itSevicesImage">
              <img
                src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722230848/soluhome1_aub2o8.png"
                alt=""
              />
            </div>
          </div>
    </div>
    </div>
    <EssentialSolution/>
    <ProfessionalServices/>
    <Project/>
    <Plans/>
    <Guide/>
    <Testimonials/>
    <Contact/>
    {/* <Blog/> */}
    <Footer/>
    </div>
  );
};

export default ItService;
