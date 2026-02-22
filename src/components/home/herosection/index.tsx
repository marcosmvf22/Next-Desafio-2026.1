"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-azul-claro font-jetbrains py-8 sm:py-10 md:py-12 lg:py-15 px-4 sm:px-8 md:px-12 lg:px-18 text-azul-escuro gap-6 lg:gap-0">
      <div className="flex flex-col w-full lg:w-3xl gap-4 sm:gap-6 md:gap-8 text-center lg:text-left">
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          💙 Vista sua paixão com a BlueStars
        </p>
        <p className="font-normal text-base sm:text-lg md:text-2xl lg:text-3xl">
          As camisas que representam sua história, sua torcida e sua identidade.
          Qualidade, conforto e estilo para você usar no estádio, no dia a dia e
          onde a emoção estiver.
        </p>
      </div>
      <div className="flex flex-row justify-center lg:justify-end w-full lg:w-auto">
        <Image
          src={"/logo/hero-section.png"}
          alt="Img"
          width={904}
          height={904}
          className="h-48 w-64 sm:h-64 sm:w-80 md:h-80 md:w-100 lg:h-100 lg:w-130 xl:h-120 xl:w-160 rounded-xl object-cover"
        />
      </div>
    </div>
  );
}
