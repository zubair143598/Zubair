/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { IoReturnUpBack } from "react-icons/io5";

const AllProject = () => {
  return (
    <>
      <div className=" mt-[6rem] ms-[17%]">
        <Link className="" href="/">
          <button className="flex border text-[#4db5ff] hover:bg-white hover:text-black  border-[#4db5ff] pe-6 ps-4 py-2 rounded gap-x-2 text-[18px]">
            {" "}
            <IoReturnUpBack size={25} /> Back
          </button>
        </Link>
      </div>
      <div className=" mb-[6rem] mt-6 flex items-center flex-col ">
        <div>
          <h1 className=" text-[40px] text-[#4db5ff] ">My Work</h1>
        </div>
        <div className=" gap-y-10  mt-6 grid grid-cols-1 items-center px-2 md:grid-cols-2 gap-x-5">
          {/* project 1 start */}
          <div>
            <img
              src="./assets/palkadot.png"
              className=" lg:w-[500px] w-[250px] rounded-lg"
              alt="palkadot"
            />
          </div>
          <div className=" flex flex-col justify-around">
            <h3 className="text-[30px] text-[#4db5ff]">Polkadot</h3>
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
              <Link
                href="https://polkadotzubair.netlify.app/"
                target="blank"
                className=" border-[#2f82bd] hover:text-black hover:bg-white border text-[#4db5ff] text-[18px] px-8 mt-3 py-2 flex rounded-lg"
              >
                Visit <FiExternalLink className="ms-3 mt-1 " />
              </Link>
            </div>
          </div>
          {/* project 1 end */}

          {/* project 2 start */}
          <div className="block md:hidden">
            <img
              src="./assets/ShoppingCart.png"
              className="   lg:w-[500px] w-[250px] rounded-lg"
              alt="ShoppingCart"
            />
          </div>
          <div className=" flex flex-col justify-around">
            <h3 className="text-[30px] text-[#4db5ff]">Shopping Cart</h3>
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
              <Link
                href="https://task5-next-cart.vercel.app/"
                target="blank"
                className=" border-[#2f82bd] hover:text-black hover:bg-white border text-[#4db5ff] text-[18px] px-8 mt-3 py-2 flex rounded-lg"
              >
                Visit <FiExternalLink className="ms-3 mt-1 " />
              </Link>
            </div>
          </div>
          <div className="md:block hidden">
            <img
              src="./assets/ShoppingCart.png"
              className="   lg:w-[500px]  w-[250px] rounded-lg"
              alt="ShoppingCart"
            />
          </div>
          {/* project 2 end */}

          {/* project 3 start */}
          <div>
            <img
              src="./assets/ZimoTeam.png"
              className="  lg:lg:w-[500px] w-[250px] lg:float-right rounded-lg"
              alt="ZimoTeam"
            />
          </div>
          <div className=" flex flex-col justify-around">
            <h3 className="text-[30px] text-[#4db5ff]">ZIMO Team</h3>
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
              <Link
                href="https://task3-zimo-team.vercel.app/"
                target="blank"
                className=" border-[#2f82bd] hover:text-black hover:bg-white border text-[#4db5ff] text-[18px] px-8 mt-3 py-2 flex rounded-lg"
              >
                Visit <FiExternalLink className="ms-3 mt-1 " />
              </Link>
            </div>
          </div>
          {/* project 3 end */}

          {/* project 4 start */}
          <div className="block md:hidden">
            <img
              src="./assets/crypto_Yield.png"
              className="   lg:w-[500px] w-[250px] rounded-lg"
              alt="crypto_Yield"
            />
          </div>

          <div className=" flex flex-col justify-around">
            <h3 className="text-[30px] text-[#4db5ff]">Crypto Yield</h3>
            <p className=" text-gray-300 text-[18px]">
              Crypto Yield landing page
            </p>
            <div className="flex">
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                React.js
              </p>
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                Firebase
              </p>
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                Bootstrap
              </p>
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                SCSS
              </p>
            </div>
            <ul className="list-disc px-4 mt-4 text-[18px]">
              <li className="">Firebase Database</li>
              <li>Contact Form</li>
              <li>Login Verification with firebase</li>
              <li>SignUp authentication with firebase</li>
            </ul>
            <div className="flex">
              <Link
                href="https://crypto-yield-zubair.netlify.app/signup"
                target="blank"
                className=" border-[#2f82bd] hover:text-black hover:bg-white border text-[#4db5ff] text-[18px] px-8 mt-3 py-2 flex rounded-lg"
              >
                Visit <FiExternalLink className="ms-3 mt-1 " />
              </Link>
            </div>
          </div>
          <div className="md:block hidden">
            <img
              src="./assets/crypto_Yield.png"
              className="   lg:w-[500px]  w-[250px] rounded-lg"
              alt="crypto_Yield"
            />
          </div>
          {/* project 4 end */}

          {/* project 5 start */}
          <div>
            <img
              src="./assets/FlipFlop.png"
              className="  lg:lg:w-[500px] w-[250px] lg:float-right rounded-lg"
              alt="FlipFlop"
            />
          </div>
          <div className=" flex flex-col justify-around">
            <h3 className="text-[30px] text-[#4db5ff]">Flip or Flop </h3>
            <p className=" text-gray-300 text-[18px]">Flip or Flop Game</p>
            <div className="flex">
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                React.js
              </p>
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                Bootstrap
              </p>
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                SCSS
              </p>
            </div>
            <ul className="list-disc px-4 mt-4 text-[18px]">
              <li className="">Flip count</li>
              <li>Restart Game</li>
            </ul>
            <div className="flex">
              <Link
                href="https://classy-kulfi-f43625.netlify.app/"
                target="blank"
                className=" border-[#2f82bd] hover:text-black hover:bg-white border text-[#4db5ff] text-[18px] px-8 mt-3 py-2 flex rounded-lg"
              >
                Visit <FiExternalLink className="ms-3 mt-1 " />
              </Link>
            </div>
          </div>
          {/* project 5 end */}

          {/* project 6 start */}
          <div className="block md:hidden">
            <img
              src="./assets/ZimoGroup.png"
              className="   lg:w-[500px] w-[250px] rounded-lg"
              alt="ZimoGroup"
            />
          </div>

          <div className=" flex flex-col justify-around">
            <h3 className="text-[30px] text-[#4db5ff]">Zimo Group</h3>
            <p className=" text-gray-300 text-[18px]">
              ZIMO group landing page
            </p>
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
              <li>Fetching data from an API</li>
              <li>Display Time and Flag of Current Country</li>
              <li>Animation</li>
              <li>Framer Motion</li>
            </ul>
            <div className="flex">
              <Link
                href="https://task5-next-cart.vercel.app/"
                target="blank"
                className=" border-[#2f82bd] hover:text-black hover:bg-white border text-[#4db5ff] text-[18px] px-8 mt-3 py-2 flex rounded-lg"
              >
                Visit <FiExternalLink className="ms-3 mt-1 " />
              </Link>
            </div>
          </div>
          <div className="md:block hidden">
            <img
              src="./assets/ZimoGroup.png"
              className="   lg:w-[500px]  w-[250px] rounded-lg"
              alt="ZimoGroup"
            />
          </div>
          {/* project 6 end */}

          {/* project 7 start */}
          <div>
            <img
              src="./assets/TodoList.png"
              className="  lg:lg:w-[500px] w-[250px] lg:float-right rounded-lg"
              alt="TodoList"
            />
          </div>
          <div className=" flex flex-col justify-around">
            <h3 className="text-[30px] text-[#4db5ff]">ToDos</h3>
            <p className=" text-gray-300 text-[18px]">To do list</p>
            <div className="flex">
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                Next.js
              </p>
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                Tailwind CSS
              </p>
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                Redux Toolkit
              </p>
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                SCSS
              </p>
            </div>
            <ul className="list-disc px-4 mt-4 text-[18px]">
              <li className="">Display All ToDo list data</li>
              <li>Store the list in Redux store</li>
              <li>Separate Completed from Incomplete</li>
              <li>Drag and Drop the list using react beautiful dnd library </li>
            </ul>
            <div className="flex">
              <Link
                href="https://zimo-todo.vercel.app/"
                target="blank"
                className=" border-[#2f82bd] hover:text-black hover:bg-white border text-[#4db5ff] text-[18px] px-8 mt-3 py-2 flex rounded-lg"
              >
                Visit <FiExternalLink className="ms-3 mt-1 " />
              </Link>
            </div>
          </div>
          {/* project 7 end */}



       

          {/* project 8 start */}
          <div className="block md:hidden">
            <img
              src="./assets/safuu.png"
              className="   lg:w-[500px] w-[250px] rounded-lg"
              alt="safuu"
            />
          </div>
          <div className=" flex flex-col justify-around">
            <h3 className="text-[30px] text-[#4db5ff]">Safuu</h3>
            <p className=" text-gray-300 text-[18px]">
              A simple Dashboard
            </p>
            <div className="flex">
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                React.js
              </p>
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                Bootstrap
              </p>
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                SCSS
              </p>
            </div>
            <ul className="list-disc px-4 mt-4 text-[18px]">
              <li className="">Multiple pages</li>
            </ul>
            <div className="flex">
              <Link
                href="https://safuu-zubair.netlify.app/"
                target="blank"
                className=" border-[#2f82bd] hover:text-black hover:bg-white border text-[#4db5ff] text-[18px] px-8 mt-3 py-2 flex rounded-lg"
              >
                Visit <FiExternalLink className="ms-3 mt-1 " />
              </Link>
            </div>
          </div>
          <div className="md:block hidden">
            <img
              src="./assets/safuu.png"
              className="   lg:w-[500px]  w-[250px] rounded-lg"
              alt="ShoppingCart"
            />
          </div>
          {/* project 8 end */}


          {/* project 9 start */}
          <div>
            <img
              src="./assets/Povo_gaming.png"
              className="  lg:lg:w-[500px] w-[250px] lg:float-right rounded-lg"
              alt="Povo_gaming"
            />
          </div>
          <div className=" flex flex-col justify-around">
            <h3 className="text-[30px] text-[#4db5ff]">Povo Gaming</h3>
            <p className=" text-gray-300 text-[18px]">Povo Gaming landing page</p>
            <div className="flex">
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                React.js
              </p>
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                Bootstrap
              </p>
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                SCSS
              </p>
            </div>
            <ul className="list-disc px-4 mt-4 text-[18px]">
              <li className="">Animation</li>
            </ul>
            <div className="flex">
              <Link
                href="https://task3-zimo-team.vercel.app/"
                target="blank"
                className=" border-[#2f82bd] hover:text-black hover:bg-white border text-[#4db5ff] text-[18px] px-8 mt-3 py-2 flex rounded-lg"
              >
                Visit <FiExternalLink className="ms-3 mt-1 " />
              </Link>
            </div>
          </div>
          {/* project 9 end */}

          {/* project 10 start */}
          <div className="block md:hidden">
            <img
              src="./assets/HaloweenFolki.png"
              className="   lg:w-[500px] w-[250px] rounded-lg"
              alt="HaloweenFolki"
            />
          </div>

          <div className=" flex flex-col justify-around">
            <h3 className="text-[30px] text-[#4db5ff]">Haloween Folki</h3>
            <p className=" text-gray-300 text-[18px]">
            Haloween Folki landing page
            </p>
            <div className="flex">
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                React.js
              </p>
              
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                Bootstrap
              </p>
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                SCSS
              </p>
            </div>
            <ul className="list-disc px-4 mt-4 text-[18px]">
              <li className="">Animation</li>
            </ul>
            <div className="flex">
              <Link
                href="https://illustrious-kitten-ad71d8.netlify.app/"
                target="blank"
                className=" border-[#2f82bd] hover:text-black hover:bg-white border text-[#4db5ff] text-[18px] px-8 mt-3 py-2 flex rounded-lg"
              >
                Visit <FiExternalLink className="ms-3 mt-1 " />
              </Link>
            </div>
          </div>
          <div className="md:block hidden">
            <img
              src="./assets/HaloweenFolki.png"
              className="   lg:w-[500px]  w-[250px] rounded-lg"
              alt="HaloweenFolki"
            />
          </div>
          {/* project 10 end */}

          {/* project 11 start */}
          <div>
            <img
              src="./assets/Quant.png"
              className="  lg:lg:w-[500px] w-[250px] lg:float-right rounded-lg"
              alt="Quant"
            />
          </div>
          <div className=" flex flex-col justify-around">
            <h3 className="text-[30px] text-[#4db5ff]">Quant </h3>
            <p className=" text-gray-300 text-[18px]">Quant landing page</p>
            <div className="flex">
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                React.js
              </p>
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                Bootstrap
              </p>
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                SCSS
              </p>
            </div>
            <ul className="list-disc px-4 mt-4 text-[18px]">
              <li className="">Animation</li>
              <li>Animation</li>
            </ul>
            <div className="flex">
              <Link
                href="https://spontaneous-sfogliatella-534df0.netlify.app/"
                target="blank"
                className=" border-[#2f82bd] hover:text-black hover:bg-white border text-[#4db5ff] text-[18px] px-8 mt-3 py-2 flex rounded-lg"
              >
                Visit <FiExternalLink className="ms-3 mt-1 " />
              </Link>
            </div>
          </div>
          {/* project 11 end */}

          {/* project 12 start */}
          <div className="block md:hidden">
            <img
              src="./assets/PorkSwap.png"
              className="   lg:w-[500px] w-[250px] rounded-lg"
              alt="PorkSwap"
            />
          </div>

          <div className=" flex flex-col justify-around">
            <h3 className="text-[30px] text-[#4db5ff]">Porkswap Finance</h3>
            <p className=" text-gray-300 text-[18px]">
            Porkswap Finance landing page
            </p>
            <div className="flex">
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                React.js
              </p>

              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                Bootstrap
              </p>
              <p className="bg-[#2f82bd] px-2 py-1 me-1 rounded-lg mt-2 text-gray-300">
                SCSS
              </p>
            </div>
            <ul className="list-disc px-4 mt-4 text-[18px]">
              <li>Animation</li>
              <li>react tsparticles</li>
              
            </ul>
            <div className="flex">
              <Link
                href="https://sweet-mousse-d5fc59.netlify.app/"
                target="blank"
                className=" border-[#2f82bd] hover:text-black hover:bg-white border text-[#4db5ff] text-[18px] px-8 mt-3 py-2 flex rounded-lg"
              >
                Visit <FiExternalLink className="ms-3 mt-1 " />
              </Link>
            </div>
          </div>
          <div className="md:block hidden">
            <img
              src="./assets/PorkSwap.png"
              className="   lg:w-[500px]  w-[250px] rounded-lg"
              alt="PorkSwap"
            />
          </div>
          {/* project 12 end */}

          {/* project 13 start */}
          <div>
            <img
              src="./assets/MultiStepForm.png"
              className="  lg:lg:w-[500px] w-[250px] lg:float-right rounded-lg"
              alt="MultiStepForm"
            />
          </div>
          <div className=" flex flex-col justify-around">
            <h3 className="text-[30px] text-[#4db5ff]">Multi Step Form</h3>
            <p className=" text-gray-300 text-[18px]">Multiple Step Form for Job apply</p>
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
              <li>Changing of form without navigation</li>
              
            </ul>
            <div className="flex">
              <Link
                href="https://multi-step-form-jet.vercel.app/"
                target="blank"
                className=" border-[#2f82bd] hover:text-black hover:bg-white border text-[#4db5ff] text-[18px] px-8 mt-3 py-2 flex rounded-lg"
              >
                Visit <FiExternalLink className="ms-3 mt-1 " />
              </Link>
            </div>
          </div>
          {/* project 7 end */}



        </div>
      </div>
    </>
  );
};

export default AllProject;
