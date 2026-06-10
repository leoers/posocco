"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { DesktopCarousel, MobileCarousel } from "./carousel";
import { useState } from "react";

interface BlocoConteudo {
  id: string;
  categoria: string;
  imagemCard: string;
  resumo: string;
  accordions: { titulo: string; itens: string[] }[];
}

interface TemplateProps {
  titulo: string;
  imagemFundo: string;
  dados: BlocoConteudo[];
}

export default function TemplateSolucoes({ titulo, imagemFundo, dados = [] }: TemplateProps) {
  const router = useRouter();

  return (
    <main className="bg-white min-h-screen">
      <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
        <Image src={imagemFundo || ""} alt={titulo || "imagem"} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#001D3D]/15 z-10" />
        <div className="container mx-auto px-6 relative z-20 flex items-center justify-center">
          <button onClick={() => router.back()} className="absolute left-6 md:left-10 text-white/70 hover:text-white transition-all p-2 group">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <h1 className="text-white text-3xl md:text-5xl font-light text-center max-w-4xl tracking-tight">{titulo}</h1>
        </div>
      </section>

      <section className="container mx-auto px-6 -mt-24 relative z-20 pb-12">
        <div className="hidden md:block">
          <DesktopCarousel dados={dados} />
        </div>
        <div className="md:hidden">
          <MobileCarousel dados={dados} />
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {dados?.map((bloco) => (
            <div key={bloco.id} id={bloco.id} className="bg-[#f8f9fa] p-8 md:p-12 scroll-mt-28 flex flex-col justify-between border-t-4 border-[#001D3D]/10">
              <div>
                <h2 className="text-[#001D3D] text-3xl font-bold mb-6">{bloco.categoria}</h2>
                <p className="text-[#001D3D] font-semibold mb-6">{bloco.resumo}</p>
                <div className="space-y-2">
                  {bloco.accordions?.map((acc, i) => <AccordionItem key={i} title={acc.titulo} list={acc.itens} />)}
                </div>
              </div>
              <a href="https://wa.me/5511992175115" target="_blank" rel="noopener noreferrer" className="mt-10 bg-[#001D3D] text-white px-10 py-3 rounded-full w-fit font-medium hover:bg-[#001D3D]/90 transition-colors text-center">Falar com um especialista</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function AccordionItem({ title, list }: { title: string; list: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button onClick={() => setOpen(!open)} className="w-full py-4 flex justify-between items-center text-left font-bold text-[#333]">
        {title}
        <FaChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pb-4 space-y-2 text-gray-600">
            {list?.map((item, idx) => <li key={idx} className="text-sm flex items-start"><span className="mr-2 opacity-50">·</span> {item}</li>)}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}