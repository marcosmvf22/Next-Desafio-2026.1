"use client";

import { Modal } from "../modal";

interface ModalExcluirProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function ModalExcluir({
  isOpen,
  onClose,
  onConfirm,
}: ModalExcluirProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-semibold text-azul-escuro text-center mb-6">
        Deseja realmente deletar?
      </h2>

      <div className="flex gap-4">
        <button
          onClick={onClose}
          className="w-full border border-gray-400 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition cursor-pointer"
        >
          Cancelar
        </button>

        <button
          onClick={onConfirm}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-800 transition cursor-pointer"
        >
          Deletar
        </button>
      </div>
    </Modal>
  );
}