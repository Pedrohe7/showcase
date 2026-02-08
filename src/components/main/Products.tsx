"use client";

import React, { useState } from "react";
import ProductCard from "../sub/ProductCard";
import { PRODUCTS_DATA } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Todos", ...Array.from(new Set(PRODUCTS_DATA.map(p => p.category)))];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = activeCategory === "Todos" 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(product => product.category === activeCategory);

  return (
    <div
      className="flex flex-col items-center justify-center py-20 px-4"
      id="products"
    >
      <div className="flex flex-col items-center justify-center mb-12 text-center">
         <h1 className="text-[40px] font-semibold text-white uppercase tracking-[0.2em]">
            Destaques
         </h1>
         <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 rounded-full" />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-4xl">
        {categories.map((category) => (
            <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === category
                    ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    : "bg-transparent text-gray-400 border-white/10 hover:border-purple-500 hover:text-white"
                }`}
            >
                {category}
            </button>
        ))}
      </div>
      
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 lg:px-10 max-w-7xl min-h-[500px]">
        <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {filteredProducts.length === 0 && (
          <div className="text-gray-500 text-lg mt-10">
              Nenhum produto encontrado nesta categoria.
          </div>
      )}
    </div>
  );
};

export default Products;
