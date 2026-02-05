"use client";

import Image from "next/image";
import { Target } from "lucide-react";
import { Eye } from "lucide-react";
import { Heart } from "lucide-react";

export default function SobreNos() {
  return (
    <div className="flex flex-col gap-16 items-center px-18 pb-12 pt-12 bg-azul font-jetbrains">
      <div className="flex flex-row gap-20 font-extrabold">
        <div className="flex flex-col text-azul-claro w-1/2 gap-6 text-center">
          <h1 className="text-5xl">Sobre nós</h1>
          <p className="text-2xl text-justify font-light">
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
        <div className="w-1/2 flex items-center">
          <Image
            src={"/logo/sobre-nos.png"}
            alt="Img"
            width={904}
            height={904}
            className="h-100 w-140 rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between gap-25">
        <div className="flex flex-col gap-10 justify-center text-center  drop-shadow-black drop-shadow-lg text-azul-escuro bg-azul-medio w-1/3 p-8 pt-2 rounded-xl items-center">
          <h1 className="font-extrabold text-4xl">Missão</h1>
          <p className="font-normal text-xl">
            Oferecer camisas com qualidade e autenticidade, levando ao torcedor
            a oportunidade de vestir sua paixão com estilo, segurança e
            confiança em cada compra.
          </p>
          <div className="bg-azul-escuro rounded-full p-4 w-21 h-21 flex items-center">
            <Target className="mx-auto h-16 w-16 text-azul-claro" />
          </div>
        </div>
        <div className="flex flex-col gap-10 text-center justify-center drop-shadow-black drop-shadow-lg text-azul-escuro bg-azul-medio w-1/3 p-8 pt-2 rounded-xl items-center">
          <h1 className="font-extrabold text-4xl">Visão</h1>
          <p className="font-normal text-xl">
            Ser referência nacional em venda de camisas esportivas, reconhecida
            pela qualidade dos produtos, excelência no atendimento e pela
            confiança construída com cada cliente.
          </p>
          <div className="bg-azul-escuro rounded-full p-4 w-21 h-21 flex items-center">
            <Eye className="mx-auto h-16 w-16 text-azul-claro" />
          </div>
        </div>
        <div className="flex flex-col gap-10 text-center justify-center drop-shadow-black drop-shadow-lg text-azul-escuro bg-azul-medio w-1/3 p-8 pt-12 pb-12 rounded-xl items-center">
          <h1 className="font-extrabold text-4xl">Valores</h1>
          <p className="font-normal text-xl">
            Paixão pelo futebol, compromisso com a qualidade, confiança e
            transparência em cada compra, atendimento rápido e humano, respeito
            ao cliente em todas as etapas, responsabilidade no envio dos pedidos
            e evolução constante para oferecer sempre a melhor experiência
            possível.
          </p>
          <div className="bg-azul-escuro rounded-full p-4 w-21 h-21 flex items-center">
            <Heart className="mx-auto h-16 w-16 text-azul-claro" />
          </div>
        </div>
      </div>
    </div>
  );
}
