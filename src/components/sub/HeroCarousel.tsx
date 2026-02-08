"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS_DATA } from "@/lib/data";
import { ArrowRight, Star, Zap } from "lucide-react";
import Link from "next/link";

const featuredProducts = PRODUCTS_DATA.slice(0, 4); // Select first 4 products

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  const setSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-[500px] h-[500px] flex items-center justify-center group">
      {/* Background Glow Effect */}
      <div className="absolute w-full h-full bg-purple-600/20 rounded-full blur-[100px] -z-10" />

      <div className="relative w-full h-[400px] bg-[#0f0f13]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Carousel Header */}
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start z-20">
            <div className="flex flex-col">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Best Sellers
                </span>
                <span className="text-white/50 text-[10px] uppercase">Winter Collection</span>
            </div>
            <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded-full">
                HOT
            </div>
        </div>

        {/* Content Area */}
        <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                >
                    {/* Image Placeholder */}
                    <div className="w-40 h-40 mb-6 rounded-full bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:scale-110 transition-transform duration-500">
                         {/* Replace with actual image if available */}
                         <span className="text-4xl">⚡</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{featuredProducts[currentIndex].title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2 max-w-[80%] mb-4">
                        {featuredProducts[currentIndex].description}
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                            R$ {featuredProducts[currentIndex].price.toFixed(2).replace('.', ',')}
                        </span>
                        <div className="flex items-center gap-1 text-yellow-500 text-xs">
                            <Star className="w-3 h-3 fill-yellow-500" /> 4.9
                        </div>
                    </div>

                    <Link 
                        href={`/product/${featuredProducts[currentIndex].id}`}
                        className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
                    >
                        Ver Detalhes <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-purple-500/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all z-30"
        >
            <ArrowRight className="w-5 h-5 rotate-180" />
        </button>
        <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-purple-500/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all z-30"
        >
            <ArrowRight className="w-5 h-5" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-20">
            {featuredProducts.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "bg-purple-500 w-6" : "bg-white/20 hover:bg-white/40"
                    }`}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
