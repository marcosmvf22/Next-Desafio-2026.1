"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { PostIndividual } from "@/types/data";

export default function ProdutoPVI({post}: {post:  PostIndividual }) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 px-4 sm:px-8 md:px-10 lg:px-5 py-6 md:py-10 font-jetbrains justify-center items-center">
      <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-1/3 text-azul-escuro text-center lg:text-left items-center lg:items-start">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          {post?.title}
        </h1>
        <div className="flex flex-col gap-3 sm:gap-5 items-center lg:items-start">
          <p className="text-lg sm:text-xl md:text-2xl font-medium">Tamanhos:</p>
          <div className="flex flex-row gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl justify-center lg:justify-start flex-wrap">
            <button className="bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 border border-azul-escuro hover:bg-azul-medio transition">P</button>
            <button className="bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 border border-azul-escuro hover:bg-azul-medio transition">M</button>
            <button className="bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 border border-azul-escuro hover:bg-azul-medio transition">G</button>
            <button className="bg-white rounded-full w-10 h-8 sm:w-12.5 sm:h-10 border border-azul-escuro hover:bg-azul-medio transition">GG</button>
            <button className="bg-white rounded-full w-12 h-8 sm:w-15 sm:h-10 border border-azul-escuro hover:bg-azul-medio transition">EGG</button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex justify-center">
        <Image
          src={post?.principalImage ?? ''}
          alt="Camiseta Cruzeiro Retrô Libertadores 1976 - Azul"
          width={904}
          height={904}
          className="w-56 h-64 sm:w-72 sm:h-80 md:w-80 md:h-96 bg-azul-medio/20 object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 w-full lg:w-1/3 text-azul-escuro text-center lg:text-left items-center lg:items-start">
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl">R$ {Number(post?.price).toFixed(2)}</p>
        
        <div className="flex justify-center lg:justify-start">
          <button className="flex flex-row bg-azul-escuro text-white p-2 sm:p-3 rounded gap-2 sm:gap-3 items-center hover:bg-azul transition">
            <Plus className="flex items-center w-6 h-6 sm:w-8 sm:h-8" />
            <p className="text-lg sm:text-xl md:text-2xl text-center">Carrinho</p>
          </button>
        </div>
      </div>
    </div>
  );
}
