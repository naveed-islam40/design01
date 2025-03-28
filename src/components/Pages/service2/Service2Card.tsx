import Image from "next/image";
import React from "react";
import { IconType } from "react-icons/lib";

interface CardItem {
  Icon: IconType;
  title: string;
  desc: string;
}

interface Service2CardProps {
  card: CardItem;
}

const Service2Card = ({ card }: Service2CardProps) => {
  return (
    <div className="flex w-[400px] gap-6">
      <card.Icon className="h-20 w-32 text-blue-600" />
      <div>
        <h3 className="text-2xl font-semibold">{card.title}</h3>
        <p className="text-gray-500 text-[17px]">{card.desc}</p>
      </div>
    </div>
  );
};

export default Service2Card;
