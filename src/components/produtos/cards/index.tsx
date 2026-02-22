"use client"

import { PageProduct } from "@/types/data";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
    post: PageProduct
}

export default function Card({ post }: CardProps) {
  const truncatedTitle = post.title.length > 30 ? post.title.slice(0, 30) + "..." : post.title;
  const truncatedDescription = post.description.length > 80 ? post.description.slice(0, 80) + "..." : post.description;

  return (
    <Link href={`/pvi/${post.id}`} className="w-full h-full">
    <div className="bg-azul-claro mx-auto w-full h-full py-6 sm:py-8 pb-4 px-3 sm:px-4 flex flex-col items-center gap-3 sm:gap-4 rounded-xl hover:scale-105 transition-transform">
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
            <p>{truncatedTitle}</p>
        </div>
        <div className="flex flex-col items-center text-azul-escuro pb-2 sm:pb-4 text-sm sm:text-md font-extrabold">
            <p>R$ {Number(post.price).toFixed(2)}</p>
        </div>
        <div className="flex flex-col flex-grow items-center text-azul-escuro pb-2 sm:pb-4 text-xs sm:text-md font-bold text-center">
            <p>{truncatedDescription}</p>
        </div>
    </div>
    </Link>
  );
}