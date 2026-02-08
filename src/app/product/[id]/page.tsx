import React from "react";
import { notFound } from "next/navigation";
import { getProductById, PRODUCTS_DATA } from "@/lib/data";
import { Star, ShoppingCart, ArrowLeft, Truck, ShieldCheck, Share2 } from "lucide-react";
import AddToCartButton from "@/components/sub/AddToCartButton";
import Link from "next/link";

// Gerar rotas estáticas para PPR/SSG
export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full pt-28 pb-20 px-4 md:px-10 lg:px-20 z-20 relative">
      <Link 
        href="/#products" 
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Voltar para Produtos
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto">
        {/* Galeria de Imagens (Esquerda) */}
        <div className="space-y-4">
          <div className="w-full aspect-square bg-[#1a1a2e] rounded-2xl border border-[#2A0E61] flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent" />
             {product.imageUrl ? (
                <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
            ) : (
                <div className="text-white/30 text-lg text-center">
                    Imagem Principal<br/>(800x800)
                </div>
            )}
            
            {/* Tag Flutuante */}
            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                {product.category}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
             {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-[#1a1a2e] rounded-lg border border-[#2A0E61] hover:border-purple-500 cursor-pointer transition-colors flex items-center justify-center">
                    <span className="text-white/20 text-xs">{i}</span>
                </div>
             ))}
          </div>
        </div>

        {/* Informações do Produto (Direita) */}
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-2 text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 fill-yellow-500" />
                <span className="text-sm font-bold">4.9</span>
                <span className="text-gray-400 text-xs ml-1">(128 avaliações)</span>
             </div>
             <button className="text-gray-400 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
             </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {product.title}
          </h1>

          <div className="flex items-end gap-4 mb-8">
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            <span className="text-gray-500 text-lg line-through mb-1">
                R$ {(product.price * 1.2).toFixed(2).replace('.', ',')}
            </span>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 border-l-4 border-purple-500 pl-4 bg-white/5 py-4 rounded-r-lg">
            {product.description}
          </p>

          {/* Seletor de Tamanho (Mock) */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Tamanho</h3>
            <div className="flex gap-3">
                {['P', 'M', 'G', 'GG'].map((size) => (
                    <button key={size} className="w-12 h-12 rounded-lg border border-white/20 hover:border-purple-500 hover:bg-purple-500/20 text-white font-medium transition-all focus:ring-2 ring-purple-500 ring-offset-2 ring-offset-[#030014]">
                        {size}
                    </button>
                ))}
            </div>
          </div>

          {/* Ações */}
          <div className="flex flex-col gap-4 mt-auto">
             <AddToCartButton product={product} />
             
             <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3 text-gray-400 text-sm bg-white/5 p-3 rounded-lg">
                    <Truck className="w-5 h-5 text-purple-400" />
                    <span>Frete Grátis para todo Brasil</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm bg-white/5 p-3 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-green-400" />
                    <span>Garantia de 30 dias</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
