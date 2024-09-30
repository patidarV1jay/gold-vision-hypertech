import React from "react";
import { FaStar } from "react-icons/fa6";
import Slider from "react-slick";

const Slick3 = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1800,
    autoplaySpeed: 1800,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="container-fluid slide">
      <div className="slider-container ">
        <Slider {...settings}>
          <div className="slickHead">
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722403279/testi1_nglbnh.png"
              alt=""
            />
            <p>
              Working with Gold Vision for our web development and digital marketing needs was a game-changer. Their responsive design and SEO expertise helped us reach a wider audience and increase our online visibility by 40%. They truly understand the modern business landscape and offer exceptional service
            </p>
            <hr />
            <div className="slickbody">
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />

              <p> Michael M.
              </p>
              <span>  Founder of EcoTech </span>
            </div>
          </div>
          <div className="slickHead">
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722403279/testi1_nglbnh.png"
              alt=""
            />
            <p>
            We needed a robust IT infrastructure, and Gold Vision delivered beyond our expectations. Their cloud solutions have transformed the way we store and manage data, providing us with scalability and security. Plus, their marketing strategies brought us new leads and a noticeable jump in conversions
            </p>
            <hr />
            <div className="slickbody">
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />

              <p>Jessica L.
                 </p>
                 <span>Marketing Director at UrbanCore
                 </span>
            </div>
          </div>
          <div className="slickHead">
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722403279/testi1_nglbnh.png"
              alt=""
            />
            <p>
            Gold Vision has been an incredible partner in developing custom software for our business. Their team is not only highly skilled but also committed to understanding our specific needs. Thanks to their innovative solutions, we've streamlined our operations and seen a significant boost in productivity. I highly recommend them for any IT project!
            </p>
            <hr />
            <div className="slickbody">
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />

              <p>Sarah M.</p>
              <span>CEO at Bright Solutions</span>
             
            </div>
            </div>
            <div className="slickHead">
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722403279/testi1_nglbnh.png"
              alt=""
            />
            <p>
            Gold Vision took our fintech app idea and brought it to life with unmatched expertise. Their attention to detail and technical knowledge ensured a seamless user experience. On top of that, their digital marketing campaign helped us increase user engagement by 50% within the first few months!
            </p>
            <hr />
            <div className="slickbody">
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />

              <p>Rajesh K.</p>
                 <span> COO of FinBridge Solutions
                 </span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Slick3;
