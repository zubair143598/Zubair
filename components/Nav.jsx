import React from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { AiFillContacts } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="flex justify-center px-5 py-3 bg-opacity-60 rounded  space-x-4 bg-black fixed bottom-[3rem] lg:left-[42%] 4xl:left-[46%] left-[18%] ">
      <a className="active" href="#">
        <AiFillHome className="mx-2" size={25} />
      </a>

      <a href="">
        <AiOutlineUser className="mx-2" size={25} />
      </a>

      <a href="">
        <BiBook className="mx-2" size={25} />
      </a>

      <a href="">
        {" "}
        <AiFillContacts size={25} className="mx-2" />
      </a>
    </div>
  );
};

export default Nav;
