import Image from "next/image";
import React from "react";
import PriceCard from "./PriceCard";
import { ImScissors } from "react-icons/im";
import { FaTooth } from "react-icons/fa";
import { GiHeartBeats } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import { TiDeleteOutline } from "react-icons/ti";

const priceCards = [
  {
    Icon: ImScissors,
    type: "Plastic Surgery",
    price: "$199",
    cover: [
      {
        title: "Plastic Surgery",
        icon: TiTick,
      },
      {
        title: "Plastic Surgery",
        icon: TiDeleteOutline,
      },
      {
        title: "Plastic Surgery",
        icon: TiDeleteOutline,
      },
      {
        title: "Plastic Surgery",
        icon: TiDeleteOutline,
      },
    ],
  },
  {
    Icon: FaTooth,
    type: "Teeth Whitening",
    price: "$299",
    cover: [
      {
        title: "Lorem ipsum dolor sit",
        icon: TiTick,
      },
      {
        title: "Lorem ipsum dolor sit",
        icon: TiTick,
      },
      {
        title: "Lorem ipsum dolor sit",
        icon: TiDeleteOutline,
      },
      {
        title: "Lorem ipsum dolor sit",
        icon: TiDeleteOutline,
      },
    ],
  },
  {
    Icon: GiHeartBeats,
    type: "Heart Surgery",
    price: "$399",
    cover: [
      {
        title: "Heart Surgery",
        icon: TiTick,
      },
      {
        title: "Heart Surgery",
        icon: TiTick,
      },
      {
        title: "Heart Surgery",
        icon: TiTick,
      },
      {
        title: "Heart Surgery",
        icon: TiDeleteOutline,
      },
    ],
  },
];

const PriceTab = () => {
  return (
    <div className="w-full bg-[#F9F9F9] py-10 px-4 sm:px-6 md:px-10 screen_4k:w-[70%] mx-auto">
      {/* Top Section */}
      <div className="flex flex-col items-center text-center gap-4 sm:gap-6 py-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-3xl">
          We Provide You The Best Treatment In Reasonable Price
        </h1>
        <Image
          src={"/assets/png/section-img.png"}
          alt="Image"
          width={60}
          height={60}
        />
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
          aliquet. pretiumts
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 mt-8">
        {priceCards.map((card, index) => (
          <PriceCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default PriceTab;
