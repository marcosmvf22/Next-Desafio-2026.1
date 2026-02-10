'use client';

import Carrinho from "@/src/components/carrinho";

export default function PagCarrinho() {
    const carrinho = [
    {
      id: 1,
        image: "/logo/camisa1.png",
        title: "Camiseta Confortável",
        size: "M",
        quantity: 2,
        price: "R$ 49,90",
    },];
  return ( 
    <Carrinho carrinho={carrinho} />
  );
}
