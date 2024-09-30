import React from "react";
import "../../Css/Contact.css";
const Contact = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className=" col-lg-7 col-md-7 col-sm-12 col-12 ">
            <div className="GoldVision recentUpdates">
              <h6>CONTACT US</h6>
            </div>
            <div className="contactUs">
              <h1>
                Make an Online Appoinemnt Booking For
                <span> Business Planing. </span>
              </h1>
            </div>
            <div className="">
              <form>
                <div className="row contactform">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <input type="email" placeholder="E-mail" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <input type="text" placeholder="Subject" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <input type="text" placeholder="Contact" />
                  </div>

                  <div className="contactMessage">
                    <input type="text" placeholder="Message" />
                  </div>
                </div>
                <div className="exploreMoreBtn">
                  <button className="submitBtn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-12 contactImage">
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722585802/contactUS_qb9iia.png"
              alt=""
            />
          </div>
        </div>
      </div>
      </div>
  );
};

export default Contact;
