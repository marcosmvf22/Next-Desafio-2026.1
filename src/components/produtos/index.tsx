"use client";

import Pesquisa from "./pesquisa";
import { Paginacao } from "./paginacao";
import Card from "./cards";
import { PageProduct } from "@/types/data";

type ProdutosProps = {
  posts: PageProduct[];
  totalPages: number;
  currentPage: number;
};

export default function Produtos({ posts, totalPages, currentPage }: ProdutosProps) {
  return (
    <div className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-18 py-6 sm:py-10 gap-8 sm:gap-12 lg:gap-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 px-2 sm:px-4 lg:px-8 py-4 font-jetbrains">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-azul-escuro font-extrabold">Produtos</h1>
        <Pesquisa />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-15 pt-4 sm:pt-6 lg:pt-10">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      <Paginacao totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
