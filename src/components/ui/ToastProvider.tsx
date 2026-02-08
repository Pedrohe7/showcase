"use client";

import React from "react";
import { useToastStore } from "@/store/toast";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Info, X } from "lucide-react";

const ToastProvider = () => {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            layout
            className="pointer-events-auto min-w-[300px] bg-[#0f0f13] border border-white/10 text-white p-4 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md"
          >
            {toast.type === "success" && <CheckCircle className="w-5 h-5 text-green-500" />}
            {toast.type === "error" && <AlertCircle className="w-5 h-5 text-red-500" />}
            {toast.type === "info" && <Info className="w-5 h-5 text-blue-500" />}
            
            <p className="text-sm font-medium flex-1">{toast.message}</p>
            
            <button 
                onClick={() => removeToast(toast.id)}
                className="text-gray-500 hover:text-white transition-colors"
            >
                <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastProvider;
