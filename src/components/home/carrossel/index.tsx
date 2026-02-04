"use client";

import Card from "./cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";

interface CardProps {
  id: number;
  image: string;
  description: string;
  price: string;
}

interface CarrosselProps {
  cards: CardProps[];
}

export default function Carrossel({ cards }: CarrosselProps) {
  return (
    <div className="flex flex-col bg-azul-medio items-center pt-12 pb-12 px-18 g-16">
      <p className="font-jetbrains font-extrabold text-azul-escuro text-5xl">
        Mais produtos
      </p>
      <div className="flex flex-row w-full pt-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop
          slidesPerView={4}
          autoplay={{ delay: 5000 }}
          style={{ paddingBottom: "10px" }}
        >
          {cards.map((card) => (
            <SwiperSlide
              key={card.id}
              className="py-3 px-4 rounded-xl text-white"
            >
              <Card
                image={card.image}
                description={card.description}
                price={card.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
