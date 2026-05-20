"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const solucoes = [
  {
    title: "Soluções para você",
    image: "/images/sol-1.png",
    link: "https://wa.me/5511992175115", 
  },
  {
    title: "Soluções para empresa",
    image: "/images/sol-2.png",
    link: "https://wa.me/5511992175115",
  },
  {
    title: "Soluções para setor público",
    image: "/images/sol-3.png",
    link: "https://wa.me/5511992175115",
  },
];

export default function Solucoes() {
  return (
    <section className="w-full bg-white px-[10px] py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full min-h-[350px] md:h-[45vh] gap-[10px]">
        {solucoes.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative group overflow-hidden w-full h-full rounded-[2rem] md:rounded-none" 
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* DEGRADÊ ULTRA SUAVE:
                - Começa no topo com apenas 15% de opacidade (#272E42/15) e vai até 40% da imagem
                - Na metade (50%), ele reduz para 5% de opacidade para ficar quase invisível
                - Dali para baixo vai para o transparente total, limpando completamente o fundo */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#272E42]/15 from-40% via-[#272E42]/05 via-50% to-transparent transition-opacity duration-500 group-hover:opacity-40" />

            {/* Como o fundo agora está super limpo e claro, o texto usa um drop-shadow escuro 
                para garantir que a leitura fique perfeita em qualquer monitor */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-center">
              <h3 className="text-white font-bold mb-6 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] text-lg min-[760px]:text-xl xl:text-2xl flex flex-col items-center">
                Soluções 
                <span className="font-bold block [@media(min-width:760px)_and_(max-width:986px)]:max-w-[150px]">
                  para {item.title.split('para ')[1]}
                </span>
              </h3>

              <div className="flex flex-row gap-2 min-[760px]:gap-3 w-full justify-center px-2">
                <a
                  href="https://wa.me/5511992175115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/60 text-white py-2 rounded-full text-[10px] min-[760px]:text-xs font-medium hover:bg-white/20 transition-all text-center backdrop-blur-sm px-4 min-[760px]:px-6 min-[1210px]:px-8 min-[760px]:min-w-[100px] min-[1210px]:min-w-[130px] drop-shadow-md"
                >
                  Serviços
                </a>
                
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