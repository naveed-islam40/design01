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
    <div className="bg-white py-8 px-5 rounded-md border w-full max-w-[400px] mx-auto">
      {/* Top Section */}
      <div className="flex flex-col items-center gap-4">
        <card.Icon className="h-16 w-16 text-blue-600" />
        <h3 className="text-xl sm:text-2xl font-semibold text-center">
          {card.type}
        </h3>
        <p className="text-blue-600 text-3xl sm:text-4xl font-bold text-center">
          {card.price}
          <span className="text-gray-500 text-sm font-normal">
            {" "}
            / Per Visit
          </span>
        </p>
      </div>

      {/* Bottom Section */}
      <ul className="mt-8 space-y-4">
        {card.cover?.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between text-gray-500 text-base"
          >
            <span className="text-[17px]">{item.title}</span>
            <item.icon
              className={`${
                item.icon === TiTick
                  ? "text-white bg-blue-600 w-5 h-5 rounded-full p-1"
                  : "text-gray-500 text-xl"
              }`}
            />
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className="flex justify-center mt-6 w-full">
        <Button
          className={cn(
            "group relative isolate overflow-hidden rounded-md bg-blue-600 px-6 text-white py-4 w-full max-w-[280px] text-sm sm:text-base",
            "before:absolute before:inset-y-0 before:right-0 before:z-[-1] before:w-[51%] before:origin-left before:scale-x-0 before:bg-[#333333] before:transition-transform before:duration-300 before:ease-in-out",
            "after:absolute after:inset-y-0 after:left-0 after:z-[-1] after:w-[51%] after:origin-right after:scale-x-0 after:bg-[#333333] after:transition-transform after:duration-300 before:ease-in-out",
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
