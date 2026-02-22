"use client";

import { Modal } from "../modal";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { UpdateProduto } from "@/actions/admin/action";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";

type Produto = {
  id: number;
  principalImage: string;
  title: string;
  price: number;
  description: string;
};

interface ModalEditarProps {
  isOpen: boolean;
  onClose: () => void;
  produto: Produto;
}

export function ModalEditar({ isOpen, onClose, produto }: ModalEditarProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: produto.title,
    price: String(produto.price),
    description: produto.description,
    principalImage: produto.principalImage,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFormData({
      title: produto.title,
      price: String(produto.price),
      description: produto.description,
      principalImage: produto.principalImage,
    });
  }, [produto]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, principalImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.price || !formData.description) {
      alert("Preencha todos os campos!");
      return;
    }

    setIsLoading(true);
    try {
      await UpdateProduto(produto.id, {
        title: formData.title,
        description: formData.description,
        price: parseFloat(formData.price.replace(",", ".")),
        principalImage: formData.principalImage,
      });
      onClose();
      router.refresh();
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      alert("Erro ao atualizar produto!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-semibold text-azul-escuro mb-6 font-jetbrains">
        Editar Produto #{produto.id}
      </h2>

      <div className="flex flex-col gap-4 font-jetbrains">
        {/* Nome */}
        <div>
          <label className="text-sm text-azul-escuro">Nome</label>
          <input
            type="text"
            placeholder="Nome"
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
          <label className="text-sm text-azul-escuro">Descrição</label>
          <textarea
            placeholder="Descrição"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full mt-1 px-3 py-2 rounded-lg border border-azul-medio focus:outline-none focus:ring-2 focus:ring-azul resize-none"
          />
        </div>

        {/* Upload de Imagem */}
        <div className="flex flex-col items-center mt-2">
          <span className="text-sm text-azul-escuro mb-2">Imagem do Produto</span>
          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
          
          <div className="relative">
            <Image
              src={formData.principalImage || "/logo/camisa1.png"}
              alt="Preview"
              width={150}
              height={150}
              className="object-contain rounded-lg"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="mt-2 flex items-center gap-2 px-4 py-2 bg-azul-medio text-azul-escuro rounded-lg hover:bg-azul-claro transition"
            >
              <Upload size={16} />
              Trocar Imagem
            </button>
          </div>
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
            {isLoading ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </div>
    </Modal>
  );
}