import Image from "next/image";
import React from "react";
import NewsCard from "./NewsCard";

const cards = [
  {
    date: "22 Aug, 2020",
    title: "We have announced our new product.",
    description:
      "Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Incididunt Sed.",
    image: "/assets/png/blog1.jpg",
  },
  {
    date: "15 Jul, 2020",
    title: "Top five way for solving teeth problems.",
    description:
      "Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Incididunt Sed.",
    image: "/assets/png/blog2.jpg",
  },
  {
    date: "05 Jan, 2020",
    title: "We provide highly business solutions.",
    description:
      "Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Incididunt Sed.",
    image: "/assets/png/blog3.jpg",
  },
];

const NewsTab = () => {
  return (
    <div className="h-full my-10">
      {/* Top Section  */}
      <div className="flex flex-col items-center text-center gap-4 sm:gap-5 md:gap-6 py-6 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-2xl">
          Keep up with Our Most Recent Medical News.
        </h1>
        <Image
          src={"/assets/png/section-img.png"}
          alt="Section Icon"
          width={60}
          height={60}
        />
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
          aliquet. pretiumts
        </p>
      </div>

      {/* Bottom Section  */}
      <div className="flex justify-center 2xl:gap-20 gap-10 mt-5 flex-wrap">
        {cards.map((card, index) => (
          <div key={index} className="relative group">
            <NewsCard card={card} />
            <span className="bg-blue-600 absolute bottom-0 w-0 h-[3px] transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTab;
