"use client";

import Pesquisa from "./pesquisa";
import { Paginacao } from "./paginacao";
import Card from "./cards";

interface CardProps {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
}

interface Props {
  cards: CardProps[];
}

export default function Produtos({ cards }: Props) {
  return (
    <div className="flex flex-col px-18 py-10 gap-16">
      <div className="flex flex-row justify-between items-center px-8 py-4 font-jetbrains">
        <h1 className="text-4xl text-azul-escuro font-extrabold">Produtos</h1>
        <Pesquisa />
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-15 pt-10">
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            price={card.price}
            description={card.description}
          />
        ))}
      </div>
      <Paginacao />
    </div>
  );
}
