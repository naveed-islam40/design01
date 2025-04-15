import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Help = () => {
  return (
    <div className="h-full my-10 sm:my-20 w-full screen_4k:w-[70%] mx-auto relative">
      <ParallaxBanner
        layers={[{ image: "/assets/png/call-bg.jpg", speed: -20 }]}
        className="aspect-[2/1] h-[400px] sm:h-[500px] relative"
      >
        {/* Background Overlay */}
        <ParallaxBannerLayer speed={-10}>
          <div className="absolute inset-0 bg-blue-600 opacity-70"></div>
        </ParallaxBannerLayer>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] text-white">
            Do you need Emergency Medical Care? Call @ 1234 56789
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            porttitor dictum turpis nec gravida.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              className={cn(
                "group relative isolate overflow-hidden bg-white px-8 text-blue-600 py-6 rounded-md",
                "before:absolute before:inset-y-0 before:right-0 before:z-[-1] before:w-[51%] before:origin-left before:scale-x-0 before:bg-blue-600 before:transition-transform before:duration-300 before:ease-in-out",
                "after:absolute after:inset-y-0 after:left-0 after:z-[-1] after:w-[51%] after:origin-right after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-300 after:ease-in-out",
                "hover:before:scale-x-100 hover:after:scale-x-100 hover:text-white"
              )}
              variant={"default"}
            >
              Contact Now
            </Button>
            <Button
              className={cn(
                "group relative isolate overflow-hidden bg-transparent border px-8 text-white py-6 rounded-md",
                "before:absolute before:inset-y-0 before:right-0 before:z-[-1] before:w-[51%] before:origin-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:ease-in-out",
                "after:absolute after:inset-y-0 after:left-0 after:z-[-1] after:w-[51%] after:origin-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-in-out",
                "hover:before:scale-x-100 hover:text-blue-600 hover:after:scale-x-100"
              )}
              variant={"default"}
            >
              Learn More
            </Button>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Help;
