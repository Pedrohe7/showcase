import React from 'react';
import { 
  Truck, ShieldCheck, Ruler, CreditCard, 
  RotateCcw, Sparkles, Shirt, Globe 
} from 'lucide-react';

const featuresData = [
  { name: "Envio Expresso", icon: Truck, description: "Receba seu look em 48h", color: "#a855f7" },
  { name: "Provador Virtual", icon: Ruler, description: "Acerte no tamanho", color: "#7042f8" },
  { name: "Tecidos Premium", icon: Shirt, description: "Qualidade garantida", color: "#3b82f6" },
  { name: "6x Sem Juros", icon: CreditCard, description: "Parcelamento flexível", color: "#22c55e" },
  { name: "Primeira Troca Grátis", icon: RotateCcw, description: "Sem dor de cabeça", color: "#ef4444" },
  { name: "Peças Exclusivas", icon: Sparkles, description: "Design autoral", color: "#eab308" },
  { name: "Compra Segura", icon: ShieldCheck, description: "Dados protegidos", color: "#14b8a6" },
  { name: "Sustentabilidade", icon: Globe, description: "Eco-friendly", color: "#f97316" },
];

const Features = () => {
  return (
    <section 
      id="features" 
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="flex flex-col items-center mt-10 mb-10 text-center">
         <h2 className="text-[30px] lg:text-[40px] font-light text-white uppercase tracking-widest">
            Experiência <span className="font-bold text-purple-400">Velvet</span>
         </h2>
         <p className="text-gray-400 mt-2 text-lg font-light italic">Muito mais que apenas roupas.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center w-full max-w-6xl px-4">
        {featuresData.map((feature, index) => (
           <div key={index} className="flex flex-col items-center gap-4 p-6 border border-white/5 bg-white/5 backdrop-blur-sm rounded-sm hover:border-purple-500/50 transition-colors duration-300 w-full h-auto justify-center group text-center cursor-default">
              <feature.icon 
                className="w-8 h-8 group-hover:scale-110 transition-transform duration-300 opacity-80" 
                style={{ color: feature.color }} 
              />
              <div className="flex flex-col">
                  <span className="text-gray-200 text-base font-bold uppercase tracking-wide">{feature.name}</span>
                  <span className="text-gray-500 text-xs mt-1">{feature.description}</span>
              </div>
           </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
