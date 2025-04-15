import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface CardItem {
  date: string;
  title: string;
  description: string;
  image: string;
}

interface NewsCardProps {
  card: CardItem;
}
const NewsCard = ({ card }: NewsCardProps) => {
  return (
    <div className="flex gap-6 flex-col shadow-md border">
      <Image src={card.image} alt={card.title} width={350} height={350} />
      <div className="flex flex-col gap-5 px-5 pb-6">
        <Button variant={"default"} className="bg-blue-600 text-white">
          {card.date}
        </Button>
        <h1 className="text-xl font-semibold w-[300px]">{card.title}</h1>
        <p className="w-[300px] text-gray-600">{card.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
