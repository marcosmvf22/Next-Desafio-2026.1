"use client";

import { useState } from "react";
import { Eye, Pencil, Trash } from "lucide-react";
import { ModalExcluir } from "./modalExcluir";
import { ModalVisualizar } from "./modalVisualizar";
import { ModalEditar } from "./modalEditar";

type Produto = {
  id: number;
  principalImage: string;
  title: string;
  price: number;
  description: string;
};

type TabelaProps = {
  produtos: Produto[];
};

export default function Tabela({ produtos }: TabelaProps) {
  const [isModalExcluirOpen, setIsModalExcluirOpen] = useState(false);
  const [isModalVisualizarOpen, setIsModalVisualizarOpen] = useState(false);
  const [isModalEditarOpen, setIsModalEditarOpen] = useState(false);
  const [selectedProduto, setSelectedProduto] = useState<Produto | null>(null);

  const handleVisualizar = (produto: Produto) => {
    setSelectedProduto(produto);
    setIsModalVisualizarOpen(true);
  };

  const handleEditar = (produto: Produto) => {
    setSelectedProduto(produto);
    setIsModalEditarOpen(true);
  };

  const handleExcluir = (produto: Produto) => {
    setSelectedProduto(produto);
    setIsModalExcluirOpen(true);
  };

  return (
    <div className="rounded-xl overflow-x-auto">
      <table className="w-full min-w-[700px] text-sm text-left font-jetbrains bg-azul-medio">
        <thead className="text-azul-claro bg-azul-escuro">
          <tr>
            <th scope="col" className="text-left text-xs sm:text-sm px-3 sm:px-6 py-3 sm:py-4 w-1/12">
              ID
            </th>
            <th scope="col" className="text-left text-xs sm:text-sm px-3 sm:px-6 py-3 sm:py-4 w-3/12">
              Nome
            </th>
            <th scope="col" className="text-left text-xs sm:text-sm px-3 sm:px-6 py-3 sm:py-4 w-2/12">
              Preço
            </th>
            <th scope="col" className="text-left text-xs sm:text-sm px-3 sm:px-6 py-3 sm:py-4 w-4/12">
              Descrição
            </th>
            <th scope="col" className="text-left text-xs sm:text-sm px-3 sm:px-6 py-3 sm:py-4 w-2/12">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="text-azul-escuro text-xs sm:text-sm">
          {produtos.map((produto) => (
            <tr key={produto.id} className="border-b bg-azul-medio">
              <th className="px-3 sm:px-6 py-3 sm:py-4">{produto.id}</th>
              <th className="px-3 sm:px-6 py-3 sm:py-4">
                <span className="hover:underline">
                  {produto.title.length > 20
                    ? produto.title.slice(0, 20) + "..."
                    : produto.title}
                </span>
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-4">
                R$ {Number(produto.price).toFixed(2)}
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-4">
                <span className="hover:underline">
                  {produto.description.length > 32
                    ? produto.description.slice(0, 32) + "..."
                    : produto.description}
                </span>
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-4">
                <div className="flex flex-row gap-1 sm:gap-2">
                  <button
                    className="bg-azul-escuro p-1.5 sm:p-2 rounded-lg"
                    onClick={() => handleVisualizar(produto)}
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer text-azul-claro" />
                  </button>
                  <button
                    className="bg-azul-escuro p-1.5 sm:p-2 rounded-lg"
                    onClick={() => handleEditar(produto)}
                  >
                    <Pencil className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer text-azul-claro" />
                  </button>
                  <button
                    className="bg-azul-escuro p-1.5 sm:p-2 rounded-lg"
                    onClick={() => handleExcluir(produto)}
                  >
                    <Trash className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer text-azul-claro" />
                  </button>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProduto && (
        <>
          <ModalVisualizar
            isOpen={isModalVisualizarOpen}
            onClose={() => {
              setIsModalVisualizarOpen(false);
              setSelectedProduto(null);
            }}
            produto={selectedProduto}
          />
          <ModalEditar
            isOpen={isModalEditarOpen}
            onClose={() => {
              setIsModalEditarOpen(false);
              setSelectedProduto(null);
            }}
            produto={selectedProduto}
          />
          <ModalExcluir
            isOpen={isModalExcluirOpen}
            onClose={() => {
              setIsModalExcluirOpen(false);
              setSelectedProduto(null);
            }}
            produto={selectedProduto}
          />
        </>
      )}
    </div>
  );
}
