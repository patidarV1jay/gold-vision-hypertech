import React from "react";
import Navbar from "../Components/Navbar";
import "../Css/About.css";
import { FaAngleLeft, FaCircle } from "react-icons/fa6";
// import CountUp from 'react-countup/build/CountUp'
import CountUp from "react-countup";
import Project from "../Components/Home1/Project";
import Blog from "../Components/Home1/Blog";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
        
          <div className="aboutUs">
            <div className="AboutUSHeader">
               <h1>About Us</h1>
            </div>
          <div className="About">
            <h6>
              Home <FaAngleLeft />
              <span> About Us</span>
            </h6>
          </div>
      </div>
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="GoldVision recentUpdates">
              <h6>GOLD VISION COMPANY</h6>
            </div>
            <div className="AboutSolution">
              <h1>
                We Can Clients With The About
                <span> Solution. </span>
              </h1>
            </div>
            <div className="AboutSolution">
              <p>
                We build robust, scalable software tailored to your business
                processes, ensuring it aligns perfectly with your
                operational goals.
              </p>
            </div>
            <div className="bestItSolutions">
              <div className="solutionsList">
                <ul>
                  <li>
                    <FaCircle className="circleIcon" />
                    Best IT Solutions & Service
                  </li>
                  <li>
                    <FaCircle className="circleIcon" />
                    24 Hour's Customer Service
                  </li>
                </ul>
                <div>
                  <button className="ExploreMoreBtn">Explore More</button>
                </div>
              </div>
              <div>
                <div className="counterImage">
                  <img
                    src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722491897/counter-icon_o23ekp.png"
                    alt="counterImage"
                    />
                </div>
                <div className="aboutClients">
                  <CountUp start={500} end={826} className="countup" />

                  <p>Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="aboutImage">
              <img
                src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722488381/about-us_hahhuk.png"
                alt="aboutImag"
                />
            </div>
            
          </div>
        
      </div>
 
      </div>
      <div className="container-fluid">
      {/* <Project /> */}
      <Blog />
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
