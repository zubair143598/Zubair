import { useFormik, validateYupSchema } from "formik";
import React from "react";
import { db, app } from "./Firebase";
import { collection, addDoc } from "firebase/firestore";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { signUpSchema } from "./schema/FormValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const notify = () => toast("Message delivered successfully");
const initialValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,

      onSubmit: async (values, action) => {
        try {
          const docRef = await addDoc(collection(db, "contacts"), values);
          action.resetForm();
          notify();
        } catch (error) {
          notify.error("Error adding document: ",error);
        }
      },
    });

  return (
    <div id="Contact" className=" flex justify-center my-[6rem] ">
      <ToastContainer />
      <div className="lg:w-[30%]">
        <div>
          <h1 className=" text-[30px] text-center  text-[#4db5ff]">
            Contact Me
          </h1>
        </div>
        <div className=" flex justify-around mt-4">
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
          <Link target="_blank" href="https://wa.me/+923365353430">
            <FaWhatsapp size={25} className="text-[#4db5ff] rounded" />
          </Link>
        </div>
        <form onSubmit={handleSubmit} method=" Get" className=" ms-4 lg:ms-0" action="">
          <input
            autoComplete="off"
            type="name"
            name="name"
            id="name"
            className="bg-transparent border rounded-lg border-[#4db5ff] w-[90%] ps-3 placeholder:text-gray-400 py-2 mt-4 placeholder:tracking-[3px]"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p className=" text-red-500">{errors.name}</p>
          ) : null}
          <input
            autoComplete="off"
            type="email"
            name="email"
            id="email"
            className=" bg-transparent border rounded-lg border-[#4db5ff] w-[90%] ps-3 placeholder:text-gray-400 py-2 mt-4 placeholder:tracking-[3px]"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className=" text-red-500">{errors.email}</p>
          ) : null}
          <textarea
            autoComplete="off"
            type="message"
            name="message"
            id="message"
            className=" bg-transparent border rounded-lg border-[#4db5ff] w-[90%] ps-3 placeholder:text-gray-400 py-2 mt-4 placeholder:tracking-[3px]"
            placeholder="Message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && touched.message ? (
            <p className=" text-red-500">{errors.message}</p>
          ) : null}
          <br />
          <button
            className=" w-[90%] bg-blue-500 hover:bg-red-600 hover:text-black py-3 text-[18px] mt-4 rounded"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
