"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#000814]">
      {/* Imagem de Fundo PNG */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/office-bg.png" 
          alt="Escritório Posocco Advogados"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        
        {/* --- NOVO DEGRADÊ SUAVE E LONGO --- */}
        <div className="absolute top-0 left-0 right-0 h-[70%] bg-gradient-to-b from-[#000814]/80 via-[#000814]/40 via-[#000814]/10 to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Título sem quebras e fluido */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 tracking-tight leading-tight max-w-[90vw] md:max-w-none mx-auto">
            A Justiça que você busca, com a excelência que você merece.
          </h1>

          {/* AJUSTADO: Aumentamos max-w-2xl para max-w-4xl para a frase institucional se manter em uma linha só no desktop */}
          <p className="text-white/95 text-base md:text-xl max-w-4xl mx-auto mb-10 font-light tracking-wide leading-relaxed">
            Escritório de advocacia full service com atendimento em todo o Brasil.
          </p>

          {/* Botões (CTAs) agora abraçados pelo final do degradê */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 z-30 relative">
            <Link 
              href="/quem-somos" 
              className="border border-white/70 text-white px-10 py-3 rounded-full hover:bg-white/10 transition-all w-full sm:w-auto min-w-[220px] font-semibold text-lg tracking-wide flex items-center justify-center cursor-pointer shadow-lg"
            >
              Quem Somos
            </Link>
            
            <Link 
              href="https://wa.me/5511992175115" target="_blank" 
              className="bg-white text-[#001D3D] px-10 py-3 rounded-full hover:bg-gray-100 transition-all w-full sm:w-auto min-w-[220px] font-bold text-lg tracking-wide shadow-2xl flex items-center justify-center cursor-pointer"
            >
              Agendar Consulta
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Grid Decorativo sutil */}
      <div className="absolute inset-0 z-[5] opacity-[0.03] pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>
    </section>
  );
}