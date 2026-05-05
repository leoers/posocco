"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaHandshake, FaBriefcase, FaUniversity } from "react-icons/fa";

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const solutions = [
  {
    title: "Soluções para você",
    image: "/images/bg3-qs.png",
    link: "/solucoes-pessoa-fisica",
    icon: <FaHandshake size={35} className="text-white/80" />
  },
  {
    title: "Soluções para empresa",
    image: "/images/bg4-qs.png",
    link: "/solucoes-empresa",
    icon: <FaBriefcase size={32} className="text-white/80" />
  },
  {
    title: "Soluções para setor público",
    image: "/images/bg5-qs.png",
    link: "/solucoes-setor-publico",
    icon: <FaUniversity size={32} className="text-white/80" />
  }
];

export default function SolucoesPorPerfil() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Botão Superior: Falar com Especialista */}
        <Link 
          href="/contato" 
          className="bg-[#001D3D] text-white px-12 py-3 rounded-full font-medium hover:bg-[#003566] transition-all duration-300 mb-10 shadow-lg text-lg"
        >
          Falar com um especialista
        </Link>

        {/* Título Principal */}
        <h2 className="text-[#333] text-3xl md:text-4xl font-light text-center mb-16">
          Encontre a solução ideal:
        </h2>

        {/* Grid de Soluções */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="relative group h-[300px] w-full overflow-hidden rounded-sm cursor-pointer"
            >
              <Link href={item.link}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay com Degradê Suave (Inverso ao anterior, mais escuro na base) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                {/* Ícone no Canto Superior Direito */}
                <div className="absolute top-6 right-6 z-20">
                  {item.icon}
                </div>

                {/* Conteúdo Inferior: Título e Botão Ver Mais */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex justify-between items-end">
                  <h3 className="text-white text-xl font-semibold max-w-[160px]">
                    {item.title}
                  </h3>
                  
                  <span className="bg-white text-[#333] px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                    ver mais
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}