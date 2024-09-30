import React from "react";
import "../../Css/Blog.css";
import { FaCommentDots } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="container-fluid Blogs">
      <div className="container">
        <div className="row ">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="GoldVision recentUpdates">
              <h6>OUR LATEST BLOG</h6>
            </div>
            <div className="blogHeading">
              <h1>
                Exploring Its Potential in Various
                <span> Industries.</span>
              </h1>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="viewBlogs">
              <button className="viewBlogsBtn">BLOGS</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-5">
            <div className="blogLeftSide">
              <img
                src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722422694/blog1_dj0wwl.png"
                alt="blog1"
              />
            </div>
            <div className="blogSection">
              <div className="blogComments">
                <div className="date">
                  <FaCalendar className="calendar" />
                  <p>28 July, 2024</p>
                </div>
                <div className="">
                  <hr />
                </div>
                <div className="comments">
                  <FaCommentDots className="commentIcon" />
                  <p>Comments</p>
                </div>
              </div>
              <div className="blogsBody">
                <h4>How to Create Modern Web Site For Your Business?</h4>
                <p>
                  Laravel is an open-source PHP framework, which is robust and
                  easy to understand....
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div>
              <div className="blogRightSideTop">
                <div className="blogImage">
                  <img
                    src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722422695/blog2_wsswbg.png"
                    alt="blog2"
                  />
                </div>
                <div className="blogData">
                  <div className="blogDate">
                    <div className="date">
                      <FaCalendar className="calendar" />
                      <p>20 Jan,24</p>
                    </div>
                    <div className="">
                      <hr />
                    </div>
                    <div className="comments">
                      <FaCommentDots className="commentIcon" />
                      <p>Comments</p>
                    </div>
                  </div>
                  <div className="blogBody">
                    <h4>How to Create Modern Web Site For Your Business..</h4>
                    <p>
                      Key factors in establishing credibility, engaging
                      customers, and driving growth......
                    </p>
                  </div>
                </div>
              </div>
              <div className="blogRightSideBottom">
                <div className="blogImage">
                  <img
                    src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722422695/blog3_l8inhv.png"
                    alt="blog3"
                  />
                </div>
                <div className="blogData">
                  <div className="blogDate">
                    <div className="date">
                      <FaCalendar className="calendar" /> <p>18 June,23</p>
                    </div>
                    <div className="">
                      <hr />
                    </div>
                    <div className="comments">
                      <FaCommentDots className="commentIcon" />
                      <p> Comments </p>
                    </div>
                  </div>
                  <div className="blogBody">
                    <h4>Google releases Flutter for Windows..</h4>
                    <p>
                      Thrilled to see Flutter developers bringing their
                      experiences to Windows and also publishing to the
                      Microsoft Store....
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
