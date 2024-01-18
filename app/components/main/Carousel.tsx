"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Carousel() {
  const [slidesPerView, setSlidesPerView] = useState(calculateSlidesPerView());

  function calculateSlidesPerView() {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1200) {
        return 3;
      } else if (window.innerWidth >= 768) {
        return 2;
      } else {
        return 1;
      }
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(calculateSlidesPerView());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-[100%] h-[100%] mt-7"
      >
        <SwiperSlide className="relative w-[50px] text-center flex justify-center items-center">
          <div className="w-[100%] h-[100%] flex flex-col justify-start items-center">
            <div className="w-[80%] h-[80%]">
              <div className="relative flex justify-center items-center cursor-pointer overflow-hidden w-[100%] h-[50%]">
                <div className="w-[100%] h-[100%] bg-[url(https://firebasestorage.googleapis.com/v0/b/portfolio-95980.appspot.com/o/cryptojs.jpg?alt=media&token=13e49318-ebaf-4136-979a-f782a13ca0f7)] bg-no-repeat bg-fixed bg-cover sm:bg-center bg-left rounded-t-xl brightness-[.3]"></div>
                <p className="text-thirdTheme absolute font-bold text-2xl z-10">
                  developing...
                </p>
              </div>

              <div className="flex w-[100%] h-[45%] text-thirdTheme bg-[#171717] justify-center items-center rounded-b-xl">
                <div className="w-[90%] h-[90%] flex flex-col py-5">
                  <h1 className="text-2xl font-bold">Admin Control Panel</h1>
                  <p className="mt-9 text-lg">
                    Innovative app for managing cryptocurrency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-[50px] text-center flex justify-center items-center">
          <div className="w-[100%] h-[100%] flex flex-col justify-start items-center">
            <div className="w-[80%] h-[80%]">
              <div className="relative flex justify-center items-center cursor-pointer overflow-hidden w-[100%] h-[50%]">
                <div className="w-[100%] h-[100%] bg-[url(https://firebasestorage.googleapis.com/v0/b/portfolio-95980.appspot.com/o/cryptojs.jpg?alt=media&token=13e49318-ebaf-4136-979a-f782a13ca0f7)] bg-no-repeat bg-fixed bg-cover sm:bg-center bg-left rounded-t-xl brightness-[.3]"></div>
                <p className="text-thirdTheme absolute font-bold text-2xl z-10">
                  developing...
                </p>
              </div>

              <div className="flex w-[100%] h-[45%] text-thirdTheme bg-[#171717] justify-center items-center rounded-b-xl">
                <p className="w-[90%] text-lg">
                  Innovative app for managing cryptocurrency investments
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-[50px] text-center flex justify-center items-center">
          <div className="w-[100%] h-[100%] flex flex-col justify-start items-center">
            <div className="w-[80%] h-[80%]">
              <div className="flex justify-center items-center cursor-pointer overflow-hidden w-[100%] h-[50%] rounded-t-xl bg-cover">
                <div className="w-[100%] h-[100%] bg-[url(https://firebasestorage.googleapis.com/v0/b/portfolio-95980.appspot.com/o/messjs.jpg?alt=media&token=5cb55869-a7b9-4a32-a0b8-298d301cdf29)] bg-no-repeat bg-fixed bg-cover sm:bg-center bg-left rounded-t-xl brightness-[.3]"></div>
                <p className="text-thirdTheme absolute font-bold text-2xl z-10">
                  developing...
                </p>
              </div>
              <div className="flex w-[100%] h-[45%] text-thirdTheme bg-[#171717] justify-center items-center rounded-b-xl">
                <p className="w-[90%] text-lg">
                  Connect, chat, share messaging experience
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
