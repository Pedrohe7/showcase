"use client";

import React, { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart";
import { MessageCircle, ArrowLeft, ShieldCheck, ShoppingBag, CreditCard, Truck, MapPin, User, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const { items, totalPrice } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "pix"
  });

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
          className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-bold transition-colors shadow-lg shadow-purple-500/20"
        >
          Voltar para a Loja
        </Link>
      </div>
    );
  }

  const handleFinishOrder = () => {
    // Validação simples
    if (!formData.name || !formData.address) {
      alert("Por favor, preencha pelo menos seu Nome e Endereço.");
      return;
    }

    // Formatar mensagem para o WhatsApp
    const phoneNumber = "5511999999999"; // Número fictício do consultor
    
    let message = `*Novo Pedido Iniciado - Velvet Mode*\n`;
    message += `--------------------------------\n`;
    message += `*Cliente:* ${formData.name}\n`;
    message += `*Endereço:* ${formData.address}, ${formData.city} - ${formData.zip}\n`;
    message += `*Pagamento:* ${formData.paymentMethod.toUpperCase()}\n\n`;
    
    message += `*Resumo do Pedido:*\n`;
    items.forEach((item) => {
      message += `▪ ${item.quantity}x ${item.title} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\n*Total Final: R$ ${totalPrice().toFixed(2)}*\n`;
    message += `--------------------------------\n`;
    message += `Aguardo confirmação para pagamento.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen w-full pt-28 pb-20 px-4 md:px-10 lg:px-20 bg-[#030014] text-white selection:bg-purple-500/30">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/#products" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Continuar Comprando
        </Link>

        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Checkout</h1>
        <p className="text-gray-400 mb-10">Complete seus dados para finalizar a compra segura.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Coluna da Esquerda - Formulário e Itens */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Seção de Identificação e Entrega */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0f0f1d]/50 backdrop-blur-md border border-[#2A0E61] rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <User className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-xl font-semibold">Dados de Entrega</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-400 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ex: Pedro Henrique"
                    className="w-full bg-[#1a1a2e] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-400 mb-2">Endereço</label>
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Rua, Número, Complemento"
                    className="w-full bg-[#1a1a2e] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Cidade</label>
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="São Paulo"
                    className="w-full bg-[#1a1a2e] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">CEP</label>
                  <input 
                    type="text" 
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    placeholder="00000-000"
                    className="w-full bg-[#1a1a2e] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>
            </motion.div>

            {/* Seção de Pagamento */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#0f0f1d]/50 backdrop-blur-md border border-[#2A0E61] rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <CreditCard className="w-6 h-6 text-cyan-400" />
                </div>
                <h2 className="text-xl font-semibold">Forma de Pagamento</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['pix', 'credit', 'crypto'].map((method) => (
                  <div 
                    key={method}
                    onClick={() => setFormData(prev => ({ ...prev, paymentMethod: method }))}
                    className={`cursor-pointer rounded-xl border p-4 flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                      formData.paymentMethod === method 
                      ? 'bg-purple-500/20 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]' 
                      : 'bg-[#1a1a2e] border-white/10 text-gray-400 hover:border-white/30'
                    }`}
                  >
                    {method === 'pix' && <div className="text-2xl">💠</div>}
                    {method === 'credit' && <CreditCard className="w-6 h-6" />}
                    {method === 'crypto' && <div className="text-2xl">₿</div>}
                    <span className="capitalize font-medium">
                      {method === 'credit' ? 'Cartão' : method}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Resumo dos Itens (Colapsável ou Lista Simples) */}
            <div className="bg-[#0f0f1d]/50 border border-[#2A0E61] rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-[#2A0E61] bg-[#1a1a2e]/50">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-300">
                  <ShoppingBag className="w-5 h-5" />
                  Revisar Itens ({items.length})
                </h2>
              </div>
              <div className="divide-y divide-[#2A0E61]">
                {items.map((item) => (
                  <div key={item.id} className="p-4 md:p-6 flex gap-4 items-center group hover:bg-white/5 transition-colors">
                    <div className="w-16 h-16 bg-[#1a1a2e] rounded-lg border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                      {item.imageUrl ? (
                        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-white/20 text-xs text-center">No Img</div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-white">{item.title}</h3>
                      <p className="text-gray-500 text-xs">{item.category} | Qtd: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-purple-300">
                        R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Coluna da Direita - Resumo Financeiro */}
          <div className="lg:col-span-1">
            <div className="bg-[#0f0f1d] border border-[#2A0E61] rounded-2xl p-6 sticky top-28 shadow-2xl shadow-black/50">
              <h2 className="text-xl font-semibold mb-6">Resumo do Pedido</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Subtotal</span>
                  <span>R$ {totalPrice().toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Frete</span>
                  <span className="text-green-400 font-medium">Grátis</span>
                </div>
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Desconto (TechWeek)</span>
                  <span className="text-purple-400 font-medium">- R$ 0,00</span>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between items-end">
                  <span className="text-lg font-bold text-white">Total</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 block">
                        R$ {totalPrice().toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-xs text-gray-500">ou 3x de R$ {(totalPrice() / 3).toFixed(2).replace('.', ',')} s/ juros</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleFinishOrder}
                className="w-full py-4 bg-white text-black hover:bg-gray-200 font-bold rounded-xl shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2 mb-4"
              >
                <CheckCircle2 className="w-5 h-5" />
                Finalizar Compra
              </button>

              <div className="flex items-center justify-center gap-2 text-gray-500 text-[10px] bg-white/5 p-2 rounded-lg">
                <ShieldCheck className="w-3 h-3 text-green-500" />
                <span>Ambiente Seguro. Seus dados estão protegidos.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
