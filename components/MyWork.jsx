/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const MyWork = () => {
  
  const projects = [
    {
      link: "https://viva-tech.vercel.app/",
      img: "./assets/vivaTech.png",
      alt: "vivaTech",
      webTitle: "Viva Tech Solution",
      Description: " Full Stack webSite for viva Tech",
      libraries: [
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Framer Motion",
        "SCSS",
        "Formik",
        "Yup",
        "React Card Flip",
        "React Toastify",
      ],
      subDec: ["Multiple Pages", "Animation"],
    },
    {
      link: "https://brain-wave-lime.vercel.app/",
      img: "./assets/brainWave.png",
      alt: "brainWave",
      webTitle: "Brain Wave",
      Description: "Single Page Animated web page",
      libraries: ["Next.js", "Tailwind CSS", "Animation", "SCSS"],
      subDec: ["Single Page animated Website"],
    },
    {
      link: "https://viva-tech.vercel.app/",
      img: "./assets/vivaTech.png",
      webTitle: "Viva Tech Solution",
      Description: " Full Stack webSite for viva Tech",
      libraries: [
        "Next.js",
        "Tailwind CSS",
        "SCSS",
        "Chakra UI",
        "Formik",
        "Yup",
        "AOS",
        "Framer Motion",
        "Multi Carousel",
        " React Flag",
        "Firebase",
      ],

      subDec: ["Multiple Pages", "Animation"],
    },
  ];

  return (
    <div id="MyWork" className=" space-y-10  flex flex-col justify-around ">
      <h1 className=" text-[30px] text-[#4db5ff] text-center">My Work</h1>
      <div className="xl:mx-[10rem] gap-x-5 lg:gap-y-0 gap-y-5 lg:mx-[6rem] mx-[1rem] grid md:grid-cols-2 lg:grid-cols-3">
        {projects.map((val, index) => {
          return (
            <div key={index}>
              <Link href={val.link} target="blank">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  src={val.img}
                  className=" rounded-lg"
                  alt={val.alt}
                />
              </Link>
              <h3 className="text-[30px] mt-7 text-[#4db5ff]">
                {val.webTitle}
              </h3>
              <p className=" text-gray-300 text-[18px]">{val.Description}</p>
              <div className=" grid grid-cols-2 lg:grid-cols-3 text-center">
                {val.libraries.map((library, index) => {
                  return (
                    <p
                      key={index}
                      className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300"
                    >
                      {library}
                    </p>
                  );
                })}
              </div>
              <ul className="list-disc px-4 mt-4 text-[18px]">
                {val.subDec.map((val2, index) => {
                  return <li key={index}>{val2}</li>;
                })}
              </ul>
              <div className=" flex ">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  href={val.link}
                  target="blank"
                  className=" border-[#2f82bd] hover:text-black hover:bg-white border text-[#4db5ff] text-[18px] px-8 mt-3 py-2 flex rounded-lg"
                >
                  Visit <FiExternalLink className="ms-3 mt-1 " />
                </motion.a>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" flex justify-center">
        <Link
          href="AllProject"
          className="bg-blue-400 hover:bg-red-600 mt-6 text-black hover:text-white  text-[20px] px-[6rem] lg:mt-3 py-4 flex rounded-lg"
        >
          All Project
        </Link>
      </div>
    </div>
  );
};

export default MyWork;
