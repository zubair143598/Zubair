/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Header() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <header>
      <div className=" text-center mt-[30px] xl:px-[12rem] lg:px-[8rem] sm:px-5">
        <h5 className=""> Hello I&#x27;m</h5>
        <div className="text-[30px] flex justify-center space-x-4 text-[#4db5ff]">
          {" "}
          <motion.h1
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{ x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
          >
            Muhammad
          </motion.h1>
          <motion.h1
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{ x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          >
            Zubair
          </motion.h1>{" "}
        </div>
        <motion.h5
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{ x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 1,
          }}
        >
          Frontend Developer
        </motion.h5>
        <div className="mt-4">
          <Link
            className="border border-[#4db5ff] text-[#4db5ff] rounded bg-transparent hover:bg-white hover:text-[black] mx-3 px-4 py-2 "
            href="/assets/Zubair_React_Resume.pdf"
            download
          >
            Download CV
          </Link>
          <Link
            className=" rounded bg-blue-400 hover:bg-red-600  mx-3 px-9 py-[9px] "
            href="https://wa.me/+923365353430"
            target="blank"
            download
          >
            Let&#x27;s Talk
          </Link>
        </div>
        <div className="grid grid-cols-1 items-center lg:grid-cols-3 ">
          <div className="flex lg:flex-col mt-5 lg:justify-start justify-center gap-[1rem]">
            <Link
              target="blank"
              href="https://www.linkedin.com/in/muhammad-zubair-b089b6246/"
            >
              <AiFillLinkedin size={25} className="text-[#4db5ff] rounded" />
            </Link>
            <Link
              target="blank"
              href="https://github.com/zubair143598?tab=repositories"
            >
              <AiFillGithub size={25} className="text-[#4db5ff] rounded" />
            </Link>
            <a target="_blank" href="https://wa.me/+923365353430">
              <FaWhatsapp size={25} className="text-[#4db5ff] rounded" />
            </a>
            {/* <a href=""><AiFillLinkedin size={25} className="text-[#4db5ff] rounded" /></a> */}
            <p className="lg:h-[3rem] lg:w-[1px] h-[1px] w-[3rem] mt-3 bg-[#4db5ff] lg:ms-3"></p>
          </div>
          <div className=" flex justify-center    ">
            <motion.img
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="lg:w-[22rem] hover:shadow-2xl  hover:shadow-blue-500/50 w-[18rem] cursor-pointer  bg-[#4db5ff] mt-5  rounded-t-[12rem] "
              src="/assets/Me.png"
              alt=""
            />
          </div>
          <div className="flex justify-center space-y-4 flex-col ">
            <div className="flex xl:flex-row items-center flex-col 2xl:mt-0 mt-4 ">
              <motion.div
                ref={ref}
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                animate={
                  isInView
                    ? { x: 0, y: 0, scale: 1, rotate: 1080, opacity: 1 }
                    : {}
                }
                transition={{
                  duration: 2,
                }}
                className="flex flex-col shadow-2xl  shadow-blue-500/50 mx-4 xl:mt-0 mt-4 justify-center w-[220px] h-[150px] rounded-[10px] items-center bg-[#2A2A67] "
              >
                <FaAward className="text-[#4db5ff]" size={25} />
                <p className="text-[20px]">Experience</p>
                <p className="text-silver text-[12px]">1 Year Working</p>
              </motion.div>
              <motion.div
                ref={ref}
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                animate={
                  isInView
                    ? { x: 0, y: 0, scale: 1, rotate: 1080, opacity: 1 }
                    : {}
                }
                transition={{
                  duration: 2,
                }}
                className="flex flex-col shadow-2xl  shadow-blue-500/50 justify-center xl:mt-0 mt-4  mx-4 w-[220px] h-[150px] rounded-[10px] items-center bg-[#2A2A67]  "
              >
                <AiFillProject className="text-[#4db5ff]" size={25} />
                <p className="text-[20px]">Projects</p>
                <p className="text-silver text-[12px]">15+ completed</p>
              </motion.div>
            </div>
            <div>
              <p>
                Frontend developer with over a year of dedicated experience
                proficient in React.js and Next.js, with a keen eye for crafting
                dynamic and user-focused web applications. Skilled in
                JavaScript, Tailwind CSS, Bootstrap, and Redux, I excel at
                optimizing performance and ensuring seamless user experiences.
                Passionate about staying ahead of industry trends, I am
                dedicated to delivering captivating digital solutions that
                exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
