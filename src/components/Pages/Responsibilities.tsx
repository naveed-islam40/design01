import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Responsibilities = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 my-10">
      {/* Top Content */}
      <div className="flex flex-col items-center gap-3 text-center my-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-3xl">
          We Maintain Cleanliness Rules Inside Our Hospital
        </h1>
        <Image
          src={"/assets/png/section-img.png"}
          alt="Section icon"
          width={60}
          height={60}
        />
        <p className="mt-5 text-base sm:text-lg text-gray-700 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
          aliquet. pretiumts
        </p>
      </div>

      {/* Carousel */}
      <div className="mt-10 w-full">
        <Carousel
          className="w-full"
          plugins={[plugin.current]}
          onMouseLeave={plugin.current.reset}
          onMouseEnter={plugin.current.stop}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-[90%] sm:basis-1/2 md:basis-1/3 xl:basis-1/4 flex justify-center"
              >
                <Card className="w-full max-w-[320px]">
                  <CardContent className="relative aspect-square flex items-center justify-center overflow-hidden p-0">
                    <img
                      src={`/assets/png/pf${index + 1}.jpg`}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover transition duration-300 ease-in-out"
                    />
                    <span className="absolute inset-0 bg-blue-600 bg-opacity-0 hover:bg-opacity-70 transition duration-300 ease-in-out flex justify-center items-center group">
                      <Button
                        className={cn(
                          "group-hover:visible invisible relative isolate overflow-hidden rounded-md bg-white px-6 sm:px-8 py-4 sm:py-6 text-blue-600 transition duration-300 ease-in-out",
                          "before:absolute before:inset-y-0 before:right-0 before:z-[-1] before:w-[51%] before:origin-left before:scale-x-0 before:bg-[#333] before:transition-transform before:duration-300 before:ease-in-out",
                          "after:absolute after:inset-y-0 after:left-0 after:z-[-1] after:w-[51%] after:origin-right after:scale-x-0 after:bg-[#333] after:transition-transform after:duration-300 after:ease-in-out",
                          "hover:before:scale-x-100 hover:after:scale-x-100 hover:text-white"
                        )}
                        variant="default"
                      >
                        View Details
                      </Button>
                    </span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 sm:-left-8" />
          <CarouselNext className="-right-4 sm:-right-8" />
        </Carousel>
      </div>
    </div>
  );
};

export default Responsibilities;
