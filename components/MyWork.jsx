/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const MyWork = () => {
  return (
    <div id="MyWork" className="lg:h-screen flex flex-col justify-around ">
      <h1 className=" text-[30px] text-[#4db5ff] text-center">My Work</h1>
      <div className="xl:mx-[10rem] gap-x-5 lg:gap-y-0 gap-y-5 lg:mx-[6rem] mx-[1rem] grid md:grid-cols-2 lg:grid-cols-3">
        <div>
          <img
            src="./assets/palkadot.png"
            className=" rounded-lg"
            alt="palkadot"
          />
          <h3 className="text-[30px] mt-7 text-[#4db5ff]">Polkadot</h3>
          <p className=" text-gray-300 text-[18px]">Polkadot landing page</p>
          <div className="flex">
            <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
              React.js
            </p>
            <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
              React Bootstrap
            </p>
            <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
              SCSS
            </p>
          </div>
          <ul className="list-disc px-4 mt-4 text-[18px]">
            <li className="">Multiple Pages</li>
            <li>Animation</li>
          </ul>
          <div className="flex">
            <a
              href="https://polkadotzubair.netlify.app/"
              target="blank"
              className=" border-[#2f82bd] hover:text-black hover:bg-white border text-[#4db5ff] text-[18px] px-8 mt-3 py-2 flex rounded-lg"
            >
              Visit <FiExternalLink className="ms-3 mt-1 " />
            </a>
          </div>
        </div>
        <div>
          <img
            src="./assets/ShoppingCart.png"
            className=" rounded-lg"
            alt="ShoppingCart"
          />
          <h3 className="text-[30px] mt-7 text-[#4db5ff]">Shopping Cart</h3>
          <p className=" text-gray-300 text-[18px]">
            Product display add to cart functionality{" "}
          </p>
          <div className="flex">
            <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
              Next.js
            </p>
            <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
              Redux Toolkit
            </p>
            <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
              Tailwind CSS
            </p>
            <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
              SCSS
            </p>
          </div>
          <ul className="list-disc px-4 mt-4 text-[18px]">
            <li className="">Global state managment with redux toolkit</li>
            <li>Fetching data from an API</li>
            <li>Pagination</li>
            <li>Saving cart data in local storage</li>
          </ul>
          <div className="flex">
            <a
              href="https://task5-next-cart.vercel.app/"
              target="blank"
              className=" border-[#2f82bd] hover:text-black hover:bg-white border text-[#4db5ff] text-[18px] px-8 mt-3 py-2 flex rounded-lg"
            >
              Visit <FiExternalLink className="ms-3 mt-1 " />
            </a>
          </div>
        </div>
        <div>
          <img
            src="./assets/ZimoTeam.png"
            className=" rounded-lg"
            alt="ZimoTeam"
          />
          <h3 className="text-[30px] mt-7 text-[#4db5ff]">ZIMO Team</h3>
          <p className=" text-gray-300 text-[18px]">ZIMO team landing page</p>
          <div className="flex">
            <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
              Next.js
            </p>
            <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
              Tailwind CSS
            </p>
            <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
              SCSS
            </p>
          </div>
          <ul className="list-disc px-4 mt-4 text-[18px]">
            <li className="">Fetching data from an API</li>
            <li>Display Time and Flag of Current Country </li>
          </ul>
          <div className="flex">
            <a
              href="https://task3-zimo-team.vercel.app/"
              target="blank"
              className=" border-[#2f82bd] hover:text-black hover:bg-white border text-[#4db5ff] text-[18px] px-8 mt-3 py-2 flex rounded-lg"
            >
              Visit <FiExternalLink className="ms-3 mt-1 " />
            </a>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <Link
          href="AllProject"
          className="bg-blue-400 hover:bg-red-600 mt-6  text-[18px] px-14 lg:mt-3 py-3 flex rounded-lg"
        >
          All Project
        </Link>
      </div>
    </div>
  );
};

export default MyWork;
