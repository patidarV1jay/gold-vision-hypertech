import React from "react";
import { PlanDetail } from "./PlanDetail";
import "../../Css/Plans.css"

const Plans = () => {
 const planData=[{
    id:1,
    price:"₹2000",
    plan:"Basic Plan",
    trailFeatures:"30-Day Free Trial",
    content:"Single-Language Support",
    unlimitedFeatures:" Core Features",
    recovery :" No Data Backup or Recovery",
    support:" Limited Customer Support"
  },
  {
    id:2,
    price:"₹ 5000",
    plan:"Standard Plan",
    trailFeatures:"45-Day Free Trial",
    content:"Multi-Language Support",
    unlimitedFeatures:" Enhanced Features",
    recovery :"Unlimited Data Backup and Recovery",
    support:" Priority Customer Support"
  },
  {
    id:3,
    plan:"Premium Plan",
    price:"₹ 10000+",
    trailFeatures:"60-Day Free Trial & Custom Content",
    content:"Multi-Language Support",
    unlimitedFeatures:" 24/7 Dedicated Customer Support",
    recovery :"Unlimited Data Backup, Recovery and Security",
    support:" Advanced Analytics & Reporting"
  }]
  return (
    <div className="bestPlans">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-6 ">
            <div className="GoldVision businessplans ">
              <h6>START BUSINESS</h6>
            </div>
            </div>
            <div className="plans">
              <h2>Choose Your Best Plan</h2>
            </div>
         
        </div>
      </div>
      <div className="container">
        <div className="row">
          {planData.map((item)=>{
            return(
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-5 "  key={item.id}>
              <PlanDetail
              price={item.price}
              plan={item.plan}
              trailFeatures={item.trailFeatures}
              content={item.content}
              unlimitedFeatures={item.unlimitedFeatures}
              recovery={item.recovery}
              support={item.support}
              />
           </div>)
          })}
        </div>
      </div>
    </div>
  );
};

export default Plans;
