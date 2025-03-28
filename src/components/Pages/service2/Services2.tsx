import Image from "next/image";
import React from "react";
import Service2Card from "./Service2Card";
import { GoChecklist } from "react-icons/go";
import { FaTooth } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoEarSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";

const Services2 = () => {
  const cards = [
    {
      Icon: GoChecklist,
      title: "General Treatment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
    },
    {
      Icon: FaTooth,
      title: "Teeth Whitening",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
    },
    {
      Icon: FaHeart,
      title: "Heart Surgery",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
    },
    {
      Icon: IoEarSharp,
      title: "Ear Treatment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
    },
    {
      Icon: FaEye,
      title: "Vision Problems",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
    },
    {
      Icon: MdBloodtype,
      title: "Blood Transfusion",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
    },
  ];
  return (
    <div className="h-[100vh]">
      {/* Top Section  */}
      <div className="flex justify-center items-center md:flex-col md:gap-6">
        <h1 className="text-4xl font-bold md:w-[650px] text-center">
          We Offer Different Services To Improve Your Health
        </h1>
        <Image
          src={"/assets/png/section-img.png"}
          alt="Image"
          width={60}
          height={60}
        />
        <p className="mt-5 md:w-[650px] text-[20px] text-center text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
          aliquet. pretiumts
        </p>
      </div>

      {/* Bottom Section  */}
      <div className="grid grid-cols-3 gap-6 mt-24 place-items-center px-10">
        {cards.map((card, index) => (
          <Service2Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Services2;
