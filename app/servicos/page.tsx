"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { HiOutlineShieldCheck } from "react-icons/hi"; // Ícone de escudo estável
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
  return (
    <main className="w-full">
            <SolucoesPorPerfil />
    </main>
  );
}