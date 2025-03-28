import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { IconType } from "react-icons/lib";
import { TiTick } from "react-icons/ti";

interface CardItem {
  Icon: IconType;
  type: string;
  price?: string;
  cover?: {
    title: string;
    icon: IconType;
  }[];
}

interface PriceCardProps {
  card: CardItem;
}
const PriceCard = ({ card }: PriceCardProps) => {
  return (
    <div className="bg-white py-10 px-5 rounded-md border w-[400px] ">
      {/* Top Section  */}
      <div className="flex flex-col items-center gap-5">
        <card.Icon className="h-20 w-32 text-blue-600 " />
        <h3 className="text-2xl font-semibold">{card.type}</h3>
        <p className="text-blue-600 text-4xl font-bold">
          {card.price}{" "}
          <span className="text-gray-500 text-sm font-normal">/ Per Visit</span>
        </p>
      </div>
      {/* Bottom Section  */}
      <ul className="mt-10">
        {card.cover?.map((item, index) => (
          <li key={index} className="flex justify-around w-full mt-5">
            <span className="text-[19px] text-gray-500">{item.title}</span>
            <item.icon
              className={`${
                item.icon === TiTick
                  ? "text-white bg-blue-600 w-[18px] text-[16px] rounded-full"
                  : "text-gray-500 text-[20px]"
              }`}
            />
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-5 w-full">
        <Button
          className={cn(
            "group relative isolate overflow-hidden rounded-md bg-blue-600 px-8 text-white py-6 w-[280px]",
            "before:absolute before:inset-y-0 before:right-0 before:z-[-1] before:w-[51%] before:origin-left before:scale-x-0 before:bg-primary  before:transition-transform before:duration-300 before:ease-in-out",
            "after:absolute after:inset-y-0 after:left-0 after:z-[-1] after:w-[51%] after:origin-right after:scale-x-0 after:bg-primary  after:transition-transform after:duration-300 after:ease-in-out",
            "hover:before:scale-x-100 hover:after:scale-x-100 hover:text-white"
          )}
          variant={"default"}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default PriceCard;
