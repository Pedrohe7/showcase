"use client";

import React, { useEffect, useState } from "react";
import { ShoppingBag, Search, Menu, Heart } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useSearchStore } from "@/store/search";

const Navbar = () => {
  const toggleCart = useCartStore((state) => state.toggleCart);
  const totalItems = useCartStore((state) => state.totalItems());
  const openSearch = useSearchStore((state) => state.onOpen);
  
  // Hydration fix
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/20 bg-[#030014]/80 backdrop-blur-xl z-50 px-2 lg:px-10 border-b border-[#ffffff10]">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#home" className="h-auto w-auto flex flex-row items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="font-bold text-gray-100 hover:text-white transition-colors text-xl tracking-wider">
            VELVET<span className="font-light text-purple-400">MODE</span>
            </span>
        </a>

        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-center md:mr-20">
          <div className="flex items-center gap-8 w-full h-auto justify-center text-gray-300 text-sm font-medium tracking-wide">
            <a href="#home" className="cursor-pointer hover:text-purple-400 transition-colors uppercase">Coleções</a>
            <a href="#features" className="cursor-pointer hover:text-purple-400 transition-colors uppercase">Lookbook</a>
            <a href="#products" className="cursor-pointer hover:text-purple-400 transition-colors uppercase">Sale</a>
          </div>
        </div>

        <div className="flex flex-row gap-6 text-gray-300 items-center">
            <div 
                onClick={openSearch}
                className="cursor-pointer hover:text-white transition-colors relative"
            >
               <Search className="w-5 h-5" />
            </div>
            <div className="cursor-pointer hover:text-pink-500 transition-colors relative">
               <Heart className="w-5 h-5" />
            </div>
            <div 
                onClick={toggleCart}
                className="cursor-pointer hover:text-white transition-colors relative group"
            >
               <ShoppingBag className="w-5 h-5" />
               {mounted && totalItems > 0 && (
                   <span className="absolute -top-1.5 -right-1.5 bg-purple-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full animate-bounce-short">
                     {totalItems}
                   </span>
               )}
            </div>
            <div className="md:hidden cursor-pointer hover:text-white transition-colors">
               <Menu className="w-6 h-6" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
