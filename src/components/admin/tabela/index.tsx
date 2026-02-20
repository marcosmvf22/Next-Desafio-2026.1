"use client";

import { useState } from "react";
import { Eye, Pencil, Trash } from "lucide-react";
import { ModalExcluir } from "./modalExcluir";
import { ModalVisualizar } from "./modalVisualizar";
import { ModalEditar } from "./modalEditar";

export default function Tabela() {
  const [isModalExcluirOpen, setIsModalExcluirOpen] = useState(false);
  const [isModalVisualizarOpen, setIsModalVisualizarOpen] = useState(false);
  const [isModalEditarOpen, setIsModalEditarOpen] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden">
        <table className="w-full text-sm text-left font-jetbrains bg-azul-medio">
          <thead className="text-azul-claro bg-azul-escuro">
            <tr>
              <th scope="col" className="text-left text-sm px-6 py-4 w-1/12">
                ID
              </th>
              <th scope="col" className="text-left text-sm px-6 py-4 w-3/12">
                Nome
              </th>
              <th scope="col" className="text-left text-sm px-6 py-4 w-2/12">
                Preço
              </th>
              <th scope="col" className="text-left text-sm px-6 py-4 w-4/12">
                Descrição
              </th>
              <th scope="col" className="text-left text-sm px-6 py-4 w-2/12">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="text-azul-escuro">
            {/* Primeiro dado*/}
            <tr className="border-b bg-azul-medio">
              <th className="px-6 py-4">1</th>
              <th className="px-6 py-4">
                <span className="hover:underline">
                  {"Camisa Cruzeiro super confortável, feita com tecido de alta qualidade e design moderno, perfeita para os torcedores do Cruzeiro que desejam mostrar seu amor pelo time com estilo e conforto.".slice(
                    0,
                    20,
                  ) + "..."}
                </span>
              </th>
              <th className="px-6 py-4">R$69,90</th>
              <th className="px-6 py-4">
                <span className="hover:underline">
                  {"Camisa Cruzeiro super confortável, feita com tecido de alta qualidade e design moderno, perfeita para os torcedores do Cruzeiro que desejam mostrar seu amor pelo time com estilo e conforto.".slice(
                    0,
                    32,
                  ) + "..."}
                </span>
              </th>
              <th className="px-6 py-4">
                <div className="flex flex-row gap-2">
                  <button 
                    className="bg-azul-escuro p-2 rounded-lg"
                    onClick={() => setIsModalVisualizarOpen(true)}
                  >
                    <Eye className="w-5 h-5 cursor-pointer text-azul-claro" />
                  </button>
                  <button 
                    className="bg-azul-escuro p-2 rounded-lg"
                    onClick={() => setIsModalEditarOpen(true)}
                  >
                    <Pencil className="w-5 h-5 cursor-pointer text-azul-claro" />
                  </button>
                  <button 
                    className="bg-azul-escuro p-2 rounded-lg"
                    onClick={() => setIsModalExcluirOpen(true)}
                  >
                    <Trash className="w-5 h-5 cursor-pointer text-azul-claro" />
                  </button>
                  <ModalVisualizar 
                    isOpen={isModalVisualizarOpen} 
                    onClose={() => setIsModalVisualizarOpen(false)} 
                  />
                  <ModalEditar 
                    isOpen={isModalEditarOpen} 
                    onClose={() => setIsModalEditarOpen(false)} 
                  />
                  <ModalExcluir 
                    isOpen={isModalExcluirOpen} 
                    onClose={() => setIsModalExcluirOpen(false)} 
                    onConfirm={() => setIsModalExcluirOpen(false)} 
                  />
                </div>
              </th>
            </tr>
            {/* Primeiro dado*/}
            {/* Segundo dado*/}
            <tr className="border-b bg-azul-medio">
              <th className="px-6 py-4">2</th>
              <th className="px-6 py-4">
                <span className="hover:underline">
                  {"Camisa Cruzeiro super confortável, feita com tecido de alta qualidade e design moderno, perfeita para os torcedores do Cruzeiro que desejam mostrar seu amor pelo time com estilo e conforto.".slice(
                    0,
                    20,
                  ) + "..."}
                </span>
              </th>
              <th className="px-6 py-4">R$69,90</th>
              <th className="px-6 py-4">
                <span className="hover:underline">
                  {"Camisa Cruzeiro super confortável, feita com tecido de alta qualidade e design moderno, perfeita para os torcedores do Cruzeiro que desejam mostrar seu amor pelo time com estilo e conforto.".slice(
                    0,
                    32,
                  ) + "..."}
                </span>
              </th>
              <th className="px-6 py-4">
                <div className="flex flex-row gap-2">
                  <button className="bg-azul-escuro p-2 rounded-lg">
                    <Eye className="w-5 h-5 cursor-pointer text-azul-claro" />
                  </button>
                  <button className="bg-azul-escuro p-2 rounded-lg">
                    <Pencil className="w-5 h-5 cursor-pointer text-azul-claro" />
                  </button>
                  <button className="bg-azul-escuro p-2 rounded-lg">
                    <Trash className="w-5 h-5 cursor-pointer text-azul-claro" />
                  </button>
                </div>
              </th>
            </tr>
            {/* Segundo dado*/}
            {/* Terceiro dado*/}
            <tr className="border-b bg-azul-medio">
              <th className="px-6 py-4">3</th>
              <th className="px-6 py-4">
                <span className="hover:underline">
                  {"Camisa Cruzeiro super confortável, feita com tecido de alta qualidade e design moderno, perfeita para os torcedores do Cruzeiro que desejam mostrar seu amor pelo time com estilo e conforto.".slice(
                    0,
                    20,
                  ) + "..."}
                </span>
              </th>
              <th className="px-6 py-4">R$69,90</th>
              <th className="px-6 py-4">
                <span className="hover:underline">
                  {"Camisa Cruzeiro super confortável, feita com tecido de alta qualidade e design moderno, perfeita para os torcedores do Cruzeiro que desejam mostrar seu amor pelo time com estilo e conforto.".slice(
                    0,
                    32,
                  ) + "..."}
                </span>
              </th>
              <th className="px-6 py-4">
                <div className="flex flex-row gap-2">
                  <button className="bg-azul-escuro p-2 rounded-lg">
                    <Eye className="w-5 h-5 cursor-pointer text-azul-claro" />
                  </button>
                  <button className="bg-azul-escuro p-2 rounded-lg">
                    <Pencil className="w-5 h-5 cursor-pointer text-azul-claro" />
                  </button>
                  <button className="bg-azul-escuro p-2 rounded-lg">
                    <Trash className="w-5 h-5 cursor-pointer text-azul-claro" />
                  </button>
                </div>
              </th>
            </tr>
            {/* Terceiro dado*/}
          </tbody>
        </table>
      </div>
    );
}