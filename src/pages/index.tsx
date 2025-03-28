"use client";
import SliderComponent from "@/components/Pages/Swiper";
import React, { useState } from "react";
import { cardsData, swiperImages } from "@/static/images";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import InfoCards from "@/components/Pages/InfoCards";
import About from "@/components/Pages/About";
import Statas from "@/components/Pages/Statas";
import Services from "@/components/Pages/Services";
import Help from "@/components/Pages/Help";
import { ParallaxProvider } from "react-scroll-parallax";
import Responsibilities from "@/components/Pages/Responsibilities";
import Services2 from "@/components/Pages/service2/Services2";
import PriceTab from "@/components/Pages/price-cards/PriceTab";
import NewsTab from "@/components/Pages/News/NewsTab";
import PartnersTab from "@/components/Pages/partners/PartnersTab";
import Booking from "@/components/Pages/booking/Booking";
import Register from "@/components/Pages/Register";

const page = () => {
  const [imageNumber, setImageNumber] = useState(0);

  const content = () => {
    if (imageNumber === 0) {
      return "Learn More";
    } else if (imageNumber === 1) {
      return "Contact Us";
    } else {
      return "About Us";
    }
  };

  return (
    <div className="relative ">
      {/* Home Section */}
      <div className="mb-44 ">
        <SliderComponent
          images={swiperImages}
          setImageNumber={setImageNumber}
        />
        {/* Content */}
        <div className="w-[95%] 2xl:w-[70%] mx-auto">
          <div className="absolute top-[12rem] left-[5rem] z-20 ">
            {/* Top Heading */}
            <h1 className="md:text-5xl font-bold md:w-[650px]">
              We Provide <span className="text-blue-600">Medical</span> Services
              That You Can <span className="text-blue-600">Trust!</span>
            </h1>
            {/* sub Heading  */}
            <p className="mt-5 md:w-[650px] text-[16px] text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed nisl pellentesque, faucibus libero eu, gravida quam.{" "}
            </p>
            {/* buttons */}
            <div className="flex items-center gap-3 mt-5">
              <Button
                className={cn(
                  "group relative isolate overflow-hidden rounded-md bg-blue-600 px-8 text-primary-foreground py-6",
                  "before:absolute before:inset-y-0 before:right-0 before:z-[-1] before:w-[51%] before:origin-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:ease-in-out",
                  "after:absolute after:inset-y-0 after:left-0 after:z-[-1] after:w-[51%] after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-in-out",
                  "hover:before:scale-x-100 hover:after:scale-x-100"
                )}
                variant={"default"}
              >
                Get Appointment
              </Button>
              <Button
                className={cn(
                  "group relative isolate overflow-hidden rounded-md bg-primary px-8 text-primary-foreground py-6",
                  "before:absolute before:inset-y-0 before:right-0 before:z-[-1] before:w-[51%] before:origin-left before:scale-x-0 before:bg-blue-600 before:transition-transform before:duration-300 before:ease-in-out",
                  "after:absolute after:inset-y-0 after:left-0 after:z-[-1] after:w-[51%] after:origin-right after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-300 after:ease-in-out",
                  "hover:before:scale-x-100 hover:after:scale-x-100"
                )}
                variant={"default"}
              >
                {content()}
              </Button>
            </div>
          </div>
        </div>

        {/* Cards  */}
        <div className="relative">
          <InfoCards cards={cardsData} />
        </div>
      </div>
      {/* About Section  */}
      <div className="w-[95%] 2xl:w-[70%] mx-auto">
        <About />
      </div>
      {/* Statas  */}

      <Statas />

      {/* Services  */}

      <Services />

      {/* Help  */}

      <ParallaxProvider>
        <Help />
      </ParallaxProvider>
      {/* Responsibilities  */}
      <div className="w-[95%] 2xl:w-[70%] mx-auto">
        <Responsibilities />
      </div>
      {/* Services 2  */}
      <div className="w-[95%] 2xl:w-[70%] mx-auto">
        <Services2 />
      </div>
      {/* Price Tab  */}
      <div className="w-[95%] 2xl:w-[70%] mx-auto">
        <PriceTab />
      </div>
      {/* News Tab  */}
      <div className="w-[95%] 2xl:w-[70%] mx-auto">
        <NewsTab />
      </div>
      {/* Partner Tab  */}
      <div className="w-[95%] 2xl:w-[70%] mx-auto">
        <PartnersTab />
      </div>
      {/* Booking  */}
      <div className="w-[95%] 2xl:w-[70%] mx-auto">
        <Booking />
      </div>
      {/* Register  */}
      <div className="w-[95%] 2xl:w-[70%] mx-auto">
        <Register />
      </div>
    </div>
  );
};

export default page;
