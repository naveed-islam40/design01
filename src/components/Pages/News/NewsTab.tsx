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
      <div className="flex justify-center items-center md:flex-col md:gap-6 py-6">
        <h1 className="text-4xl font-bold md:w-[650px] text-center">
          Keep up with Our Most Recent Medical News.
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
      <div className="flex justify-center gap-10 mt-5 flex-wrap">
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
