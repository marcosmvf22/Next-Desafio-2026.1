"use client";

import CardCarrinho from "./cardCarrinho";

interface CarrinhoProps {
    id: number;
    image: string;
    title: string;
    size: string;
    quantity: number;
    price: string;
}

interface Props {
    carrinho: CarrinhoProps[];
}

export default function Carrinho({carrinho}: Props) {
  return (
    <div className="flex flex-col bg-azul-medio font-jetbrains text-azul-escuro gap-16 px-18 pb-20 pt-12">
      <div>
        <h1 className="text-azul-claro text-5xl text-center font-bold">
          Meu carrinho
        </h1>
        {carrinho.map((carrinho) => (
            <CardCarrinho
                key={carrinho.id}
                image={carrinho.image}
                title={carrinho.title}
                size={carrinho.size}
                quantity={carrinho.quantity}
                price={carrinho.price}
            />
        ))}
      </div>
    </div>
  );
}
