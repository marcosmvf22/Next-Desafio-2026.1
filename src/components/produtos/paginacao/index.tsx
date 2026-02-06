"use client";

import { useState } from "react";

interface PaginacaoProps {
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function Paginacao({ totalPages = 10, onPageChange }: PaginacaoProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
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
    <div className="flex items-center justify-center gap-1">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 rounded-l-lg border border-azul-claro bg-white text-azul-escuro hover:bg-azul-claro hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &lt;
      </button>
      {getVisiblePages().map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            className={`w-10 py-2 border border-azul-claro ${
              currentPage === page
                ? "bg-azul-escuro text-white"
                : "bg-white text-azul-escuro hover:bg-azul-claro hover:text-white"
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="w-10 py-2 text-center text-azul-escuro">
            {page}
          </span>
        )
      )}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-r-lg border border-azul-claro bg-white text-azul-escuro hover:bg-azul-claro hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &gt;
      </button>
    </div>
  );
}