"use client";

import Card from "../carrossel/cards";
import { ProductHome } from "@/types/home/home";

type PrinProdutosProps = {
  posts: ProductHome[];
};

export default function PrinProdutos({ posts }: PrinProdutosProps) {
  return (
    <div className="flex flex-col bg-gradient-to-b from-azul to-azul-medio font-jetbrains px-4 sm:px-8 md:px-12 lg:px-18 py-8 sm:py-10 md:py-12 pb-12 sm:pb-16 md:pb-20 gap-6 sm:gap-8 md:gap-10">
      <p className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-azul-claro text-center">Principais Produtos</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-8 md:gap-10 lg:gap-15 pt-4 sm:pt-6 md:pt-10">
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
