import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const PartnersTab = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="h-full my-24 relative">
      <img src={"/assets/png/client-bg.jpg"} alt="Image" />
      <span className="absolute inset-0 bg-blue-600 opacity-70"></span>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
        className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/4 lg:basis-1/4 px-16"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="">
                    <img
                      src={`/assets/png/partner${index + 1}.png`}
                      alt="Image"
                      className="w-[150px] h-[150px]"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PartnersTab;
