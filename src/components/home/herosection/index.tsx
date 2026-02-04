"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-row justify-between items-center bg-azul-claro font-jetbrains py-15 text-azul-escuro">
      <div className="flex flex-col w-3xl gap-8 text-center pl-18">
        <p className="font-bold text-5xl">
          💙 Vista sua paixão com a BlueStars
        </p>
        <p className="font-normal text-3xl">
          As camisas que representam sua história, sua torcida e sua identidade.
          Qualidade, conforto e estilo para você usar no estádio, no dia a dia e
          onde a emoção estiver.
        </p>
      </div>
      <div className="flex flex-row">
        <Image
          src={"/logo/hero-section.png"}
          alt="Img"
          width={904}
          height={904}
          className="h-120 w-160 rounded-xl"
        />
      </div>
    </div>
  );
}
