import React from "react";
import "../../Css/Professional.css";
import { ProfessinalDetails } from "./ProfessinalDetails";

const ProfessionalServices = () => {
  return (
    <div className="professionalItService">
      <div className="Itservice">
        <div className="GoldVision success">
          <h6>GOLD VISION COMPANY</h6>
        </div>
        <div className="professionalServices">
            <h2>How Professional IT Services<br/>
            Can Drive  
            <span> Success.</span></h2>
        </div>
        <div className="container">
            <div className="row professionalServicesGiven">
               <ProfessinalDetails
                    image="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722314578/service2_s2rh3i.png"
                    head="Cloud Computing"
                    details=" A cloud-computing solution for Scalable cloud solutions that offer flexibility, security, and accessibility for your business operations."
               />
                 <ProfessinalDetails
                    image="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722314578/service1_kuhkph.png"
                    head="Web Development"
                    details="Responsive and visually appealing websites designed to improve customer experience and drive online success."
               />
                 <ProfessinalDetails
                    image="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722314578/service3_nxujde.png"
                    head="Digital Marketing"
                    details="Targeted SEO, social media, and content marketing strategies to elevate your brand presence and attract the right audience. "
               />
                 <ProfessinalDetails
                    image="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722314578/service4_zppd2m.png"
                    head="App Development"
                    details="Feature-rich, user-friendly mobile applications for iOS and Android that enhance user engagement and business growth."
               />
            </div>
        
        </div>

      </div>
    </div>
  );
};

export default ProfessionalServices;
