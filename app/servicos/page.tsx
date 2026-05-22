"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Importado para gerenciar o histórico
import { ArrowLeft } from "lucide-react"; // Importado o ícone minimalista de seta
import { HiOutlineShieldCheck } from "react-icons/hi"; 
import Responsabilidade from "@/app/quem-somos/responsabilidade";
import SolucoesPorPerfil from "@/app/quem-somos/SolucoesPorPerfil";

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function QuemSomosPage() {
  const router = useRouter(); // Instanciando o roteador

  return (
    <main className="w-full relative">
      
      {/* BOTÃO VOLTAR MINIMALISTA (Seta na cor Azul do Menu) */}
      <div className="absolute top-24 left-6 md:left-12 z-40">
        <button
          onClick={() => router.back()}
          className="text-[#001D3D]/70 hover:text-[#001D3D] transition group cursor-pointer p-1"
          aria-label="Voltar para a página anterior"
        >
          <ArrowLeft size={24} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      <SolucoesPorPerfil />
    </main>
  );
}