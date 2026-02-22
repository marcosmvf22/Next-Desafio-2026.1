"use client";

import { useState } from "react";
import { Plus, Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Tabela from "./tabela";
import { ModalAdicionar } from "./tabela/modalAdicionar";

type Produto = {
  id: number;
  principalImage: string;
  title: string;
  price: number;
  description: string;
};

type AdminProps = {
  produtos: Produto[];
  total: number;
  totalPages: number;
  currentPage: number;
  search: string;
};

export default function Admin({ produtos, total, totalPages, currentPage, search }: AdminProps) {
  const [isModalAdicionarOpen, setIsModalAdicionarOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(search);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`/tabela?${params.toString()}`);
  };

  const getVisiblePages = () => {
    const pages: number[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, currentPage - 1, currentPage, currentPage + 1, totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="flex flex-col gap-6 lg:gap-10 font-jetbrains px-4 sm:px-8 lg:px-20 py-6 lg:py-12 w-full">
      <h1 className="w-full text-center text-azul-escuro text-xl sm:text-2xl lg:text-3xl">Tabela de Produtos</h1>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full justify-between items-start sm:items-center">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <div className="flex items-center gap-2 bg-white border border-azul-medio rounded-xl px-4 py-2 w-full sm:w-64 lg:w-80">
            <Search className="w-5 h-5 text-azul-escuro flex-shrink-0" />
            <input
              type="text"
              placeholder="Pesquisar"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const params = new URLSearchParams(searchParams.toString());
                  params.set('page', '1');
                  if (searchValue) {
                    params.set('search', searchValue);
                  } else {
                    params.delete('search');
                  }
                  router.push(`/tabela?${params.toString()}`);
                }
              }}
              className="outline-none flex-1 text-azul-escuro placeholder:text-gray-400"
            />
            {searchValue && (
              <button
                onClick={() => {
                  setSearchValue('');
                  router.push('/tabela');
                }}
                className="text-gray-400 hover:text-azul-escuro transition flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <span className="text-xs sm:text-sm text-gray-500">{total} Resultados</span>
        </div>

        <button 
          className="flex flex-row bg-azul-escuro text-white p-2 sm:p-3 gap-2 sm:gap-3 items-center rounded-xl cursor-pointer text-sm sm:text-base"
          onClick={() => setIsModalAdicionarOpen(true)}
        >
          <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="hidden sm:inline">Adicionar</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <Tabela produtos={produtos} />
      </div>
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1 flex-wrap">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-l-lg border border-azul-escuro bg-white text-azul-escuro hover:bg-azul-medio hover:text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            &lt;
          </button>
          {getVisiblePages().map((page, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(page)}
              className={`w-8 sm:w-10 py-1.5 sm:py-2 border border-azul-escuro text-sm sm:text-base ${
                currentPage === page
                  ? "bg-azul-escuro text-white"
                  : "bg-white text-azul-escuro hover:bg-azul-medio hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-r-lg border border-azul-escuro bg-white text-azul-escuro hover:bg-azul-medio hover:text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            &gt;
          </button>
        </div>
      )}
      
      <ModalAdicionar isOpen={isModalAdicionarOpen} onClose={() => setIsModalAdicionarOpen(false)} />
    </div>
  );
}
