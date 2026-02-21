"use client";

import Card from "../carrossel/cards";
import { ProductHome } from "@/types/home/home";

type PrinProdutosProps = {
  posts: ProductHome[];
};

export default function PrinProdutos({ posts }: PrinProdutosProps) {
  return (
    <div className="flex flex-col bg-gradient-to-b from-azul to-azul-medio font-jetbrains px-18 py-12 pb-20 gap-10">
      <p className="font-extrabold text-4xl text-azul-claro text-center">Principais Produtos</p>
      <div className="grid grid-cols-4 grid-rows-2 gap-15 pt-10">
      {posts.map((post , index) => (
        <Card
          key={index}
          post={post}
        />
      ))}
    </div>
    </div>
  );
}
