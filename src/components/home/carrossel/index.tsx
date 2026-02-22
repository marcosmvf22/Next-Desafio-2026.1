"use client";

import Card from "./cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import { ProductHome } from "@/types/home/home";

type CarrosselProps = {
  posts: ProductHome[];
};

export default function Carrossel({ posts }: CarrosselProps) {
  return (
    <div className="flex flex-col bg-azul-medio items-center pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-8 md:px-12 lg:px-18 gap-8 sm:gap-12 md:gap-16">
      <p className="font-jetbrains font-extrabold text-azul-escuro text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        Mais produtos
      </p>
      <div className="flex flex-row w-full pt-6 sm:pt-8 md:pt-12 items-stretch [&_.swiper-pagination]:relative [&_.swiper-pagination]:mt-6 [&_.swiper-pagination]:flex [&_.swiper-pagination]:justify-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1440: { slidesPerView: 4, spaceBetween: 20 },
          }}
          autoplay={{ delay: 5000 }}
          className="w-full pb-12"
        >
          {posts.map((post, index) => (
            <SwiperSlide
              key={index}
              className="py-3 px-2 sm:px-4 rounded-xl text-white"
            >
              <Card
              key={index} 
              post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
