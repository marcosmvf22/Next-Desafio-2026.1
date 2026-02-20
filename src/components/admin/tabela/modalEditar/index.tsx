"use client";

import { Modal } from "../modal";
import Image from "next/image";

interface ModalEditarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalEditar({ isOpen, onClose }: ModalEditarProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-semibold text-azul-escuro mb-6 font-jetbrains">
        Editar
      </h2>

      <div className="flex flex-col gap-4 font-jetbrains">
        {/* Nome */}
        <div>
          <label className="text-sm text-azul-escuro">Nome</label>
          <input
            type="text"
            placeholder="Nome"
            defaultValue="Camisa Cruzeiro"
            className="w-full mt-1 px-3 py-2 rounded-lg border border-azul-medio focus:outline-none focus:ring-2 focus:ring-azul"
          />
        </div>

        {/* Preço */}
        <div>
          <label className="text-sm azul-escuro">Preço</label>
          <input
            type="text"
            placeholder="R$ 161,49"
            defaultValue="R$ 69,90"
            className="w-full mt-1 px-3 py-2 rounded-lg border border-azul-medio focus:outline-none focus:ring-2 focus:ring-azul"
          />
        </div>

        {/* Descrição */}
        <div>
          <label className="text-sm azul-escuro">Descrição</label>
          <textarea
            placeholder="Descrição"
            defaultValue="Camisa Cruzeiro super confortável, feita com tecido de alta qualidade e design moderno."
            rows={4}
            className="w-full mt-1 px-3 py-2 rounded-lg border border-azul-medio focus:outline-none focus:ring-2 focus:ring-azul resize-none"
          />
        </div>

        {/* Imagem */}
        <div className="flex flex-col items-center mt-2">
          <span className="text-sm azul-escuro mb-2">Imagem</span>
          <Image
            src="/camisa.png"
            alt="Camisa"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Botões */}
        <div className="flex justify-between mt-6 gap-4">
          <button
            onClick={onClose}
            className="w-full border bg-white border-azul text-azul py-2 rounded-lg hover:bg-azul-claro transition cursor-pointer"
          >
            Cancelar
          </button>

          <button
            className="w-full bg-azul text-white py-2 rounded-lg hover:bg-azul-escuro transition cursor-pointer"
          >
            Salvar
          </button>
        </div>
      </div>
    </Modal>
  );
}