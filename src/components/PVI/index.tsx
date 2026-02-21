'use client';

import DescricaoPVI from "./produto";
import ProdutoPVI from "./descricao";
import { PostIndividual } from "@/types/data";

export default function PVI({post}: {post:  PostIndividual }) {
    return (
        <div className="bg-azul-claro">
            <DescricaoPVI post={post}/>
            <ProdutoPVI post={post}/>
        </div>
    );
}