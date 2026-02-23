"use client";

import CardCarrinho from "./cardCarrinho";
import { useState, useEffect } from "react";

interface CartItem {
  id: string;
  productId: number;
  image: string;
  title: string;
  size: string;
  quantity: number;
  price: number;
}

export default function Carrinho() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  const updateQuantity = (id: string, quantity: number) => {
    let updated;
    if (quantity <= 0) {
      updated = cartItems.filter((item) => item.id !== id);
    } else {
      updated = cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    }
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeFromCart = (id: string) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const totalItens = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const totalPriceFormatted = totalPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="flex flex-row bg-[url('/logo/carrinho.png')] w-full min-h-screen bg-cover font-jetbrains text-azul-escuro gap-30 px-30 py-15">
      <div className="flex flex-col gap-10 w-1/2">
        <h1 className="text-azul-claro text-3xl text-start font-bold">
          Meu Carrinho
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-azul-claro text-xl">Seu carrinho está vazio.</p>
        ) : (
          cartItems.map((item) => (
            <CardCarrinho
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              size={item.size}
              quantity={item.quantity}
              price={item.price}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          ))
        )}
      </div>
      <div className="flex flex-col justify-between w-1/3">
        <h1 className="text-azul-claro text-3xl text-start font-bold">Resumo da Compra</h1>
        <div className="bg-azul-claro gap-10 p-5 rounded-lg flex flex-col items-center">
          <p className="font-normal text-xl">Subtotal ({totalItens} Itens)</p>
          <p className="font-extrabold text-3xl">{totalPriceFormatted}</p>
          <button className="bg-azul-escuro text-white w-full font-bold py-3 px-6 rounded-lg hover:bg-azul-medio cursor-pointer transition">
            Finalizar compra
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
