"use client";

import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  price: number;
}

export default function Card({ image, title, price }: CardProps) {
  return (
    <div className="bg-azul-claro mx-auto w-full h-full py-8 pb-4 px-4 flex flex-col gap-4 rounded-xl items-center">
      <div>
        <Image
          src={image}
          alt="Logo do blog"
          width={904}
          height={904}
          className="h-60 w-60 rounded-xl"
        />
      </div>
      <div className="flex flex-col items-center text-azul-escuro pb-4 text-md font-normal text-center">
        <p>{title}</p>
      </div>
      <div className="flex flex-col mt-auto items-center text-azul-escuro pb-4 text-md font-extrabold">
        <p>R$ {Number(price).toFixed(2)}</p>
      </div>
    </div>
  );
}
