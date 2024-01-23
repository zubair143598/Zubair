import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { BiBook } from "react-icons/bi";
import { AiFillContacts } from "react-icons/ai";
import Link from "next/link";

const Nav = () => {
  const [activeNav, setActiveNav]=useState("#");
  return (
    <div id="Nav" className="flex z-40 justify-center px-5 py-3 bg-opacity-50 rounded  space-x-4 bg-black fixed bottom-[3rem] lg:left-[42%] 4xl:left-[46%] md:left-[18rem] left-[18%] ">

      <Link
      onClick={()=>setActiveNav("#")} 
       className={ activeNav==="#"? "relative active nav-icon":"nav-icon"  } href="#">
        <AiFillHome className="mx-2" size={25} /><span className="absolute home top-[-40px] text-white" >Home</span>
      </Link>

      <Link  onClick={()=>setActiveNav("#Skills")} 
       className={ activeNav==="#Skills"? "relative active nav-icon":"nav-icon"  } href="#Skills">
        <GiSkills className="mx-2" size={25} /> <span className="absolute home top-[-40px] text-white" >Skills</span>
      </Link>

      <Link  onClick={()=>setActiveNav("#MyWork")} 
       className={ activeNav==="#MyWork"? "relative active nav-icon":"nav-icon"  } href="#MyWork">
        <BiBook className="mx-2" size={25} /><span className="absolute home top-[-40px] text-white" >MyWork</span>
      </Link>
      
      <Link href="#Contact" onClick={()=>setActiveNav("#Contact")} 
       className={ activeNav==="#Contact"? "relative active nav-icon":"nav-icon"  } >
        {" "}
        <AiFillContacts size={25} className="mx-2" /><span className="absolute home top-[-40px] text-white" >Contacts</span>
      </Link>
    </div>
  );
};

export default Nav;
