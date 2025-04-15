import Image from "next/image";
import React from "react";
import { FaClinicMedical } from "react-icons/fa";
import { LiaFirstAidSolid } from "react-icons/lia";
import { SiPhabricator } from "react-icons/si";
import AboutCards from "./AboutCards";

const cards = [
  {
    icon: FaClinicMedical,
    title: "Emergency Help",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet.",
  },
  {
    icon: LiaFirstAidSolid,
    title: "Enriched Pharmecy",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet.",
  },
  {
    icon: SiPhabricator,
    title: "Medical Treatment",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet.",
  },
];

const About = () => {
  return (
    <div className="h-full my-5">
      {/* Heading Section */}
      <div className="flex flex-col justify-center items-center gap-4 text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-3xl">
          We Are Always Ready to Help You & Your Family
        </h1>
        <Image
          src="/assets/png/section-img.png"
          alt="Section Icon"
          width={60}
          height={60}
        />
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
          aliquet. pretiumts
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {cards.map((card, index) => (
          <AboutCards key={index} cards={card} />
        ))}
      </div>
    </div>
  );
};

export default About;
