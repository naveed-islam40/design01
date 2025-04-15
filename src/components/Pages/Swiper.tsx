"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

interface ImageItem {
  src: string;
  alt: string;
}

interface SliderProps {
  images: ImageItem[];
  setImageNumber: React.Dispatch<React.SetStateAction<number>>;
}

export default function SliderComponent({
  images,
  setImageNumber,
}: SliderProps) {
  const [isMounted, setIsMounted] = useState(false);
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative w-full bg-gray-100 shadow-lg">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[100vh]"
        onSlideChange={(swiper: any) => setImageNumber(swiper.realIndex)}
        onSwiper={(swiper: any) => (sliderRef.current = swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="px-20">
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white h-10 w-10 rounded-full hover:bg-blue-700 cursor-pointer z-20"
          onClick={() => sliderRef.current?.slidePrev()}
        >
          &lt;
        </button>
        <button
          className=" absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white h-10 w-10 rounded-full hover:bg-blue-700 cursor-pointer z-20"
          onClick={() => sliderRef.current?.slideNext()}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
