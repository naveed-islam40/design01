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
    <div className="h-[100vh]">
      {/* Top Content  */}
      <div className="flex flex-col items-center gap-3 my-5">
        <h1 className="text-4xl font-bold w-[40%] text-center">
          We Maintain Cleanliness Rules Inside Our Hospital
        </h1>
        <Image
          src={"/assets/png/section-img.png"}
          alt={""}
          width={60}
          height={60}
        />
        <p className="mt-5 w-[40%] text-[20px] text-center text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
          aliquet. pretiumts
        </p>
      </div>
      {/* Swiper Images  */}
      <div className="mt-10">
        <Carousel
          className="w-full"
          plugins={[plugin.current]}
          onMouseLeave={plugin.current.reset}
          onMouseEnter={plugin.current.stop}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/4">
                <div className="w-[350px]">
                  <Card className="overflow-hidden">
                    <CardContent className="flex aspect-square items-center justify-center relative">
                      <img
                        src={`/assets/png/pf${index + 1}.jpg`}
                        alt={""}
                        className="relative w-full h-full bg-cover object-center object-cover hover:bg-red-200 transition duration-300 ease-in-out"
                      />
                      <span className="absolute inset-0 hover:bg-blue-600 opacity-70 transition duration-300 ease-in-out flex justify-center items-center group">
                        <Button
                          className={cn(
                            "group-hover:visible invisible relative isolate overflow-hidden rounded-md bg-white px-8 text-blue-600 py-6 transition duration-300 ease-in-out",
                            "before:absolute before:inset-y-0 before:right-0 before:z-[-1] before:w-[51%] before:origin-left before:scale-x-0 before:bg-primary  before:transition-transform before:duration-300 before:ease-in-out",
                            "after:absolute after:inset-y-0 after:left-0 after:z-[-1] after:w-[51%] after:origin-right after:scale-x-0 after:bg-primary  after:transition-transform after:duration-300 after:ease-in-out",
                            "hover:before:scale-x-100 hover:after:scale-x-100 hover:text-white "
                          )}
                          variant={"default"}
                        >
                          View Details
                        </Button>
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </div>
  );
};

export default Responsibilities;
