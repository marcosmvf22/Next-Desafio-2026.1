'use client';

import Carrinho from "@/src/components/carrinho";

export default function PagCarrinho() {
    // const carrinho = [
    // {
    //   id: 1,
    //     image: "/logo/camisa1.png",
    //     title: "Camiseta Confortável",
    //     size: "M",
    //     quantity: 2,
    //     price: "R$ 49,90",
    // },
    // {
    //   id: 2,
    //     image: "/logo/camisa1.png",
    //     title: "Camiseta Confortável",
    //     size: "M",
    //     quantity: 1,
    //     price: "R$ 99,90",
    // },
    // {
    //   id: 3,
    //     image: "/logo/camisa1.png",
    //     title: "Camiseta Confortável",
    //     size: "M",
    //     quantity: 1,
    //     price: "R$ 42,90",
    // },
  // ];
  return (
    <div className="bg-[url('/logo/carrinho.png')]">
      <Carrinho />
    </div>
  );
}
