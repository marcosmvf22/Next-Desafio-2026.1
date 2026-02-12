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
  const parsePrice = (value: string) => {
    const normalized = value
      .replace(/[^\d,.-]/g, "")
      .replace(/\./g, "")
      .replace(",", ".");
    const parsed = Number.parseFloat(normalized);
    return Number.isNaN(parsed) ? 0 : parsed;
  };

  const totalItens = carrinho.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = carrinho.reduce(
    (total, item) => total + item.quantity * parsePrice(item.price),
    0
  );
  const totalPriceFormatted = totalPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="flex flex-row bg-[url('/logo/carrinho.png')] w-full h-full bg-cover font-jetbrains text-azul-escuro gap-30 px-30 py-15">
      <div className="flex flex-col gap-10 w-1/2">
        <h1 className="text-azul-claro text-3xl text-start font-bold">
          Meu Carrinho
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
      <div className="flex flex-col justify-between w-1/3">
        <h1 className="text-azul-claro text-3xl text-start font-bold">Resumo da Compra</h1>
        <div className="bg-azul-claro gap-10 p-5 rounded-lg flex flex-col items-center">
            <p className="font-normal text-xl">Subtotal ({totalItens} Itens)</p>
            <p className="font-extrabold text-3xl">{totalPriceFormatted}</p>
        <button className="bg-azul-escuro text-white w-full font-bold py-3 px-6 rounded-lg hover:bg-azul-medio">
          Finalizar compra
        </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
