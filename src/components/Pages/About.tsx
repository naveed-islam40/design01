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
      {/* Heading  */}
      <div className="flex justify-center items-center md:flex-col md:gap-6">
        <h1 className="text-4xl font-bold md:w-[650px] text-center">
          We Are Always Ready to Help You & Your Family
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

      {/* Cards  */}

      <div className="flex justify-center mt-5 px-3">
        {cards.map((card, index) => (
          <AboutCards key={index} cards={card} />
        ))}
      </div>
    </div>
  );
};

export default About;
