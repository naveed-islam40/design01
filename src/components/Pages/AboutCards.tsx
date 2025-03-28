import React from "react";
import { IconType } from "react-icons/lib";

interface CardItem {
  title: string;
  subtitle: string;
  icon: IconType;
}
const AboutCards = ({ cards }: { cards: CardItem }) => {
  return (
    <div className="flex group flex-col items-center gap-4 p-6">
      <cards.icon className="h-[130px] w-[130px] border rounded-full p-10 text-blue-600 group-hover:bg-blue-700 group-hover:text-white transition ease-in-out duration-500" />
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-semibold text-3xl">{cards.title}</h1>
        <p className="text-center">{cards.subtitle}</p>
      </div>
    </div>
  );
};

export default AboutCards;
