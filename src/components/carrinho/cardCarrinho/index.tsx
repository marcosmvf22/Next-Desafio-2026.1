"use client";

import Image from "next/image";
import { MinusCircle, PlusCircle } from "lucide-react";

interface CarrinhoProps {
  image: string;
  title: string;
  size: string;
  quantity: number;
  price: string;
}

export default function CardCarrinho({
  image,
  title,
  size,
  quantity,
  price,
}: CarrinhoProps) {
  return (
    <div className="flex flex-col p-5 gap-4 bg-azul-claro rounded-lg w-1/3 font-jetbrains">
      <div className="flex flex-row gap-5 items-center text-xl">
        <Image
          src={image}
          alt="imgem do produto"
          width={80}
          height={80}
          className="w-25 h-25 rounded-lg"
        />
        <div className="flex flex-col p-3 gap-3">
          <h1>{title}</h1>
          <p>Tamanho: {size}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center px-3">
        <p className="flex flex-row">
          Quantidade:
          <MinusCircle className="mx-2 cursor-pointer" />
          {quantity}
          <PlusCircle className="mx-2 cursor-pointer" />
        </p>
        <p className="font-extrabold">{price}</p>
      </div>
      <div className="flex flex-row justify-end">
        <button className="text-azul-escuro font-bold underline hover:text-azul-medio">
          Remover
        </button>
        </div>
    </div>
  );
}
