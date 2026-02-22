"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductHome } from "@/types/home/home";

type CardProps = {
  post: ProductHome;
};

export default function Card({ post }: CardProps) {
  return (
    <Link href={`/pvi/${post.id}`} className="w-full h-full">
      <div className="bg-azul-claro mx-auto w-full h-full py-4 sm:py-6 md:py-8 pb-4 px-2 sm:px-3 md:px-4 flex flex-col gap-2 sm:gap-3 md:gap-4 rounded-xl items-center font-jetbrains">
        <div>
          <Image
            src={post.principalImage}
            alt="Logo do blog"
            width={904}
            height={904}
            className="h-32 w-32 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-60 lg:w-60 rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col items-center text-azul-escuro pb-2 sm:pb-3 md:pb-4 text-xs sm:text-sm md:text-md font-normal text-center">
          <p className="line-clamp-2">{post.title}</p>
        </div>
        <div className="flex flex-col mt-auto items-center text-azul-escuro pb-2 sm:pb-3 md:pb-4 text-sm sm:text-md font-extrabold">
          <p>R$ {Number(post.price).toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}
