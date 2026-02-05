"use client"

import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";

const links = [
    {href: '/', label: 'Home'},
    {href: '/contato', label: 'Contato'},
    {href: '/produtos', label: 'Produtos'},
    {href: '/tabela', label: 'Gerenciamento'},
    {href: '/login', label: 'Login'},
]

export default function Navbar() {
  return (
    <header className="bg-[#1D5DAF] top-0 z-20 mx-auto w-full py-8 px-4 md:p-0">
        <div className="flex flex-row items-center justify-between w-full pr-10 font-jetbrains">
            <Link href='/' className="flex gap-4 items-center">
                <Image
                  src={'/logo/logo-bluestars.png'}
                  alt='Logo do blog'
                  width={904}
                  height={904}
                  className="h-30 w-30 rounded-xl"
                />
            </Link>
            <div className="flex flex-row items-center gap-5">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="bg-azul-escuro py-3 px-4 rounded-xl text-white">
                  {link.label}
                </Link>
              ))}
              <Link href='/carrinho' className="rounded-xl text-white">
                <ShoppingCartIcon className="w-10 h-10"/>
              </Link>
            </div>
          </div>
    </header>
  );
}
