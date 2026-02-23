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
    <div className="flex flex-col p-3 sm:p-4 lg:p-5 gap-3 sm:gap-4 bg-azul-claro rounded-lg w-full font-jetbrains">
      <div className="flex flex-row gap-3 sm:gap-4 lg:gap-5 items-center text-sm sm:text-base lg:text-xl">
        <Image
          src={image}
          alt="imagem do produto"
          width={80}
          height={80}
          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-25 lg:h-25 rounded-lg object-cover flex-shrink-0"
        />
        <div className="flex flex-col p-1 sm:p-2 lg:p-3 gap-1 sm:gap-2 lg:gap-3">
          <h1 className="line-clamp-2">{title}</h1>
          <p>Tamanho: {size}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 px-1 sm:px-2 lg:px-3 text-sm sm:text-base">
        <p className="flex flex-row items-center">
          Quantidade:
          <MinusCircle
            className="mx-1 sm:mx-2 cursor-pointer hover:text-azul-medio transition w-5 h-5 sm:w-6 sm:h-6"
            onClick={() => onUpdateQuantity(id, quantity - 1)}
          />
          {quantity}
          <PlusCircle
            className="mx-1 sm:mx-2 cursor-pointer hover:text-azul-medio transition w-5 h-5 sm:w-6 sm:h-6"
            onClick={() => onUpdateQuantity(id, quantity + 1)}
          />
        </p>
        <p className="font-extrabold">{formattedPrice}</p>
      </div>
      <div className="flex flex-row justify-end">
        <button
          onClick={() => onRemove(id)}
          className="text-azul-escuro font-bold underline hover:text-red-500 cursor-pointer transition text-sm sm:text-base"
        >
          Remover
        </button>
      </div>
    </div>
  );
}
