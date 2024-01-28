import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="  py-[3rem] bg-black">
      <div className=" flex justify-around items-center ">
        <div>
          <h3 className=" text-[30px] text-[#4db5ff]">Muhammad Zubair</h3>
          <p className="text-[18px] mt-2 text-gray-400">
            Front-End React.js and Next.js Developer{" "}
          </p>
          <div className=" flex justify-between mt-4">
            <a
              target="blank"
              href="https://www.linkedin.com/in/muhammad-zubair-b089b6246/"
            >
              <AiFillLinkedin size={30} className="text-[#4db5ff] rounded" />
            </a>
            <a
              target="blank"
              href="https://github.com/zubair143598?tab=repositories"
            >
              <AiFillGithub size={30} className="text-[#4db5ff] rounded" />
            </a>
            <a target="_blank" href="https://wa.me/+923365353430">
              <FaWhatsapp size={30} className="text-[#4db5ff] rounded" />
            </a>
          </div>
          <p className=" mt-6">
            Copyright © 2023 All rights reserved designed and developed by{" "}
            <span className="text-[#4db5ff]">Zubair</span>
          </p>
        </div>
        <div>
          <a
            className="border border-[#4db5ff] text-[#4db5ff] rounded bg-transparent hover:bg-white hover:text-[black] mx-3 px-4 py-2 "
            href="/assets/Zubair_React_CV.pdf"
            download
          >
            Download CV
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
