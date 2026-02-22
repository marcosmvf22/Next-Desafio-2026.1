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
    <div className="bg-azul p-3 lg:p-5 flex flex-col justify-between font-jetbrains text-xl min-h-screen">
      <div className="flex flex-col items-center">
        <Image
          src={"/logo/logo-bluestars.png"}
          alt="Logo do blog"
          width={262}
          height={160}
          className="h-12 w-12 lg:h-40 lg:w-40 rounded-xl"
        />
        <div className="flex flex-col gap-5 lg:pr-2 mt-4 lg:mt-0">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-center lg:justify-start gap-3 p-3 rounded-xl text-white"
                title={link.label}
              >
                <Icon className="w-6 h-6" />
                <span className="hidden lg:inline">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <Link
        href="/"
        className="flex items-center justify-center lg:justify-start gap-3 bg-azul-escuro p-3 rounded-xl text-white w-full"
        title="Logout"
      >
        <LogOutIcon className="w-6 h-6" />
        <span className="hidden lg:inline">Logout</span>
      </Link>
    </div>
  );
}
