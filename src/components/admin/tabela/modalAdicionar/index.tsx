"use client";

import { Modal } from "../modal";
import Image from "next/image";
import { useState } from "react";
import { CreateProduto } from "@/actions/admin/action";
import { useRouter } from "next/navigation";

interface ModalAdicionarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalAdicionar({ isOpen, onClose }: ModalAdicionarProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    principalImage: "/logo/camisa1.png",
  });

  const handleSubmit = async () => {
    if (!formData.title || !formData.price || !formData.description) {
      alert("Preencha todos os campos!");
      return;
    }

    setIsLoading(true);
    try {
      await CreateProduto({
        title: formData.title,
        description: formData.description,
        price: parseFloat(formData.price.replace(",", ".")),
        principalImage: formData.principalImage,
      });
      setFormData({ title: "", price: "", description: "", principalImage: "/logo/camisa1.png" });
      onClose();
      router.refresh();
    } catch (error) {
      console.error("Erro ao criar produto:", error);
      alert("Erro ao criar produto!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-semibold text-azul-escuro mb-6 font-jetbrains">
        Adicionar
      </h2>

      <div className="flex flex-col gap-4 font-jetbrains">
        {/* Nome */}
        <div>
          <label className="text-sm text-azul-escuro">Nome</label>
          <input
            type="text"
            placeholder="Nome do produto"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full mt-1 px-3 py-2 rounded-lg border border-azul-medio focus:outline-none focus:ring-2 focus:ring-azul"
          />
        </div>

        {/* Preço */}
        <div>
          <label className="text-sm text-azul-escuro">Preço</label>
          <input
            type="text"
            placeholder="161.49"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="w-full mt-1 px-3 py-2 rounded-lg border border-azul-medio focus:outline-none focus:ring-2 focus:ring-azul"
          />
        </div>

        {/* Descrição */}
        <div>
          <label className="text-sm text-blue-900">Descrição</label>
          <textarea
            placeholder="Descrição do produto"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full mt-1 px-3 py-2 rounded-lg border border-azul-medio focus:outline-none focus:ring-2 focus:ring-azul resize-none"
          />
        </div>

        {/* Imagem */}
        <div>
          <label className="text-sm text-azul-escuro">URL da Imagem</label>
          <input
            type="text"
            placeholder="/logo/camisa1.png"
            value={formData.principalImage}
            onChange={(e) => setFormData({ ...formData, principalImage: e.target.value })}
            className="w-full mt-1 px-3 py-2 rounded-lg border border-azul-medio focus:outline-none focus:ring-2 focus:ring-azul"
          />
        </div>

        {/* Preview da Imagem */}
        <div className="flex flex-col items-center mt-2">
          <span className="text-sm text-azul-escuro mb-2">Preview</span>
          <Image
            src={formData.principalImage || "/logo/camisa1.png"}
            alt="Preview"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Botões */}
        <div className="flex justify-between mt-6 gap-4">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="w-full border bg-white border-azul text-azul py-2 rounded-lg hover:bg-azul-claro transition cursor-pointer disabled:opacity-50"
          >
            Cancelar
          </button>

          <button 
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-azul text-white py-2 rounded-lg hover:bg-azul-escuro transition cursor-pointer disabled:opacity-50"
          >
            {isLoading ? "Adicionando..." : "Adicionar"}
          </button>
        </div>
      </div>
    </Modal>
  );
}
