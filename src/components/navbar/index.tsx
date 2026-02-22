"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/contato", label: "Contato" },
  { href: "/produtos", label: "Produtos" },
  { href: "/tabela", label: "Gerenciamento" },
  { href: "/login", label: "Login" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#1D5DAF] top-0 z-20 mx-auto w-full py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-0">
      <div className="flex flex-row items-center justify-between w-full pr-4 sm:pr-6 md:pr-10 font-jetbrains">
        
        <Link href="/" className="flex gap-4 items-center">
          <Image
            src={"/logo/logo-bluestars.png"}
            alt="Logo do blog"
            width={904}
            height={904}
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-30 lg:w-30 rounded-xl"
          />
        </Link>

        {/* MENU DESKTOP (lg pra cima mantém seu layout original) */}
        <div className="hidden lg:flex flex-row items-center gap-3 xl:gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-azul-escuro py-2 px-3 xl:py-3 xl:px-4 rounded-xl text-white text-sm xl:text-base"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/carrinho" className="rounded-xl text-white">
            <ShoppingCartIcon className="w-8 h-8 xl:w-10 xl:h-10" />
          </Link>
        </div>

        {/* BOTÃO MOBILE (até lg) */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-3 sm:gap-4 pb-4 sm:pb-6 pt-4 font-jetbrains">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-azul-escuro py-2 sm:py-3 px-4 rounded-xl text-white w-11/12 text-center text-sm sm:text-base"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/carrinho"
            className="rounded-xl text-white"
            onClick={() => setMenuOpen(false)}
          >
            <ShoppingCartIcon className="w-8 h-8 sm:w-10 sm:h-10" />
          </Link>
        </div>
      )}
    </header>
  );
}