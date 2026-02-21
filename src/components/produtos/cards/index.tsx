"use client"

import { PageProduct } from "@/types/data";
import Image from "next/image";

type CardProps = {
    post: PageProduct
}

export default function Card({ post }: CardProps) {
  return (
    <div className="bg-azul-claro mx-auto w-full py-8 pb-4 px-4 flex flex-col items-center gap-4 rounded-xl">
        <div>
            <Image
                src={post.principalImage}
                alt='Logo do blog'
                width={904}
                height={904}
                className="h-60 w-60 rounded-xl"
            />
        </div>
        <div className="flex flex-col items-center text-azul-escuro pb-4 text-md font-normal">
            <p>{post.title}</p>
        </div>
        <div className="flex flex-col items-center text-azul-escuro pb-4 text-md font-extrabold">
            <p>R$ {Number(post.price).toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-center text-azul-escuro pb-4 text-md font-bold">
            <p>{post.description}</p>
        </div>
    </div>
  );
}