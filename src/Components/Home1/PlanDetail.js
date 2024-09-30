import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

export const PlanDetail = (props) => {
  return (
    <div >
      <div className="pricingHead">
        <h2>{props.price}</h2>
        <h3>{props.plan}</h3>
      </div>
      <div className="pricingBody">
        <ul>
          <li>
            <FaCircleCheck className="checkIcon" />
           { props.trailFeatures}
          </li>
          <li>
            <FaCircleCheck className="checkIcon" />
           { props.content}
          </li>
          <li>
            <FaCircleCheck className="checkIcon" /> 
            {props.unlimitedFeatures}
          </li>
          <li>
            <FaCircleCheck className="checkIcon" />
           {props.recovery}
          </li>
          <li>
            <FaCircleCheck className="checkIcon" />
            {props.support}
          </li>
        </ul>
        <div className="plans">
        <button className="plan">Choose Plan</button>
        </div>
        
      </div>
      
 </div>
  );
};
