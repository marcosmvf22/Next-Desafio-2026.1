'use client';

import { SearchIcon, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Pesquisa() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  useEffect(() => {
    setQuery(searchParams.get('query') || '');
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }
    params.set('page', '1');
    router.push(`/produtos?${params.toString()}`);
  };

  const handleClear = () => {
    setQuery('');
    const params = new URLSearchParams(searchParams.toString());
    params.delete('query');
    params.set('page', '1');
    router.push(`/produtos?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-azul-claro border border-gray-200 rounded-md">
        <SearchIcon 
          onClick={handleSearch}
          className="absolute left-3 top-3/10 w-5 h-5 sm:w-6 sm:h-6 cursor-pointer text-azul-escuro"
        />
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar produtos..."
          className="border border-gray-300 rounded-md p-3 sm:p-4 pl-10 sm:pl-12 w-full text-sm sm:text-base text-azul-escuro" 
        />
        {query && (
          <X 
            onClick={handleClear}
            className="absolute right-3 top-3/8 w-4 h-4 cursor-pointer text-azul-escuro hover:text-red-500"
          />
        )}
    </form>
  );
}