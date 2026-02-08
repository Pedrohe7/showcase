"use client";

import React from "react";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/store/cart";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita navegar ao clicar no botão
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link 
      href={`/product/${product.id}`}
      className="relative overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] bg-[#1a1a2e] z-20 hover:scale-105 transition-all duration-300 group flex flex-col h-full hover:shadow-purple-500/20 block cursor-pointer"
    >
        
        {/* Placeholder image logic */}
        <div className="w-full h-56 bg-gradient-to-br from-purple-900/50 to-black flex items-center justify-center group-hover:from-purple-800/50 transition-colors relative overflow-hidden">
             <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                {product.category}
             </span>
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
            
            {/* Mock Product Image */}
            <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-lg shadow-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500">
                {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover rounded-lg" />
                ) : (
                    <div className="text-white/50 text-xs text-center p-2">Product Image<br/>(400x400)</div>
                )}
            </div>
        </div>

      <div className="relative p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <h1 className="text-xl font-bold text-white leading-tight">{product.title}</h1>
            <div className="flex items-center gap-1 text-yellow-500">
                <Star className="w-4 h-4 fill-yellow-500" />
                <span className="text-xs font-medium text-gray-300">4.9</span>
            </div>
        </div>
        
        <p className="mt-1 text-gray-400 text-sm leading-relaxed line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#2A0E61]">
             <div className="flex flex-col">
                 <span className="text-gray-500 text-xs line-through">R$ {(product.price * 1.2).toFixed(2).replace('.', ',')}</span>
                 <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                 </span>
             </div>
             <button 
                onClick={handleAddToCart}
                className="flex items-center gap-2 text-sm bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-full transition-colors font-bold shadow-lg active:scale-95 transform z-30"
             >
                <ShoppingCart className="w-4 h-4" /> Add
             </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
