/* eslint-disable @next/next/no-img-element */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useRef, useState } from "react";

const Skills = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div id="Skills" className=" my-[6rem]  text-center items-center">
      <div>
        <p className="text-[30px] tracking-[10px] uppercase text-[#4db5ff]">
          Skills
        </p>
      </div>
      <div className="mt-[6rem] flex justify-center ">
        <Slider className="xl:w-[50%] lg:w-[80%]  w-[90%]" {...settings} ref={sliderRef}>
          <div>
            {" "}
            <img
              className="lg:w-[140px] w-[80px]"
              src="./assets/html-5.png"
              alt=""
            />
          </div>
          <div>
            {" "}
            <img
              className="lg:w-[140px] w-[80px]"
              src="./assets/css3.png"
              alt=""
            />
          </div>
          <div>
            {" "}
            <img
              className="lg:w-[140px] w-[80px]"
              src="./assets/sass.png"
              alt=""
            />
          </div>
          <div>
            {" "}
            <img
              className="lg:w-[140px] w-[80px]"
              src="./assets/bootstrap.png"
              alt=""
            />
          </div>
          <div>
            {" "}
            <img
              className="lg:w-[140px] w-[80px]"
              src="./assets/tailwind_css.png"
              alt=""
            />
          </div>
          <div>
            {" "}
            <img
              className="lg:w-[140px] w-[80px]"
              src="./assets/material-ui.png"
              alt=""
            />
          </div>
          <div>
            {" "}
            <img
              className="lg:w-[140px] w-[80px]"
              src="./assets/javascript--v1.png"
              alt=""
            />
          </div>
          <div>
            {" "}
            <img
              className="lg:w-[140px] w-[80px]"
              src="./assets/react.png"
              alt=""
            />
          </div>
          <div>
            {" "}
            <img
              className="lg:w-[140px] w-[80px]"
              src="./assets/redux.png"
              alt=""
            />
          </div>
          <div>
            {" "}
            <img
              className="lg:w-[140px] w-[80px]"
              src="./assets/next-js-icon-logo.png"
              alt=""
            />
          </div>
          <div>
            {" "}
            <img
              className="lg:w-[140px] w-[80px]"
              src="./assets/firebase.png"
              alt=""
            />
          </div>
          <div>
            {" "}
            <img
              className="lg:w-[140px] w-[80px]"
              src="./assets/npm.png"
              alt=""
            />
          </div>
        </Slider>
      </div>
      <div className=" mt-[6rem] flex justify-center">
        <div className="xl:w-[50%] lg:w-[80%]  w-[90%] gap-y-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-[18px] text-start text-[#4db5ff]">
          <h4>HTML</h4>
          <h4>CSS</h4>
          <h4>JAVASCRIPT</h4>
          <h4>REACT.JS</h4>
          <h4>NEXT.JS</h4>
          <h4>TAILWIND CSS</h4>
          <h4>SCSS</h4>
          <h4>REDUX-TOOLKIT</h4>
          <h4>FIREBASE</h4>
          <h4>NPM</h4>
          <h4>GIT</h4>
          <h4>GITHUB</h4>
          <h4>VISUAL STUDIO CODE</h4>
          <h4>FIGMA</h4>
          <h4>BOOTSTRAP</h4>
          <h4>CHAKRA UI</h4>


        </div>
      </div>
    </div>
  );
};

export default Skills;
