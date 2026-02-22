"use client"

import { PageProduct } from "@/types/data";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
    post: PageProduct
}

export default function Card({ post }: CardProps) {
  return (
    <Link href={`/pvi/${post.id}`} className="w-full h-full">
    <div className="bg-azul-claro mx-auto w-full py-6 sm:py-8 pb-4 px-3 sm:px-4 flex flex-col items-center gap-3 sm:gap-4 rounded-xl hover:scale-105 transition-transform">
        <div>
            <Image
                src={post.principalImage}
                alt='Logo do blog'
                width={904}
                height={904}
                className="h-40 w-40 sm:h-48 sm:w-48 lg:h-60 lg:w-60 rounded-xl object-cover"
            />
        </div>
        <div className="flex flex-col items-center text-azul-escuro pb-2 sm:pb-4 text-sm sm:text-md font-normal text-center">
            <p>{post.title}</p>
        </div>
        <div className="flex flex-col items-center text-azul-escuro pb-2 sm:pb-4 text-sm sm:text-md font-extrabold">
            <p>R$ {Number(post.price).toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-center text-azul-escuro pb-2 sm:pb-4 text-xs sm:text-md font-bold text-center line-clamp-2">
            <p>{post.description}</p>
        </div>
    </div>
    </Link>
  );
}