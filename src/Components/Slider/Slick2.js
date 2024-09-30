import React from 'react'
import Slider from 'react-slick';

const Slick2 = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1200,
        autoplaySpeed: 1200,
        cssEase: "linear",
      };
    
  return (
    <div className='container-fluid'>
        <div className="slider-container slick2">
        <Slider {...settings}>
          <div>
            <img
                src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722331385/brand-img_gca7jz.png"
              
              alt=""
            />
          </div>
          <div>
            <img
                src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722331385/brand-img1_iy1l2l.png"
              alt=""
            />
          </div>
          <div>
            <img  
                src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722331385/brand-img2_wbgthx.png"             
              alt=""
            />
          </div>
          <div>
            <img
                src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722331387/brand-img3_cev55r.png"
              alt=""
            />
          </div>
          <div>
            <img
                src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722331387/brand-img4_wnqrwm.png"              
              alt=""
            />
           
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Slick2