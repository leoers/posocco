"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Importado corretamente

const solucoes = [
  {
    title: "Soluções para você",
    image: "/images/sol-1.png",
    link: "/solucoes-para-voce", 
  },
  {
    title: "Soluções para empresa",
    image: "/images/sol-2.png",
    link: "/solucoes-sua-empresa",
  },
  {
    title: "Soluções para setor público",
    image: "/images/sol-3.png",
    link: "/solucoes-setor-publico",
  },
];

export default function Solucoes() {
  return (
    <section className="w-full bg-white px-[10px] py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full min-h-[350px] md:h-[45vh] gap-[10px]">
        {solucoes.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }} // Adicionado um leve efeito de subida
            animate={{ opacity: 1, y: 0 }}   // CORRIGIDO: Garante a exibição ao voltar no histórico
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group overflow-hidden w-full h-full rounded-[2rem] md:rounded-none" 
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* DEGRADÊ CIRÚRGICO */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#272E42]/75 from-40% via-[#272E42]/20 via-50% to-transparent transition-opacity duration-500 group-hover:opacity-85" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-center">
              <h3 className="text-white font-light mb-6 tracking-wide drop-shadow-md text-lg min-[760px]:text-xl xl:text-2xl flex flex-col items-center">
                Soluções 
                <span className="font-bold block [@media(min-width:760px)_and_(max-width:986px)]:max-w-[150px]">
                  para {item.title.split('para ')[1]}
                </span>
              </h3>

              <div className="flex flex-row gap-2 min-[760px]:gap-3 w-full justify-center px-2">
                {/* CORRIGIDO: Alterado de <a> para <Link> para manter a navegação SPA interna */}
                <Link
                  href={item.link}
                  className="border border-white/40 text-white py-2 rounded-full text-[10px] min-[760px]:text-xs font-medium hover:bg-white/10 transition-all text-center backdrop-blur-sm px-4 min-[760px]:px-6 min-[1210px]:px-8 min-[760px]:min-w-[100px] min-[1210px]:min-w-[130px]"
                >
                  Serviços
                </Link>
                
                {/* Mantido como <a> porque é um link externo (WhatsApp) */}
                <a
                  href="https://wa.me/5511992175115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#001D3D] py-2 rounded-full text-[10px] min-[760px]:text-xs font-bold hover:bg-gray-100 transition-all text-center shadow-lg px-4 min-[760px]:px-6 min-[1210px]:px-8 min-[760px]:min-w-[100px] min-[1210px]:min-w-[130px]"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}