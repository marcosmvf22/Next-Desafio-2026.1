"use client";

import { Modal } from "../modal";
import Image from "next/image";

interface ModalVisualizarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalVisualizar({ isOpen, onClose }: ModalVisualizarProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-semibold text-azul-escuro mb-6">
        Visualizar
      </h2>

      <div className="flex flex-col gap-4">
        {/* Nome */}
        <div>
          <label className="text-sm text-azul-escuro">Nome</label>
          <input
            type="text"
            value="Camisa Cruzeiro"
            disabled
            className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 cursor-not-allowed"
          />
        </div>

        {/* Preço */}
        <div>
          <label className="text-sm text-azul-escuro">Preço</label>
          <input
            type="text"
            value="R$ 69,90"
            disabled
            className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 cursor-not-allowed"
          />
        </div>

        {/* Descrição */}
        <div>
          <label className="text-sm text-azul-escuro">Descrição</label>
          <textarea
            value="Camisa Cruzeiro super confortável, feita com tecido de alta qualidade e design moderno."
            disabled
            rows={4}
            className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 cursor-not-allowed resize-none"
          />
        </div>

        {/* Imagem */}
        <div className="flex flex-col items-center mt-2">
          <span className="text-sm text-azul-escuro mb-2">Imagem</span>
          <Image
            src="/camisa.png"
            alt="Camisa"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Botão */}
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="w-full bg-azul text-white py-2 rounded-lg hover:bg-azul-escuro transition cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </Modal>
  );
}
