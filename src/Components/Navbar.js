import React, { useState } from "react";
import "../Css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar]=useState(false)

  const showSidebar = () => {
      setSidebar(!sidebar)
  }
  const hideSidebar = () => {
  setSidebar(!sidebar)

  }
  return (
    <div>
      <div className="navbar">
        <img
          className="logoImage"
          src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1727262458/WhatsApp_Image_2024-09-25_at_16.34.25_a870efb2_yzhj1c.jpg"
          alt="logo"
        />
        <nav className="nav-head">
          <ul>
            <li className="hideOnMobile">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="hideOnMobile">
              <Link className="link" to="/about">
                About Us
              </Link>
            </li>
            <li className="hideOnMobile">
              <Link className="link" to="/project">
                Projects
              </Link>
            </li>
            <li className="hideOnMobile">
              <Link className="link" to="/services">
                Services
              </Link>
            </li>
            <li className="hideOnMobile">
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
          
              <li className="menu" onClick={showSidebar}>
                <Link className="link" to="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="26px"
                    viewBox="0 -960 960 960"
                    width="26px"
                    fill="#ffffff"
                  >
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                  </svg>
                </Link>
              </li>
          </ul>
        </nav>   
        </div>
        <div>  
        <nav className="nav-head" style={{display: `${sidebar ? 'block': 'none'}`}}>
          <ul className="sidebar"> 
            <li className="imageLink" onClick={hideSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="#ffff"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </li>

            <li>
              <Link className="link" to="/">Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="link" to="/project">
                Projects
              </Link>
            </li>
            <li>
              <Link className="link" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
            <li></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
