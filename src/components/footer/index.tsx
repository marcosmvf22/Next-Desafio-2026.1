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
    <footer className="bg-azul z-20 mx-auto w-full py-6 sm:py-8 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 md:gap-4 font-jetbrains">
            {/* Redes Sociais */}
            <div className="flex flex-col gap-2 sm:gap-3 items-center p-2">
                <div className="text-white p-2 text-xl sm:text-2xl md:text-3xl font-normal">
                    Redes Sociais
                </div>
                <div className="flex flex-row gap-2 sm:gap-3 text-white p-2">
                    <a href="https://www.instagram.com/codejr/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                        <Instagram className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"/>
                    </a>
                    <a href="https://www.linkedin.com/company/codejr/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                        <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"/>
                    </a>
                    <a href="https://www.instagram.com/codejr/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                        <Facebook className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"/>
                    </a>
                    <a href="https://www.instagram.com/codejr/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                        <Twitter className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"/>
                    </a>
                </div>
            </div>
            {/* Logo e Copyright */}
            <div className="flex flex-col items-center text-white pb-2 sm:pb-4 text-xs sm:text-sm md:text-md font-normal order-first md:order-none">
                <Image
                    src={'/logo/logo-bluestars.png'}
                    alt='Logo do blog'
                    width={904}
                    height={904}
                    className="h-32 w-36 sm:h-40 sm:w-48 md:h-52 md:w-60 lg:h-60 lg:w-70 rounded-xl"
                />
                © 2026 Todos os direitos reservados
            </div>
            {/* Contato */}
            <div className="flex flex-col items-center text-white gap-2 sm:gap-3 md:gap-4 font-normal text-base sm:text-lg md:text-xl">
                Contato
                <div className="flex flex-row gap-2 items-center">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"/>
                    <span className="text-sm sm:text-base md:text-lg">(32)9 9808-0429</span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"/>
                    <span className="text-sm sm:text-base md:text-lg">marcos.vinicius@codejr.com.br</span>
                </div>
            </div>
        </div>
    </footer>
  );
}