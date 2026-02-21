"use client";

import { PostIndividual } from "@/types/data";

export default function DescricaoPVI({post}: {post:  PostIndividual }) {
  return (
    <div className="flex flex-col gap-5 font-jetbrains text-azul-escuro px-5 py-10">
      <h1 className="text-3xl font-bold">Descrição do produto</h1>
      <p className="text-xl font-normal text-justify">
        {post?.description}
      </p>
      {/* TALVEZ TIRE ISSO */}
      <div className="flex flex-row gap-10">
        {/* Coluna 1 */}
        <div className="flex flex-col gap-4 w-1/3">
          <p className="text-xl">
            <span className="font-bold">Nome:</span>{" "}
            <span className="font-normal">Camiseta Cruzeiro Dry Masculina</span>
          </p>

          <p className="text-xl">
            <span className="font-bold">Gênero:</span>{" "}
            <span className="font-normal">Masculino</span>
          </p>

          <p className="text-xl">
            <span className="font-bold">Composição:</span>{" "}
            <span className="font-normal">100% Poliéster</span>
          </p>

          <p className="text-xl">
            <span className="font-bold">Indicado para:</span>{" "}
            <span className="font-normal">Dia a Dia</span>
          </p>

          <p className="text-xl">
            <span className="font-bold">Clube:</span>{" "}
            <span className="font-normal">Nacional</span>
          </p>

          <p className="text-xl">
            <span className="font-bold">Time:</span>{" "}
            <span className="font-normal">Cruzeiro MG</span>
          </p>
        </div>

        {/* Coluna 2 */}
        <div className="flex flex-col gap-4 w-1/3">
          <p className="text-xl">
            <span className="font-bold">Manga:</span>{" "}
            <span className="font-normal">Manga Curta</span>
          </p>

          <p className="text-xl">
            <span className="font-bold">Gola:</span>{" "}
            <span className="font-normal">Gola Careca</span>
          </p>

          <p className="text-xl">
            <span className="font-bold">Material:</span>{" "}
            <span className="font-normal">Poliéster</span>
          </p>

          <p className="text-xl leading-relaxed">
            <span className="font-bold">Dimensões Aproximadas:</span>{" "}
            <span className="font-normal">
              Medidas da Peça (Tamanho M) - Ombro: 45 cm, Tórax: 110 cm,
              Comprimento: 70 cm
            </span>
          </p>
        </div>
        {/* Coluna 3 */}
        <div className="flex flex-col gap-4 w-1/3">
          <p className="text-xl">
            <span className="font-bold">Estilo da Peça:</span>{" "}
            <span className="font-normal">Com logo</span>
          </p>

          <p className="text-xl">
            <span className="font-bold">Garantia do Fabricante:</span>{" "}
            <span className="font-normal">Contra defeito de fabricação</span>
          </p>

          <p className="text-xl">
            <span className="font-bold">Origem:</span>{" "}
            <span className="font-normal">Nacional</span>
          </p>

          <p className="text-xl leading-relaxed">
            <span className="font-bold">Marca:</span>{" "}
            <span className="font-normal">
              Oldoni Sports
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
