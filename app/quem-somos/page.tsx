"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Importado para gerenciar o histórico de navegação
import { ArrowLeft } from "lucide-react"; // Importado o ícone minimalista de seta
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
  const router = useRouter(); // Instanciando o roteador

  return (
    <main className="w-full relative">
      
      {/* BOTÃO VOLTAR MINIMALISTA (Seta Pura) */}
      <div className="absolute top-24 left-6 md:left-12 z-40">
        <button
          onClick={() => router.back()}
          className="text-white/60 hover:text-white transition group cursor-pointer p-1"
          aria-label="Voltar para a página anterior"
        >
          <ArrowLeft size={24} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      {/* SEÇÃO HERO: NOSSA ESSÊNCIA */}
      <section className="relative w-full min-h-[650px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* CAMADA 1: IMAGEM DE FUNDO */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg-quem-somos.png"
            alt="Escritório Posocco"
            fill
            className="object-cover object-left"
            priority
          />
          {/* Overlay para garantir contraste se a imagem for muito clara */}
          <div className="absolute inset-0 bg-black/20" /> 
        </div>

        {/* CAMADA 2: CONTEÚDO CENTRALIZADO */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center space-y-10"
        >
          <h1 className="text-4xl md:text-6xl font-light text-[#ffffff] tracking-tight">
            Nossa essência
          </h1>

          <div className="py-6">
            <Image 
              src="/images/logo-posocco-geral.png" 
              alt="Logo Posocco"
              width={320}
              height={90}
            />
          </div>

          <p className="text-lg md:text-xl leading-relaxed font-light text-[#ffffff] max-w-4xl">
            O Posocco & Advogados Associados é um escritório de advocacia full service, 
            fundado em 1999, por <span className="font-semibold text-[#fff]">Fabricio Sichierolli Posocco</span>, 
            advogado, professor universitário e de cursos preparatórios para carreiras 
            jurídicas e presidente da Comissão de Direito Civil e Processo Civil da 
            Ordem dos Advogados do Brasil Subseção São Vicente/SP.
          </p>
        </motion.div>
      </section>

      {/* BLOCO 1: SÃO MAIS DE 25 ANOS */}
      <div className="bg-white py-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          className="container mx-auto px-6 text-center max-w-4xl"
        >
          <h2 className="text-[#001D3D] text-3xl md:text-4xl font-bold mb-6">
            São mais de 25 Anos
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Dedicados a oferecer solutions jurídicas de excelência para todo Brasil. 
            Atuando com seriedade para promover a segurança e confiança de nossos 
            clientes em todas as suas questões legais.
          </p>
        </motion.div>
      </div>

      {/* BLOCO 2: PROTEGEMOS TODOS OS SEUS DIREITOS (CINZA) */}
      <div className="bg-[#f2f2f2] py-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          className="container mx-auto px-6 text-center max-w-5xl"
        >
          <div className="flex justify-center mb-6">
            <HiOutlineShieldCheck className="text-[#001D3D] text-7xl opacity-90" />
          </div>
          <h2 className="text-[#001D3D] text-3xl md:text-4xl font-bold mb-6">
            Protegemos todos os seus direitos
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Contamos com uma equipe de advogados com notável saber jurídico e ampla experiência 
            profissional na área acadêmica e na prática jurídica. Esse conhecimento profundo é 
            aplicado para defender os seus direitos nos Tribunais de Justiças Estaduais (TJs), 
            nos Tribunais Regionais Federais (TRFs), nas Justiças Especializadas (Trabalho, 
            Eleitoral e Militar), nos Tribunais Superiores (STJ, TST, TSE, STM) e no Supremo Tribunal Federal (STF).
          </p>
        </motion.div>
      </div>

      {/* BLOCO 3: RESPONSABILIDADE SOCIAL */}
      <Responsabilidade />
      
      {/* Botão Superior: Falar com Especialista */}
      <div className="flex justify-center w-full">
        <Link 
          href="https://wa.me/5511992175115" target="_blank"
          className="bg-[#001D3D] text-white px-12 py-3 rounded-full font-medium hover:bg-[#003566] transition-all duration-300 mb-10 shadow-lg text-lg"
        >
          Falar com um especialista
        </Link>
      </div>
        
      <SolucoesPorPerfil />
    </main>
  );
}