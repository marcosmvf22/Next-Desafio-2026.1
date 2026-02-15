"use client";

import { Plus } from "lucide-react";
import Tabela from "./tabela";

export default function Admin() {
  return (
    <div className="flex flex-col gap-10 font-jetbrains  px-20 py-12 w-full">
        <h1 className="w-full text-center text-azul-escuro text-3xl">Tabela de Produtos</h1>
      <div className="flex flex-row gap-5 w-full justify-between items-center">
        <span className="text-base self-end text-gray-700">
          56 resultados encontrados...
        </span>

        <button className="flex flex-row bg-azul-escuro text-white p-3 gap-3 items-center rounded-xl cursor-pointer">
          <Plus className="w-6 h-6" />
          Adicionar
        </button>
      </div>
      <Tabela />
    </div>
  );
}
