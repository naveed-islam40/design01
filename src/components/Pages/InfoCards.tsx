import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { MobileInfoCard } from "./InfoCard/MobileInfoCard";

interface CardItem {
  title: string;
  subtitle: string;
  description?: string;
  details?: { label: string; time: string }[];
  icon: React.ReactNode;
}

interface InfoCardsProps {
  cards: CardItem[];
}

const InfoCards: React.FC<InfoCardsProps> = ({ cards }) => {
  return (
    <div className="relative">
      <div className="flex justify-center flex-wrap w-full gap-6 absolute -bottom-1/2 translate-y-1/2 z-20 left-1/2 -translate-x-1/2 max-cards_screen:hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-blue-600 text-white p-6 rounded-lg w-[350px] shadow-xl overflow-hidden  hover:shadow-blue-600/50 transition duration-500 ease-in-out hover:transform hover:-translate-y-3"
          >
            <h4 className="text-sm opacity-80 my-2">{card.title}</h4>
            <h2 className="text-xl font-bold py-2">{card.subtitle}</h2>

            {card.description && (
              <p className="mt-2 opacity-90 py-2">{card.description}</p>
            )}

            {card.details && (
              <ul className="mt-2">
                {card.details.map((detail, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{detail.label}</span>
                    <span>{detail.time}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 font-semibold flex items-center gap-2 cursor-pointer relative overflow-hidden group w-max">
              LEARN MORE
              <FaArrowRight />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-50 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </div>

            <div className="absolute -bottom-5 -right-5 opacity-20  text-8xl">
              {card.icon}
            </div>
          </div>
        ))}

        {/* Mobile Version  */}
      </div>
      <div className="hidden max-cards_screen:flex absolute -bottom-20 translate-y-1/2 z-20 left-1/2 -translate-x-1/2">
        {cards?.map((card, index) => (
          <MobileInfoCard card={card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
