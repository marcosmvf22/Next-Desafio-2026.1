"use client";

import { Modal } from "../modal";
import { useState } from "react";
import { DeleteProduto } from "@/actions/admin/action";
import { useRouter } from "next/navigation";

type Produto = {
  id: number;
  principalImage: string;
  title: string;
  price: number;
  description: string;
};

interface ModalExcluirProps {
  isOpen: boolean;
  onClose: () => void;
  produto: Produto;
}

export function ModalExcluir({ isOpen, onClose, produto }: ModalExcluirProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await DeleteProduto(produto.id);
      onClose();
      router.refresh();
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      alert("Erro ao deletar produto!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-semibold text-azul-escuro text-center mb-4">
        Deseja realmente deletar?
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Produto: <strong>{produto.title}</strong>
      </p>

      <div className="flex gap-4">
        <button
          onClick={onClose}
          disabled={isLoading}
          className="w-full border border-gray-400 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition cursor-pointer disabled:opacity-50"
        >
          Cancelar
        </button>

        <button
          onClick={handleDelete}
          disabled={isLoading}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-800 transition cursor-pointer disabled:opacity-50"
        >
          {isLoading ? "Deletando..." : "Deletar"}
        </button>
      </div>
    </Modal>
  );
}