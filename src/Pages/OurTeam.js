import React from "react";
import Navbar from "../Components/Navbar";
import { FaAngleLeft } from "react-icons/fa6";
import TeamDetails from "../Components/Team/TeamDetails";
import "../Css/OurTeam.css"
import Feedback from "../Components/Team/Feedback";
import Blog from "../Components/Home1/Blog";

const OurTeam = () => {
  return (
    <div>
      <Navbar />
      <div className=" container-fluid ourTeam">
      <div className="aboutUs">
        <div>
          <div className="AboutUSHeader">
            <h1>Our Team</h1>
          </div>
          <div className="About">
            <h6>
              Home <FaAngleLeft />
              <span> OurTeam</span>{" "}
            </h6>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
      <div className="Gold Vision Company teamMembers ">
              <h6>OUR TEAM MEMBERS</h6>
            </div>
            <div className="teamMember">
                <h1>
                Dedicated Team Members
                </h1>
            </div>
            <div className="container">
                <div className="row">
                   <TeamDetails 
                   image="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722503467/team-inner1_vmilca.png"
                   />
                    <TeamDetails 
                   image="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722503468/team-inner-3_plcd0h.png"
                   /> 
                   <TeamDetails 
                   image="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722503468/team-inner2_rioqmy.png"
                   />
                    <TeamDetails 
                   image="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722503469/team-inner4_uyqpdd.png"
                   />
                </div>
            </div>
            <div>

            </div>
      </div>
      <Feedback/>
      
      </div>
      <Blog/>
      
    </div>
  );
};

export default OurTeam;
