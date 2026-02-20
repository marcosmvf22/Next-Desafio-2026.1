"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Tabela from "./tabela";
import { ModalAdicionar } from "./tabela/modalAdicionar";

export default function Admin() {
  const [isModalAdicionarOpen, setIsModalAdicionarOpen] = useState(false);

  return (
    <div className="flex flex-col gap-10 font-jetbrains  px-20 py-12 w-full">
        <h1 className="w-full text-center text-azul-escuro text-3xl">Tabela de Produtos</h1>
      <div className="flex flex-row gap-5 w-full justify-between items-center">
        <span className="text-base self-end text-gray-700">
          56 resultados encontrados...
        </span>

        <button 
          className="flex flex-row bg-azul-escuro text-white p-3 gap-3 items-center rounded-xl cursor-pointer"
          onClick={() => setIsModalAdicionarOpen(true)}
        >
          <Plus className="w-6 h-6" />
          Adicionar
        </button>
      </div>
      <Tabela />
      <ModalAdicionar isOpen={isModalAdicionarOpen} onClose={() => setIsModalAdicionarOpen(false)} />
    </div>
  );
}
