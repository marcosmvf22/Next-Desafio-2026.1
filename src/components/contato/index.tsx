"use client";

import Mapa from "./mapa";

export default function Contato() {
  return (
    <div className="flex flex-col bg-azul-escuro font-jetbrains text-azul-escuro gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-8 md:px-12 lg:px-18 pb-12 sm:pb-16 lg:pb-20 pt-8 sm:pt-10 lg:pt-12">
      <h1 className="text-azul-claro text-3xl sm:text-4xl lg:text-5xl text-center font-bold">
        Contato
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-1/2">
          <form className="flex flex-col gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Nome"
              className="bg-azul-claro border-azul-escuro rounded-md w-full p-2 sm:p-3 text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-azul-claro border-azul-escuro rounded-md w-full p-2 sm:p-3 text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Assunto"
              className="bg-azul-claro border-azul-escuro rounded-md w-full p-2 sm:p-3 text-sm sm:text-base"
            />
          </form>
          <form className="flex flex-col gap-3 sm:gap-4 h-40 sm:h-52 lg:h-60">
            <textarea
              placeholder="Mensagem"
              className="bg-azul-claro border-azul-escuro rounded-md w-full h-full p-2 sm:p-3 text-left text-sm sm:text-base resize-none"
            />
          </form>
          <button className="bg-azul-medio text-azul-escuro font-bold rounded-md flex justify-center w-full p-2 sm:p-3 text-sm sm:text-base hover:bg-azul-claro transition">
            <p>Enviar</p>
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <Mapa />
        </div>
      </div>
    </div>
  );
}
