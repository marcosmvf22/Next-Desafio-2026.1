"use client";

import HeroSection from "@/src/components/home/herosection";
import Carrossel from "../../components/home/carrossel";

export default function Home() {
  const cards = [
    {
      id: 1,
      image: "/logo/camisa1.png",
      description: "Camiseta confortável e moderna",
      price: "R$ 49,90",
    },
    {
      id: 2,
      image: "/logo/camisa1.png",
      description: "Camiseta confortável e moderna",
      price: "R$ 49,90",
    },
    {
      id: 3,
      image: "/logo/camisa1.png",
      description: "Camiseta confortável e moderna",
      price: "R$ 49,90",
    },
    {
      id: 4,
      image: "/logo/camisa1.png",
      description: "Camiseta confortável e moderna",
      price: "R$ 49,90",
    },
    {
      id: 5,
      image: "/logo/camisa1.png",
      description: "Camiseta confortável e moderna",
      price: "R$ 49,90",
    },
    {
      id: 6,
      image: "/logo/camisa1.png",
      description: "Camiseta confortável e moderna",
      price: "R$ 49,90",
    },
    {
      id: 7,
      image: "/logo/camisa1.png",
      description: "Camiseta confortável e moderna",
      price: "R$ 49,90",
    },
    {
      id: 8,
      image: "/logo/camisa1.png",
      description: "Camiseta confortável e moderna",
      price: "R$ 49,90",
    },
  ];

  return (
    <div className="flex flex-col gap-0 m-0 p-0">
    <HeroSection />
    <Carrossel cards={cards} />
      
    </div>
  );
}
