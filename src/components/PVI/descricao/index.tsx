"use client";

import { PostIndividual } from "@/types/data";

export default function DescricaoPVI({post}: {post:  PostIndividual }) {
  return (
    <div className="flex flex-col gap-5 font-jetbrains text-azul-escuro px-5 py-10">
      <h1 className="text-3xl font-bold">Descrição do produto</h1>
      <p className="text-xl font-normal text-justify">
        {post?.description}
      </p>
    </div>
  );
}
