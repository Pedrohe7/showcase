"use client";

import React from "react";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/store/cart";

interface Props {
  product: Product;
}

const AddToCartButton = ({ product }: Props) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button
      onClick={() => addItem(product)}
      className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-bold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-lg"
    >
      <ShoppingCart className="w-6 h-6" />
      Adicionar ao Carrinho
    </button>
  );
};

export default AddToCartButton;
