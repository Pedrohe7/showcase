import React from "react";
import Hero from "@/components/main/Hero";
import StarsCanvas from "@/components/main/StarBackground";
import Features from "@/components/main/Features";
import Products from "@/components/main/Products";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <StarsCanvas />
        <Hero />
        <Features />
        <Products />
        <Footer />
      </div>
    </main>
  );
}
