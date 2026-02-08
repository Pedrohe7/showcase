"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSearchStore } from "@/store/search";
import { PRODUCTS_DATA } from "@/lib/data";
import { Product } from "@/types";

const SearchCommand = () => {
  const { isOpen, onClose } = useSearchStore();
  const [query, setQuery] = useState("");
  const router = useRouter();
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        useSearchStore.getState().toggle();
      }
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onClose]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
    } else {
      const filtered = PRODUCTS_DATA.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  const handleSelect = (id: string) => {
    router.push(`/product/${id}`);
    onClose();
    setQuery("");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-[600px] bg-[#0f0f13] border border-[#2A0E61] shadow-2xl rounded-2xl z-[101] overflow-hidden flex flex-col"
          >
            <div className="flex items-center px-4 py-4 border-b border-white/10">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Busque por produtos ou categorias..."
                className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-lg"
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded-md transition-colors text-gray-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[400px] overflow-y-auto custom-scrollbar p-2">
              {query === "" ? (
                <div className="py-10 text-center text-gray-500">
                  <p className="text-sm">Digite para buscar...</p>
                  <div className="mt-4 flex justify-center gap-2">
                     <span className="text-xs bg-white/5 px-2 py-1 rounded border border-white/10">Jacket</span>
                     <span className="text-xs bg-white/5 px-2 py-1 rounded border border-white/10">Sneakers</span>
                     <span className="text-xs bg-white/5 px-2 py-1 rounded border border-white/10">Tech</span>
                  </div>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-1">
                  <p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Produtos encontrados
                  </p>
                  {results.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleSelect(product.id)}
                      className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 cursor-pointer transition-colors"
                    >
                      <div className="w-12 h-12 bg-[#1a1a2e] rounded-lg border border-white/10 flex items-center justify-center flex-shrink-0">
                         {product.imageUrl ? (
                             <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover rounded-lg" />
                         ) : (
                             <ShoppingBag className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors" />
                         )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium group-hover:text-purple-400 transition-colors">
                          {product.title}
                        </h4>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                      <div className="flex items-center gap-3">
                         <span className="text-sm font-bold text-gray-300">
                            R$ {product.price.toFixed(2).replace('.', ',')}
                         </span>
                         <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-10 text-center text-gray-500">
                  <p>Nenhum resultado encontrado para "{query}"</p>
                </div>
              )}
            </div>

            <div className="px-4 py-3 bg-[#0a0a12] border-t border-white/10 flex justify-between items-center text-xs text-gray-500">
                <span>
                    <span className="font-bold text-gray-400">Esc</span> para fechar
                </span>
                <span>
                    <span className="font-bold text-gray-400">Enter</span> para selecionar
                </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchCommand;
