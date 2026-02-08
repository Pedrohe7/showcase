"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { Sparkles, Shirt, Tag, ShoppingBag, Watch } from "lucide-react";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-5 lg:px-20 mt-20 lg:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] rounded-full flex items-center w-fit bg-black/40 backdrop-blur-md"
        >
          <Sparkles className="text-[#b49bff] mr-[10px] h-5 w-5 ml-2" />
          <h1 className="welcome-text text-[13px] text-gray-300 mr-3 uppercase tracking-widest">
            Winter Collection '26
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto leading-tight"
        >
          <span>
            Estilo que
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-serif italic">
              {" "}
              Define{" "}
            </span>
            Sua Essência
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] font-light"
        >
          Streetwear premium com design exclusivo. Tecidos tecnológicos, cortes assimétricos e a atitude urbana que você procura. Vista o futuro.
        </motion.p>

        <motion.div
            variants={slideInFromLeft(1)}
            className="flex flex-row gap-4"
        >
            <a
              href="#products"
              className="py-3 px-8 button-primary text-center text-white cursor-pointer rounded-full max-w-[200px] bg-white text-black hover:bg-gray-200 transition-all font-bold tracking-wide flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" /> SHOP NOW
            </a>
            <a
              href="#lookbook"
              className="py-3 px-8 button-primary text-center text-white cursor-pointer rounded-full max-w-[200px] border border-white/20 hover:bg-white/10 transition-all tracking-wide"
            >
              LOOKBOOK
            </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center relative mt-10 lg:mt-0"
      >
        {/* Abstract Fashion Showcase */}
        <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
            <div className="absolute w-full h-full bg-purple-600/10 rounded-full blur-[120px]" />
            
            {/* Main Hero Image Placeholder - Floating Fashion Items */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
                 {/* Card 1 - Jacket */}
                 <div className="absolute top-0 right-0 lg:right-10 w-48 h-56 bg-[#0f0f13] rounded-sm border border-white/10 flex flex-col items-center justify-center shadow-2xl animate-float-slow p-4 rotate-6 hover:rotate-0 transition-transform duration-500">
                     <div className="w-full h-32 bg-gradient-to-b from-purple-900/50 to-transparent rounded-sm mb-4 flex items-center justify-center">
                        <Shirt className="w-16 h-16 text-purple-200 opacity-80" />
                     </div>
                     <div className="w-full flex justify-between items-end">
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400 uppercase">New Arrival</span>
                            <span className="text-white font-bold">Cyber Jacket</span>
                        </div>
                        <span className="text-purple-400 font-bold">$120</span>
                     </div>
                 </div>

                 {/* Card 2 - Watch/Accessory */}
                 <div className="absolute bottom-10 left-0 lg:left-10 w-40 h-40 bg-[#0f0f13] rounded-sm border border-white/10 flex flex-col items-center justify-center shadow-2xl animate-float-delayed p-4 -rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
                     <Watch className="w-12 h-12 text-cyan-400 mb-2" />
                     <span className="text-white text-sm font-bold mt-2">Smart Accessories</span>
                     <span className="text-xs text-gray-500">Limited Edition</span>
                 </div>

                 {/* Card 3 - Tag */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white text-black rounded-full flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] z-30 animate-pulse">
                     <span className="text-xs font-bold">OFF</span>
                     <span className="text-2xl font-black">50%</span>
                     <span className="text-[10px] uppercase tracking-wider">Winter Sale</span>
                 </div>
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
