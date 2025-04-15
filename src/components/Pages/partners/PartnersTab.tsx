import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const PartnersTab = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="relative h-[300px] my-24">
      {/* Background Image */}
      <Image
        src="/assets/png/client-bg.jpg"
        alt="Client Background"
        fill
        className="object-cover"
      />

      {/* Blue Overlay */}
      <span className="absolute inset-0 bg-blue-600 opacity-70 z-10"></span>

      {/* Carousel Overlayed on Top */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{ loop: true }}
          className="w-full max-w-7xl"
        >
          <CarouselContent className="flex gap-4 justify-center items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="w-full xs:basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex justify-center"
              >
                <div className="p-2">
                  <Card className="bg-white shadow-md">
                    <CardContent className="flex justify-center items-center p-6">
                      <Image
                        src={`/assets/png/partner${index + 1}.png`}
                        alt={`Partner ${index + 1}`}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default PartnersTab;
