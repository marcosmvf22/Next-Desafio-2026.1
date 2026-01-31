"use client"

import Image from "next/image";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <header className="bg-[#1D5DAF] sticky top-0 z-20 mx-auto w-full py-8 px-4 md:p-0 mb-8">
        <div className="flex flex-row items-center justify-between w-full pr-10">
            <div className="flex flex-col gap-3 items-center p-2.5">
                <div className="text-white p-2.5 text-3xl font-normal font-jetbrains">
                    Redes Sociais
                </div>
                <div className="flex flex-row gap-3 text-white p-2.5">
                    <Instagram className="h-10 w-10"/>
                    <Linkedin className="h-10 w-10"/>
                    <Facebook className="h-10 w-10"/>
                    <Twitter className="h-10 w-10"/>
                </div>
            </div>
            <div className="flex flex-col items-center text-white pb-4 font-jetbrains text-md font-normal">
                <Image
                    src={'/logo/logo-bluestars.png'}
                    alt='Logo do blog'
                    width={904}
                    height={904}
                    className="h-60 w-70 rounded-xl"
                />
                © 2026 Todos os direitos reservados
            </div>
            <div className="flex flex-col items-center text-white gap-4 font-jetbrains font-normal text-xl">
                Contato
                <div className="flex flex-row gap-2 items-start w-full">
                    <Phone/>
                    (32)0000-0000
                </div>
                <div className="flex flex-row gap-2">
                    <Mail/>
                    email@email.com
                </div>
            </div>
        </div>
    </header>
  );
}