"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

export default function ProdutoPVI() {
  return (
    <div className="flex flex-row gap-15 px-5 py-10 font-jetbrains justify-between">
      <div className="flex flex-col gap-15 w-1/3 text-azul-escuro">
        <h1 className="text-3xl text-azul-escuro font-bold">
          Camiseta Cruzeiro Retrô Libertadores 1976 - Azul
        </h1>
        <div className="flex flex-col text-xl gap-3 font-normal"> 
          <p>Composição: 100% Poliéster</p>
          <p>Indicado para: Dia a Dia</p>
          <p>Clube: Nacional</p>
          <p>Time: Cruzeiro MG</p>
          <p>Manga: Manga Curta</p>
          <p>Gola: Gola Careca</p>
        </div>
      </div>
      <Image
        src="/logo/camisa1.png"
        alt="Camiseta Cruzeiro Retrô Libertadores 1976 - Azul"
        width={904}
        height={904}
        className="w-95 h-110 bg-azul-medio/20"
      />
      <div className="flex flex-col gap-20 py-5 px-0 w-1/3 text-azul-escuro">
        <p className="font-bold text-3xl">R$ 161,49</p>
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-medium">Tamanhos:</p>
          <div className="flex flex-row gap-3 text-2xl">
            <button className="bg-white rounded-full w-10 h-10 border-1 border-azul-escuro">P</button>
            <button className="bg-white rounded-full w-10 h-10 border-1 border-azul-escuro">M</button>
            <button className="bg-white rounded-full w-10 h-10 border-1 border-azul-escuro">G</button>
            <button className="bg-white rounded-full w-12.5 h-10 border-1 border-azul-escuro">GG</button>
            <button className="bg-white rounded-full w-15 h-10 border-1 border-azul-escuro">EGG</button>
          </div>
        </div>
        <div>
          <button className="flex flex-row bg-azul-escuro text-white p-2 rounded gap-3 items-center">
            <Plus className="flex items-center w-8 h-8" />
            <p className="text-3xl text-center">Carrinho</p>
          </button>
        </div>
      </div>
    </div>
  );
}
