"use client";

import Image from "next/image";
import { Target } from "lucide-react";
import { Eye } from "lucide-react";
import { Heart } from "lucide-react";

export default function SobreNos() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 items-center px-4 sm:px-8 md:px-12 lg:px-18 pb-8 sm:pb-10 md:pb-12 pt-8 sm:pt-10 md:pt-12 bg-azul font-jetbrains">
      <div className="flex flex-col xl:flex-row gap-8 md:gap-12 lg:gap-20 font-extrabold">
        <div className="flex flex-col text-azul-claro w-full xl:w-1/2 gap-4 sm:gap-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Sobre nós</h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-justify font-light">
            A BlueStars nasceu da paixão pelo futebol e do orgulho de vestir as
            cores que representam história, tradição e emoção. Somos um
            e-commerce especializado na venda de camisas, criado para atender
            torcedores que querem se sentir representados dentro e fora do
            estádio. Acreditamos que uma camisa vai muito além de tecido: ela
            carrega identidade, momentos inesquecíveis e a energia de quem vive
            cada jogo com o coração. Por isso, nosso compromisso é oferecer
            camisas com qualidade, estilo e conforto, garantindo uma experiência
            de compra segura, prática e com atendimento de verdade. Aqui, cada
            pedido é preparado com cuidado, pois entendemos o significado de
            vestir a paixão.
          </p>
        </div>
        <div className="w-full xl:w-1/2 flex items-center justify-center">
          <Image
            src={"/logo/sobre-nos.png"}
            alt="Img"
            width={904}
            height={904}
            className="h-48 w-64 sm:h-64 sm:w-80 md:h-80 md:w-100 lg:h-100 lg:w-140 rounded-xl object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-25 w-full">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 justify-center text-center drop-shadow-black drop-shadow-lg text-azul-escuro bg-azul-medio w-full min-[1440px]:w-1/3 p-4 sm:p-6 md:p-8 pt-2 rounded-xl items-center">
          <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Missão</h1>
          <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl">
            Oferecer camisas com qualidade e autenticidade, levando ao torcedor
            a oportunidade de vestir sua paixão com estilo, segurança e
            confiança em cada compra.
          </p>
          <div className="bg-azul-escuro rounded-full p-2 sm:p-3 md:p-4 w-12 h-12 sm:w-16 sm:h-16 md:w-21 md:h-21 flex items-center">
            <Target className="mx-auto h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 text-azul-claro" />
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 text-center justify-center drop-shadow-black drop-shadow-lg text-azul-escuro bg-azul-medio w-full min-[1440px]:w-1/3 p-4 sm:p-6 md:p-8 pt-2 rounded-xl items-center">
          <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Visão</h1>
          <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl">
            Ser referência nacional em venda de camisas esportivas, reconhecida
            pela qualidade dos produtos, excelência no atendimento e pela
            confiança construída com cada cliente.
          </p>
          <div className="bg-azul-escuro rounded-full p-2 sm:p-3 md:p-4 w-12 h-12 sm:w-16 sm:h-16 md:w-21 md:h-21 flex items-center">
            <Eye className="mx-auto h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 text-azul-claro" />
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 text-center justify-center drop-shadow-black drop-shadow-lg text-azul-escuro bg-azul-medio w-full min-[1440px]:w-1/3 p-4 sm:p-6 md:p-8 pt-6 sm:pt-8 md:pt-12 pb-6 sm:pb-8 md:pb-12 rounded-xl items-center">
          <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Valores</h1>
          <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl">
            Paixão pelo futebol, compromisso com a qualidade, confiança e
            transparência em cada compra, atendimento rápido e humano, respeito
            ao cliente em todas as etapas, responsabilidade no envio dos pedidos
            e evolução constante para oferecer sempre a melhor experiência
            possível.
          </p>
          <div className="bg-azul-escuro rounded-full p-2 sm:p-3 md:p-4 w-12 h-12 sm:w-16 sm:h-16 md:w-21 md:h-21 flex items-center">
            <Heart className="mx-auto h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 text-azul-claro" />
          </div>
        </div>
      </div>
    </div>
  );
}
