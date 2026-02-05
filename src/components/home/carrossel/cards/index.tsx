"use client"

import Image from "next/image";

interface CardProps {
  image: string;
  description: string;
  price: string;
}

export default function Card({ image, description, price }: CardProps) {
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
            <p>{description}</p>
        </div>
        <div className="flex flex-col items-center text-azul-escuro pb-4 text-md font-bold">
            <p>{price}</p>

        </div>
    </div>
  );
}