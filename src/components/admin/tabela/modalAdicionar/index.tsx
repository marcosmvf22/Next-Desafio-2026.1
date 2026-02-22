"use client";

import { Modal } from "../modal";
import Image from "next/image";
import { useState, useRef } from "react";
import { CreateProduto } from "@/actions/admin/action";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";

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
    principalImage: "",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    if (!formData.title || !formData.price || !formData.description || !formData.principalImage) {
      alert("Preencha todos os campos e adicione uma imagem!");
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
      setFormData({ title: "", price: "", description: "", principalImage: "" });
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
            placeholder="Preço"
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
          
          {formData.principalImage ? (
            <div className="relative flex flex-col items-center">
              <Image
                src={formData.principalImage}
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
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex flex-col items-center justify-center gap-2 w-40 h-40 border-2 border-dashed border-azul-medio rounded-lg hover:border-azul hover:bg-azul-claro/20 transition cursor-pointer"
            >
              <Upload size={32} className="text-azul-escuro" />
              <span className="text-sm text-azul-escuro">Upload Imagem</span>
            </button>
          )}
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
