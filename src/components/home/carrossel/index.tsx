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
    <div className="flex flex-col bg-azul-medio items-center pt-12 pb-12 px-18 g-16">
      <p className="font-jetbrains font-extrabold text-azul-escuro text-5xl">
        Mais produtos
      </p>
      <div className="flex flex-row w-full pt-12 items-stretch">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop
          slidesPerView={4}
          autoplay={{ delay: 5000 }}
          style={{ paddingBottom: "10px" }}
        >
          {posts.map((post, index) => (
            <SwiperSlide
              key={index}
              className="py-3 px-4 rounded-xl text-white"
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
