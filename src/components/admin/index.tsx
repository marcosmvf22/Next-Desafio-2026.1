"use client";

import { Eye, Pencil, Plus, Trash } from "lucide-react";
import Tabela from "./tabela";

export default function Admin() {
  return (
    <div>
      <div className="flex flex-row gap-5 w-full">
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
