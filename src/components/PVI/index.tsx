'use client';

import DescricaoPVI from "./descricao";
import ProdutoPVI from "./produto";

export default function PVI() {
    return (
        <div className="bg-azul-claro">
            <DescricaoPVI />
            <ProdutoPVI />
        </div>
    );
}