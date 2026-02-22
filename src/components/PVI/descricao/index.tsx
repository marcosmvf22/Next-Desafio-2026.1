"use client";

import { PostIndividual } from "@/types/data";

export default function DescricaoPVI({post}: {post:  PostIndividual }) {
  return (
    <div className="flex flex-col gap-3 sm:gap-5 font-jetbrains text-azul-escuro px-4 sm:px-8 md:px-5 py-6 md:py-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Descrição do produto</h1>
      <p className="text-base sm:text-lg md:text-xl font-normal text-justify">
        {post?.description}
      </p>
    </div>
  );
}
