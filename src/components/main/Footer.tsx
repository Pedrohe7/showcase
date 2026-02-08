import React from "react";
import { Instagram, Twitter, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[20] relative border-t border-[#ffffff10] bg-[#030014]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-start justify-around flex-wrap py-10 gap-10">
                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[18px] mb-4 text-white uppercase tracking-wider">Velvet Mode</div>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
                        <Instagram className="w-5 h-5 mr-2" />
                        <span className="text-[14px] ml-[6px] font-light">@velvetmode_br</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        <span className="text-[14px] ml-[6px] font-light">TikTok</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
                        <Twitter className="w-5 h-5 mr-2" />
                        <span className="text-[14px] ml-[6px] font-light">Twitter</span>    
                    </p>
                </div>

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[18px] mb-4 text-white uppercase tracking-wider">Suporte</div>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
                        <Phone className="w-5 h-5 mr-2" />
                        <span className="text-[14px] ml-[6px] font-light">(11) 98888-7777</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
                        <Mail className="w-5 h-5 mr-2" />
                        <span className="text-[14px] ml-[6px] font-light">sac@velvetmode.com</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span className="text-[14px] ml-[6px] font-light">São Paulo, Jardins</span>    
                    </p>
                </div>

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start text-center">
                    <div className="font-bold text-[18px] mb-4 text-white uppercase tracking-wider">Manifesto</div>
                    <p className="text-[14px] text-gray-400 max-w-[200px] font-light italic">
                        &quot;A moda é a armadura para sobreviver à realidade do dia a dia.&quot; 
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[13px] text-center text-gray-500 mt-10 font-light tracking-wider">
                &copy; {new Date().getFullYear()} VELVET MODE. TODOS OS DIREITOS RESERVADOS.
            </div>
        </div>
    </div>
  )
}

export default Footer
