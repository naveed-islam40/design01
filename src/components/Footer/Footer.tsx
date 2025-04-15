"use client";
import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa6";
import { IoIosArrowUp, IoIosSend, IoMdArrowDropright } from "react-icons/io";

const leftLinks = ["Home", "About", "Services", "Our Cases", "Other Links"];
const rightLinks = [
  "Consuling",
  "Finance",
  "Testimonials",
  "FAQ",
  "Contact Us",
];
const openTimings = [
  { day: "Mon - Fri", time: "9:00 - 18:00" },
  { day: "Sat", time: "9:00 - 18:00" },
  { day: "Sun", time: "Closed" },
];

const handleMoveTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <div className="mx-auto w-full screen_4k:w-[70%]">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4  py-10 px-10 bg-[#176ABC] text-white ">
        {/* section 1  */}
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">About Us</h1>
          <span className="w-[20%] h-1 rounded-sm bg-white"></span>
          <p className="w-[80%]">
            Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod
            tempor incididunt ut labore dolore magna.
          </p>
          {/* socials  */}
          <div className="flex gap-5">
            <FaFacebookF className="bg-white h-8 w-8 p-2 rounded-full text-blue-600  hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out" />
            <FaGoogle className="bg-white h-8 w-8 p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out" />
            <FaTwitter className="bg-white h-8 w-8 p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out" />
            <FaPinterestP className="bg-white h-8 w-8 p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out" />
          </div>
        </div>
        {/* section 2  */}
        <div className=" flex flex-col gap-5 mr-16">
          <h1 className="text-2xl font-semibold">Quick Links</h1>
          <span className="w-[20%] h-1 rounded-sm bg-white"></span>
          <div className="flex gap-7 justify-center">
            <div>
              {leftLinks.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center cursor-pointer hover:translate-x-3 transition duration-500 ease-in-out"
                >
                  <IoMdArrowDropright />
                  <p className="w-[100px]">{item}</p>
                </div>
              ))}
            </div>
            <div>
              {rightLinks.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 cursor-pointer items-center hover:translate-x-3 transition duration-500 ease-in-out"
                >
                  <IoMdArrowDropright />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* section 3  */}
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">Open Hours</h1>
          <span className="w-[20%] h-1 rounded-sm bg-white"></span>
          <p className="w-[90%]">
            Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod
            tempor incididunt.
          </p>
          {openTimings.map((item, index) => (
            <div key={index} className="flex gap-3 justify-between w-[80%]">
              <p>{item.day}</p>
              <p>{item.time}</p>
            </div>
          ))}
        </div>
        {/* section 4  */}
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">Newsletter</h1>
          <span className="w-[20%] h-1 rounded-sm bg-white"></span>
          <p className="w-[80%]">
            subscribe to our newsletter to get allour news in your inbox.. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit,
          </p>
          <div className="flex items-center mt-5">
            <input
              type="email"
              placeholder="Email Address"
              className="py-2 px-3 rounded-l rounded-bl bg-blue-600 text-white placeholder:text-white border-white border outline-none"
            />

            <IoIosSend className="bg-white text-blue-600 h-[42px] w-[42px] p-2 rounded-r rounded-br" />
          </div>
        </div>
      </div>
      <div className="bg-blue-500 relative py-6 px-5 flex justify-center items-center max-sm:text-center max-sm:text-sm text-white font-semibold">
        <h1>
          © Copyright 2018 | All Rights Reserved by naveedislam20ni@gmail.com
        </h1>
        <div onClick={handleMoveTop}>
          <IoIosArrowUp className="fixed z-40 bottom-5 cursor-pointer right-5 bg-blue-400 rounded-md h-11 w-11 text-white-600 p-3" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
