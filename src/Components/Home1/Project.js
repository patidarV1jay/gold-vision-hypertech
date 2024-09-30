import React from "react";
import Slick from "../Slider/Slick";
import "../../Css/Project.css";
import { Link } from "react-router-dom";
// import Slick2 from "../Slider/Slick2";

const Project = () => {
  return (
    <div className="container-fluid projects">
      <div className="container">
      <div className="row g-0">
      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
      <div className="GoldVision recentUpdates">
        <h6>GOLD VISION COMPANY</h6>
      </div>
      <div className="recentProjects">
        <h2>
          Explore Our Recent
          <span> Projects.</span>
        </h2>
      </div>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
        <button className="projectDetailBtn">
          <Link to={"/project"} className="Link">
          View Project
          </Link>
          </button>
      </div>
      </div>
      </div>
      <div className="slickData">
        <div className="container">
        <Slick />
        </div>
      </div>
      
    </div>
  );
};

export default Project;
