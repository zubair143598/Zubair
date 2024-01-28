/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className=" text-center mt-[30px] xl:px-[12rem] lg:px-[8rem] sm:px-5">
        <h5 className=""> Hello I&#x27;m</h5>
        <h1 className="text-[30px] text-[#4db5ff]">Muhammad Zubair</h1>
        <h5>Frontend Developer</h5>
        <div className="mt-4">
          <a
            className="border border-[#4db5ff] text-[#4db5ff] rounded bg-transparent hover:bg-white hover:text-[black] mx-3 px-4 py-2 "
            href="/assets/Zubair_React_CV.pdf"
            download
          >
            Download CV
          </a>
          <a
            className=" rounded bg-blue-400 hover:bg-red-600  mx-3 px-9 py-[9px] "
            href="https://wa.me/+923365353430" target="blank"
            download
          >
            Let&#x27;s Talk
          </a>
        </div>
        <div className="grid grid-cols-1 items-center lg:grid-cols-3 ">
          <div className="flex lg:flex-col mt-5 lg:justify-start justify-center gap-[1rem]">
            <a
              target="blank"
              href="https://www.linkedin.com/in/muhammad-zubair-b089b6246/"
            >
              <AiFillLinkedin size={25} className="text-[#4db5ff] rounded" />
            </a>
            <a
              target="blank"
              href="https://github.com/zubair143598?tab=repositories"
            >
              <AiFillGithub size={25} className="text-[#4db5ff] rounded" />
            </a>
            <a target="_blank" href="https://wa.me/+923365353430">
              <FaWhatsapp size={25} className="text-[#4db5ff] rounded" />
            </a>
            {/* <a href=""><AiFillLinkedin size={25} className="text-[#4db5ff] rounded" /></a> */}
            <p className="lg:h-[3rem] lg:w-[1px] h-[1px] w-[3rem] mt-3 bg-[#4db5ff] lg:ms-3"></p>
          </div>
          <div className=" flex justify-center  ">
            <img
              className="lg:w-[22rem] w-[18rem]  bg-[#4db5ff] mt-5  rounded-t-[12rem] "
              src="/assets/Me.png"
              alt=""
            />
          </div>
          <div className="flex justify-center flex-col ">
            <div className="flex xl:flex-row items-center flex-col 2xl:mt-0 mt-4 ">
              <div className="flex flex-col mx-4 xl:mt-0 mt-4 justify-center w-[220px] h-[150px] rounded-[10px] items-center bg-[#2A2A67] ">
                <FaAward className="text-[#4db5ff]" size={25} />
                <p className="text-[20px]">Experience</p>
                <p className="text-silver text-[12px]">1 Year Working</p>
              </div>
              <div className="flex flex-col justify-center xl:mt-0 mt-4  mx-4 w-[220px] h-[150px] rounded-[10px] items-center bg-[#2A2A67]  ">
                <AiFillProject className="text-[#4db5ff]" size={25} />
                <p className="text-[20px]">Projects</p>
                <p className="text-silver text-[12px]">15+ completed</p>
              </div>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              necessitatibus, quos repellat praesentium facere iure beatae autem
              illum? Expedita dolorem rem dolore quibusdam quis id fugiat
              delectus suscipit deserunt rerum.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
