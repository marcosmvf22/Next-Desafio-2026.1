"use client";

import Pesquisa from "./pesquisa";
import { Paginacao } from "./paginacao";
import Card from "./cards";
import { PageProduct } from "@/types/data";

type ProdutosProps = {
  posts: PageProduct[];
};

export default function Produtos({ posts }: ProdutosProps) {
  return (
    <div className="flex flex-col px-18 py-10 gap-16">
      <div className="flex flex-row justify-between items-center px-8 py-4 font-jetbrains">
        <h1 className="text-4xl text-azul-escuro font-extrabold">Produtos</h1>
        <Pesquisa />
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-15 pt-10">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      <Paginacao />
    </div>
  );
}
