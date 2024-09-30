import React from "react";
import "../Css/Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="footerAddress">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 address">
              <div className="address1Icon">
                <img
                  src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722600015/address1_jo6qn1.png"
                  alt="address1"
                />
              </div>
              <div className="address1">
                <h2>Elevating Customer Experience.</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12  address">
              <div className="address2Icon">
                <img
                  src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722600015/address2_qzqesp.png"
                  alt="address2"
                />
              </div>
              <div className="address2">
                <h4>+91 9266539585</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row footerBody">
            <div className="col-lg-3 col-md-3 col-sm- col-12  footerLeftSide">
              <div>
                <img className="footerLogo"
                  src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1727262458/WhatsApp_Image_2024-09-25_at_16.34.25_a870efb2_yzhj1c.jpg"
                  alt="logo"
                  />
              </div>
                  <div>
                    <p>
                      GOLDVISON HYPERTECH SOLUTION PVT LTD D-9,SECTOR- 3,NOIDA,
                      NOIDA, UP,  9266539585
                    </p>
                  </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm- col-12 footerMiddleSide ">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Link className="link" to="/about">
                    About Us
                  </Link>
                </li>
                
                <li>
                  <Link className="link" to="/blogs">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/project">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm- col-12 footerMiddle2Side">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link className="link" to="/about">
                    About Company
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/pricing">
                    Pricing
                  </Link>
                
                </li>
                <li>
                  <Link className="link" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/services">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm- col-12 footerRightSide">
              <div>
                <h4>Stay Updated </h4>
              </div>
              <div>
                <p>
                Subscribe to our newsletter and be the first to know about the latest tech trends, innovative solutions, and exclusive insights that can help take your business to the next level.
                </p>
              </div>
            </div>
          </div>
          <hr />

          <div className="copyright">
            <div>&copy; Copyright 2024 By GOLDVISON HYPERTECH SOLUTION PVT LTD</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
