"use client";

import Card from "../carrossel/cards";

interface CardProps {
  id: number;
  image: string;
  description: string;
  price: string;
}

interface Props {
  cards: CardProps[];
}

export default function PrinProdutos({ cards }: Props) {
  return (
    <div className="flex flex-col bg-gradient-to-b from-azul to-azul-medio font-jetbrains px-18 py-12 pb-20 gap-10">
      <p className="font-extrabold text-4xl text-azul-claro text-center">Principais Produtos</p>
      <div className="grid grid-cols-4 grid-rows-2 gap-15 pt-10">
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          description={card.description}
          price={card.price}
        />
      ))}
    </div>
    </div>
  );
}
