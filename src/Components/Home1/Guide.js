import React, { useState } from "react";
import "../../Css/Guide.css";
import GuideDetails from "./GuideDetails";
const Guide = () => {
  const [accordionData, setAccordionData] = useState({
    one: false,
    two: false,
    three: false,
  });

  const handleOpen = (id) => {
    console.log(id);
    if(id === 1) {
      setAccordionData({...accordionData, one: !accordionData.one, two: false, three: false})
    }
    if(id === 2) {
      setAccordionData({...accordionData, two: !accordionData.two, one: false, three: false})
    }
    if(id === 3) {
      setAccordionData({...accordionData, three: !accordionData.three, one:false, two: false})
    }
  };
  return (
    <div className="container-fluid questionsRelated">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
          <div className="updates">
            <div className="business">
              <h1>Keeping Your Business</h1>
              <h1>
                Safe and
                <span> Available. </span>
              </h1>
            </div>
            <div className="faqImage">
              <img
                src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722342078/faq1_i01835.png"
                alt="faq"
                />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 faq">
          <div className="frequentlyAsk">
            <h2>
              A Comprehensive
              <span> Guide.</span>
            </h2>
            <p>
              Alternative innovation network environmental whiteboard pursue for
              premier methods empowerment go forward opportunities
            </p>
          </div>
          <GuideDetails
            open={accordionData.one}
            question="How we can help with software development for business?"
            answer="We specialize in building custom software solutions that streamline your operations and enhance productivity. Our team works closely with you to understand your requirements, developing scalable and efficient software to support your business goals."
            id={1}
            handleClick={handleOpen}
            />
          <GuideDetails
            open={accordionData.two}
            question="How we ensure the availability of business data?"
            answer="We offer cloud-based infrastructure with high availability and failover mechanisms. Our data centers are equipped with redundancy and disaster recovery plans to ensure your business remains operational, even in the event of an outage."
            id={2}
            handleClick={handleOpen}
            />

          <GuideDetails
            open={accordionData.three}
            question="What kind of support can I expect if something goes wrong?"
            answer=" Depending on your plan, we offer dedicated support ranging from business hours assistance in the Basic plan to 24/7 priority support in our Premium plan. Our technical experts are always ready to resolve any issues you encounter."
            id={3}
            handleClick={handleOpen}
            />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Guide;
