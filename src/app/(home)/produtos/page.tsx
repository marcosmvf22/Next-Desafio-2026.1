'use client';

import Produtos from "@/src/components/produtos";

export default function ListaProdutos() {
  const cards = [
    {
      id: 1,
      image: "/logo/camisa1.png",
      title: "Camiseta Confortável",
      price: "R$ 49,90",
      description: "Camiseta confortável e moderna",
    },
    {
      id: 2,
      image: "/logo/camisa1.png",
      title: "Camiseta Confortável",
      price: "R$ 49,90",
      description: "Camiseta confortável e moderna",
    },{
      id: 3,
      image: "/logo/camisa1.png",
      title: "Camiseta Confortável",
      price: "R$ 49,90",
      description: "Camiseta confortável e moderna",
    },{
      id: 4,
      image: "/logo/camisa1.png",
      title: "Camiseta Confortável",
      price: "R$ 49,90",
      description: "Camiseta confortável e moderna",
    },{
      id: 5,
      image: "/logo/camisa1.png",
      title: "Camiseta Confortável",
      price: "R$ 49,90",
      description: "Camiseta confortável e moderna",
    },{
      id: 6,
      image: "/logo/camisa1.png",
      title: "Camiseta Confortável",
      price: "R$ 49,90",
      description: "Camiseta confortável e moderna",
    },{
      id: 7,
      image: "/logo/camisa1.png",
      title: "Camiseta Confortável",
      price: "R$ 49,90",
      description: "Camiseta confortável e moderna",
    },{
      id: 8,
      image: "/logo/camisa1.png",
      title: "Camiseta Confortável",
      price: "R$ 49,90",
      description: "Camiseta confortável e moderna",
    },{
      id: 9,
      image: "/logo/camisa1.png",
      title: "Camiseta Confortável",
      price: "R$ 49,90",
      description: "Camiseta confortável e moderna",
    },
    {
      id: 10,
      image: "/logo/camisa1.png",
      title: "Camiseta Confortável",
      price: "R$ 49,90",
      description: "Camiseta confortável e moderna",
    },
  ];
  return (
    <div className="bg-azul-medio">
    <Produtos cards={cards} />
    </div>
  );
}