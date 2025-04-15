import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa6";

const options = [
  "Maecenas vitae luctus nibh.",
  "Duis massa massa.",
  "Aliquam feugiat interdum.",
  "Maecenas vitae luctus nibh.",
  "Duis massa massa.",
  "Aliquam feugiat interdum.",
];

const Services = () => {
  const middleIndex = Math.ceil(options.length / 2);
  const leftOptions = options.slice(0, middleIndex);
  const rightOptions = options.slice(middleIndex);

  return (
    <div className="h-full mt-10 w-full lg:w-[80%] screen_4k:w-[70%] mx-auto">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-[650px]">
          We Offer Different Services To Improve Your Health
        </h1>
        <Image
          src="/assets/png/section-img.png"
          alt="Section Image"
          width={60}
          height={60}
        />
        <p className="text-sm sm:text-lg md:text-xl text-gray-700 max-w-[650px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          molestias explicabo earum repellat exercitationem magni cupiditate.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-10 gap-10">
        {/* Left Section */}
        <div className="max-w-[550px] text-center md:text-left px-5">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold pb-3">Who We Are</h1>
            <span className="block h-[3px] w-[50px] bg-blue-600 mx-auto md:mx-0"></span>
          </div>
          <p className="my-5 text-sm sm:text-base text-[#757575]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            pharetra ante vel est lobortis, a commodo magna rhoncus.
          </p>
          <p className="my-5 text-sm sm:text-base text-[#757575]">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra.
          </p>

          {/* List Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[leftOptions, rightOptions].map((list, idx) => (
              <ul key={idx} className="list-none pl-0">
                {list.map((option, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <span className="flex items-center justify-center w-5 h-5 bg-blue-600 rounded-full mr-3">
                      <FaPlay className="text-white text-xs" />
                    </span>
                    <span className="text-sm sm:text-base text-[#757575]">
                      {option}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full max-w-[500px]">
          <Image
            src="/assets/png/pf1.jpg"
            alt="Profile Image"
            width={500}
            height={500}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
