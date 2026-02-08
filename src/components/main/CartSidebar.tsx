"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import Link from "next/link";

const CartSidebar = () => {
  const { 
    isOpen, 
    toggleCart, 
    items, 
    removeItem, 
    updateQuantity, 
    totalPrice 
  } = useCartStore();

  // Hydration fix for persist middleware
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-[#0f0c29]/95 border-l border-purple-500/30 shadow-2xl z-50 flex flex-col backdrop-blur-md"
          >
            {/* Header */}
            <div className="p-6 border-b border-purple-500/20 flex items-center justify-between">
              <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-purple-400" />
                Seu Carrinho
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
                  <ShoppingBag className="w-16 h-16 opacity-20" />
                  <p>Seu carrinho está vazio.</p>
                  <button
                    onClick={toggleCart}
                    className="px-6 py-2 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/50 rounded-full text-sm font-medium transition-all"
                  >
                    Explorar Produtos
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-4 relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    
                    {/* Image Placeholder */}
                    <div className="w-20 h-20 bg-gray-800 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                       {item.imageUrl ? (
                           <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                       ) : (
                           <span className="text-xs text-gray-600">No Img</span>
                       )}
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-medium text-white line-clamp-1">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.category}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3 bg-black/20 rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-white/10 rounded transition-colors text-gray-400 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium text-white w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-white/10 rounded transition-colors text-gray-400 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-semibold text-purple-300">
                          R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute top-2 right-2 p-1.5 text-gray-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 bg-[#0a0a1a] border-t border-purple-500/20 space-y-4">
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <span>Subtotal</span>
                  <span>R$ {totalPrice().toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex items-center justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    R$ {totalPrice().toFixed(2).replace('.', ',')}
                  </span>
                </div>
                
                <Link 
                  href="/checkout"
                  onClick={toggleCart}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-bold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:-translate-y-1 transition-all flex items-center justify-center"
                >
                  Finalizar Compra
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
