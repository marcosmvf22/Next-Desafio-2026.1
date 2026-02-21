"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductHome } from "@/types/home/home";

type CardProps = {
  post: ProductHome;
};

export default function Card({ post }: CardProps) {
  return (
    <Link href={`/pvi?id=${post.id}`} className="w-full h-full">
      <div className="bg-azul-claro mx-auto w-full h-full py-8 pb-4 px-4 flex flex-col gap-4 rounded-xl items-center">
        <div>
          <Image
            src={post.principalImage}
            alt="Logo do blog"
            width={904}
            height={904}
            className="h-60 w-60 rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center text-azul-escuro pb-4 text-md font-normal text-center">
          <p>{post.title}</p>
        </div>
        <div className="flex flex-col mt-auto items-center text-azul-escuro pb-4 text-md font-extrabold">
          <p>R$ {Number(post.price).toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}
