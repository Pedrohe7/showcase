import React from "react";
import ProductCard from "../sub/ProductCard";

const Products = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 px-4"
      id="products"
    >
      <div className="flex flex-col items-center justify-center mb-16 text-center">
         <h1 className="text-[40px] font-semibold text-white uppercase tracking-[0.2em]">
            Destaques
         </h1>
         <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 rounded-full" />
      </div>
      
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-4 lg:px-10 max-w-7xl">
        <ProductCard
          title="Bomber Jacket Neon"
          description="Tecido impermeável com detalhes refletivos. O design oversized perfeito para composições urbanas noturnas."
          price="R$ 399,90"
          category="Outerwear"
        />
        <ProductCard
          title="Cyber Sneakers X1"
          description="Design futurista com solado de absorção de impacto. Malha respirável e acabamento premium."
          price="R$ 599,00"
          category="Footwear"
        />
        <ProductCard
          title="Cargo Pants Tech"
          description="Calça utilitária com múltiplos bolsos e ajuste magnético. Conforto e funcionalidade para o dia a dia."
          price="R$ 249,50"
          category="Bottoms"
        />
        <ProductCard
            title="Oversized Hoodie Black"
            description="Algodão 100% orgânico de alta gramatura. Estampa em silk relevo nas costas. Essencial e atemporal."
            price="R$ 189,00"
            category="Tops"
        />
        <ProductCard
            title="Tactical Vest"
            description="Colete tático modular inspirado no techwear. Acessório statement para transformar qualquer look básico."
            price="R$ 220,00"
            category="Accessories"
        />
        <ProductCard
            title="Bucket Hat Reflective"
            description="Proteção e estilo. Material que reage à luz e flash de câmeras. Perfeito para festivais."
            price="R$ 89,90"
            category="Headwear"
        />
      </div>
    </div>
  );
};

export default Products;
