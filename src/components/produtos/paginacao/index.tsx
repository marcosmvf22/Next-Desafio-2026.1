"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginacaoProps {
  totalPages: number;
  currentPage: number;
}

export function Paginacao({ totalPages, currentPage }: PaginacaoProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`/produtos?${params.toString()}`);
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

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-1 flex-wrap">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-l-lg border border-azul-claro bg-white text-azul-escuro hover:bg-azul-claro hover:text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
      >
        &lt;
      </button>
      {getVisiblePages().map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            className={`w-8 sm:w-10 py-1.5 sm:py-2 border border-azul-claro text-sm sm:text-base ${
              currentPage === page
                ? "bg-azul-escuro text-white"
                : "bg-white text-azul-escuro hover:bg-azul-claro hover:text-white"
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="w-8 sm:w-10 py-1.5 sm:py-2 text-center text-azul-escuro text-sm sm:text-base">
            {page}
          </span>
        )
      )}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-r-lg border border-azul-claro bg-white text-azul-escuro hover:bg-azul-claro hover:text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
      >
        &gt;
      </button>
    </div>
  );
}