"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { Sparkles, ShoppingBag } from "lucide-react";
import HeroCarousel from "./HeroCarousel";

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
            Winter Collection &apos;26
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
        <HeroCarousel />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
