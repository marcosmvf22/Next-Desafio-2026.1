"use client";

import Image from "next/image";
import { MinusCircle, PlusCircle } from "lucide-react";

interface CarrinhoProps {
  id: string;
  image: string;
  title: string;
  size: string;
  quantity: number;
  price: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CardCarrinho({
  id,
  image,
  title,
  size,
  quantity,
  price,
  onUpdateQuantity,
  onRemove,
}: CarrinhoProps) {
  const formattedPrice = (price * quantity).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="flex flex-col p-5 gap-4 bg-azul-claro rounded-lg w-full font-jetbrains">
      <div className="flex flex-row gap-5 items-center text-xl">
        <Image
          src={image}
          alt="imagem do produto"
          width={80}
          height={80}
          className="w-25 h-25 rounded-lg object-cover"
        />
        <div className="flex flex-col p-3 gap-3">
          <h1>{title}</h1>
          <p>Tamanho: {size}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center px-3">
        <p className="flex flex-row items-center">
          Quantidade:
          <MinusCircle
            className="mx-2 cursor-pointer hover:text-azul-medio transition"
            onClick={() => onUpdateQuantity(id, quantity - 1)}
          />
          {quantity}
          <PlusCircle
            className="mx-2 cursor-pointer hover:text-azul-medio transition"
            onClick={() => onUpdateQuantity(id, quantity + 1)}
          />
        </p>
        <p className="font-extrabold">{formattedPrice}</p>
      </div>
      <div className="flex flex-row justify-end">
        <button
          onClick={() => onRemove(id)}
          className="text-azul-escuro font-bold underline hover:text-red-500 cursor-pointer transition"
        >
          Remover
        </button>
      </div>
    </div>
  );
}
