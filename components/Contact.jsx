import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="Contact" className=" flex justify-center my-[6rem] ">
      <div className="lg:w-[30%]">
        <div>
          <h1 className=" text-[30px] text-center  text-[#4db5ff]">
            Contact Me
          </h1>
        </div>
        <div className=" flex justify-around mt-4">
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
        </div>
        <form className=" ms-4 lg:ms-0" action="">
          <input type="Name" name="Name" id="Name" className=" bg-transparent border rounded-lg border-[#4db5ff] w-[90%] ps-3 placeholder:text-gray-400 py-2 mt-4 placeholder:tracking-[3px]" placeholder="Name" />
          <input type="email" name="email" id="email" className=" bg-transparent border rounded-lg border-[#4db5ff] w-[90%] ps-3 placeholder:text-gray-400 py-2 mt-4 placeholder:tracking-[3px]" placeholder="Email" />
          <textarea type="Name" name="Name" id="Name" className=" bg-transparent border rounded-lg border-[#4db5ff] w-[90%] ps-3 placeholder:text-gray-400 py-2 mt-4 placeholder:tracking-[3px]" placeholder="Message" />
          <br />
          <button className=" w-[90%] bg-blue-500 py-3 text-[18px] mt-4 rounded" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
