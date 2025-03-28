import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { RiEmotionHappyLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";

const Statas = () => {
  return (
    <div className="h-[400px] relative">
      {/* Background Image */}
      <img
        src={"/assets/png/blockqoute-bg.jpg"}
        alt=""
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-[400px] bg-blue-700 opacity-70"></div>

      {/* Stats Container */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white 
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10
          w-full max-w-[90%] lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px]"
      >
        {/* Single Stat Card */}
        <div className="flex items-center gap-4">
          <FaHome className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] border rounded-full p-6 sm:p-8 hover:bg-white hover:text-blue-600 transition ease-in-out duration-500" />
          <span>
            <h1 className="font-semibold text-xl md:text-3xl">4367</h1>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px]">
              Hospital Rooms
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <IoIosPerson className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] border rounded-full p-6 sm:p-8 hover:bg-white hover:text-blue-600 transition ease-in-out duration-500" />
          <span>
            <h1 className="font-semibold text-xl md:text-3xl">3278</h1>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px]">
              Staff Members
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <RiEmotionHappyLine className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] border rounded-full p-6 sm:p-8 hover:bg-white hover:text-blue-600 transition ease-in-out duration-500" />
          <span>
            <h1 className="font-semibold text-xl md:text-3xl">9854</h1>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px]">
              Happy Patients
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <SlCalender className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] border rounded-full p-6 sm:p-8 hover:bg-white hover:text-blue-600 transition ease-in-out duration-500" />
          <span>
            <h1 className="font-semibold text-xl md:text-3xl">120</h1>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px]">
              Years of Excellence
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Statas;
