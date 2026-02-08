"use client";

import React, { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart";
import { MessageCircle, ArrowLeft, ShieldCheck, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, totalPrice } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 0);
  }, []);

  if (!isMounted) return null;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#030014] text-white px-4">
        <ShoppingBag className="w-20 h-20 text-gray-600 mb-6" />
        <h1 className="text-3xl font-bold mb-4">Seu carrinho está vazio</h1>
        <p className="text-gray-400 mb-8 text-center max-w-md">
          Parece que você ainda não escolheu seus itens. Explore nossa coleção e encontre seu estilo.
        </p>
        <Link 
          href="/#products" 
          className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-bold transition-colors"
        >
          Voltar para a Loja
        </Link>
      </div>
    );
  }

  const handleFinishOrder = () => {
    // Formatar mensagem para o WhatsApp
    const phoneNumber = "5511999999999"; // Número fictício do consultor
    
    let message = `*Olá! Gostaria de finalizar meu pedido no Velvet Mode.*\n\n`;
    message += `*Resumo do Pedido:*\n`;
    
    items.forEach((item) => {
      message += `▪ ${item.quantity}x ${item.title} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
      if (item.category) message += `   _Categoria: ${item.category}_\n`;
    });
    
    message += `\n*Total: R$ ${totalPrice().toFixed(2)}*\n\n`;
    message += `Gostaria de consultar a disponibilidade e formas de pagamento.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Opcional: Limpar carrinho após iniciar o contato ou redirecionar para uma página de "Obrigado"
    // clearCart(); 
    // router.push("/thank-you");
  };

  return (
    <div className="min-h-screen w-full pt-28 pb-20 px-4 md:px-10 lg:px-20 bg-[#030014] text-white">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/#products" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Continuar Comprando
        </Link>

        <h1 className="text-4xl font-bold mb-2">Finalizar Pedido</h1>
        <p className="text-gray-400 mb-10">Revise seus itens e fale com um de nossos consultores.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lista de Itens */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-[#0f0f1d] border border-[#2A0E61] rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-[#2A0E61]">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-purple-400" />
                  Itens do Carrinho ({items.length})
                </h2>
              </div>
              
              <div className="divide-y divide-[#2A0E61]">
                {items.map((item) => (
                  <div key={item.id} className="p-6 flex gap-4 md:gap-6 items-center">
                    <div className="w-20 h-20 bg-[#1a1a2e] rounded-lg border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                      {item.imageUrl ? (
                        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-white/20 text-xs text-center">No Img</div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.category}</p>
                      <div className="mt-2 text-sm text-gray-500">
                        Qtd: <span className="text-white font-medium">{item.quantity}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-purple-300">
                        R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.quantity} x R$ {item.price.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resumo e Ação */}
          <div className="md:col-span-1">
            <div className="bg-[#0f0f1d] border border-[#2A0E61] rounded-2xl p-6 sticky top-28">
              <h2 className="text-xl font-semibold mb-6">Resumo</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>R$ {totalPrice().toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Frete</span>
                  <span className="text-green-400 font-medium">Grátis</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between items-end">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    R$ {totalPrice().toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              <button
                onClick={handleFinishOrder}
                className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold rounded-xl shadow-lg shadow-green-500/20 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                Falar com Consultor
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
                Ao clicar, você será redirecionado para o WhatsApp para finalizar o pagamento e combinar a entrega com um especialista.
              </p>

              <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-xs">
                <ShieldCheck className="w-4 h-4 text-purple-500" />
                Compra 100% Segura e Verificada
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
