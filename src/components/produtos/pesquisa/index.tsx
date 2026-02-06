'use client';

import { SearchIcon } from "lucide-react";
import { X } from "lucide-react";

export default function Pesquisa() {
  return (
    <form className="relative w-1/4 bg-azul-claro border border-gray-200 rounded-md">
        <SearchIcon className="absolute left-3 top-3/10 w-6 h-6 cursor-pointer text-azul-escuro"/>
        <input 
        type="text"
        placeholder="Pesquisar produtos..."
        className="border border-gray-300 rounded-md p-4 pl-12 w-full text-azul-escuro" 
        />
        <X className="absolute right-3 top-3/8 w-4 h-4 cursor-pointer text-shadow-azul-escuro"/>
    </form>
    );
}