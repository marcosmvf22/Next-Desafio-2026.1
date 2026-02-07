"use client";

import Mapa from "./mapa";

export default function Contato() {
  return (
    <div className="flex flex-col bg-azul-escuro font-jetbrains text-azul-escuro gap-16 px-18 pb-20 pt-12">
      <h1 className="text-azul-claro text-5xl text-center font-bold">
        Contato
      </h1>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-4 w-full">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nome"
              className="bg-azul-claro border-azul-escuro rounded-md w-full p-2"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-azul-claro border-azul-escuro rounded-md w-full p-2"
            />
            <input
              type="text"
              placeholder="Assunto"
              className="bg-azul-claro border-azul-escuro rounded-md w-full p-2"
            />
          </form>
          <form className="flex flex-col gap-4 h-60">
            <textarea
              placeholder="Mensagem"
              className="bg-azul-claro border-azul-escuro rounded-md w-full h-full p-2 text-left"
            />
          </form>
        </div>
        <Mapa />
      </div>
    </div>
  );
}
