"use client"

import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  price: string;
  description: string;
}

export default function Card({ image, title, price, description }: CardProps) {
  return (
    <div className="bg-azul-claro mx-auto w-full py-8 pb-4 px-4 flex flex-col items-center gap-4 rounded-xl">
        <div>
            <Image
                src={image}
                alt='Logo do blog'
                width={904}
                height={904}
                className="h-60 w-60 rounded-xl"
            />
        </div>
        <div className="flex flex-col items-center text-azul-escuro pb-4 text-md font-normal">
            <p>{title}</p>
        </div>
        <div className="flex flex-col items-center text-azul-escuro pb-4 text-md font-extrabold">
            <p>{price}</p>
        </div>
        <div className="flex flex-col items-center text-azul-escuro pb-4 text-md font-bold">
            <p>{description}</p>
        </div>
    </div>
  );
}