import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { FaAngleLeft } from "react-icons/fa6";
import ProjectDoneDetails from "../Components/ProjectDoneDetails";
import "../Css/ProjectDone.css";
import Footer from "../Components/Footer";

const ProjectDone = () => {
  // obj = {name, class, age}
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  })


  const projectDone = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1722591190/case-thumb1_vygfb1.png",
      jobType: "WEB DEVELOPMENT",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1722591191/case-thumb6_nvkngn.png",
      jobType: "SOFTWARE MANAGEMENT",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1722591190/case-thumb2_fapsqs.png",
      jobType: "NETWORK SECURITY",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1722591191/case-thumb5_rrch4h.png",
      jobType: "PRODUCT DESIGN",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1722591191/case-thumb4_tuw33i.png",
      jobType: "DIGITAL MARKETING",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1722591190/case-thumb3_bdiktw.png",
      jobType: "PLATFORM INTEGRATION",
    },
  ];
  return (
    <div>
      <Navbar />
      <div>
        <div className="aboutUs">
          <div>
            <div className="AboutUSHeader">
              <h1>Projects</h1>
            </div>
            <div className="About team">
              <h6>
                Home <FaAngleLeft />
                <span> Projects</span>
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row projectDoneDetails">
            {projectDone.map((item, id) => {
              return (
                <ProjectDoneDetails key={id} image={item.image} jobType={item.jobType} />
              );
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProjectDone;
