'use client';

import DescricaoPVI from "./produto";
import ProdutoPVI from "./descricao";

export default function PVI() {
    return (
        <div className="bg-azul-claro">
            <DescricaoPVI />
            <ProdutoPVI />
        </div>
    );
}