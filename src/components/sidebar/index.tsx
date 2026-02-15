"use client";

import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { SettingsIcon } from "lucide-react";
import { LogOutIcon } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/tabela", label: "Gerenciamento", icon: SettingsIcon },
];

export default function Sidebar() {
  return (
    <div className="bg-azul h-200 p-5 flex flex-col justify-between font-jetbrains text-xl">
      <div className="flex flex-col items-center">
        <Image
          src={"/logo/logo-bluestars.png"}
          alt="Logo do blog"
          width={262}
          height={160}
          className="h-40 w-40 rounded-xl"
        />
        <div className="flex flex-col gap-5 pr-2">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 p-3 rounded-xl text-white"
              >
                <Icon className="w-6 h-6" />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
      <Link
        href="/"
        className="flex items-center gap-3 bg-azul-escuro p-3 rounded-xl text-white w-full"
      >
        <LogOutIcon className="w-6 h-6" />
        Logout
      </Link>
    </div>
  );
}
