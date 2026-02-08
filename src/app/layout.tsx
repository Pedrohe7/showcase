import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Velvet Mode | Streetwear & Fashion",
  description: "A marca de moda urbana que define tendências. Coleção Outono/Inverno disponível.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
