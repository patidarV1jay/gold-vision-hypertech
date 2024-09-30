import React from "react";
import FeedbackDetails from "./FeedbackDetails";



const Feedback = () => {
  const feedbackArray = [
    {
      id: 1,
      name: "D. Jackline Techie",
      jobPost: "UI Designer",
    },
    {
      id: 2,
      name: "Ms. Serana Belluci",
      jobPost: "Marketing",
    },
    {
      id: 3,
      name: "D. Hosain Al-Amin",
      jobPost: "DEVELOPER",
    },
]
  return (
    <div className="container-fluid">
      <div className="clientFeedback">
        <div className="Gold Vision Company teamMembers ">
          <h6>CLIENTS FEEDBACK</h6>
        </div>

        <div>
          <h1>Perspective and Experiences</h1>
        </div>

        <div className="container">
          <div className="row">
            {feedbackArray.map((item) => {
              return (
              <FeedbackDetails name={item.name}
              jobPost={item.jobPost} />)
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
