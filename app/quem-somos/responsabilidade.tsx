"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { HiOutlineUsers } from "react-icons/hi";

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function ResponsabilidadeSocial() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-[#001D3D] text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-widest">
          Responsabilidade social
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* CARD 1: 60+ */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="flex flex-col h-full"
          >
            <div className="relative h-[550px] w-full overflow-hidden flex flex-col justify-between rounded-sm shadow-lg">
              <Image 
                src="/images/box1-qs.png" 
                alt="Amparo a pessoa idosa"
                fill
                className="object-cover"
              />
              
              {/* DEGRADÊ AUMENTADO (Inicia forte e some aos 40%) */}
              <div 
                className="absolute inset-0 z-10" 
                style={{ 
                  background: 'linear-gradient(to bottom, rgba(0,29,61,0.9) 0%, rgba(0,29,61,0.6) 20%, rgba(0,29,61,0) 45%)' 
                }} 
              />

              {/* Conteúdo Superior */}
              <div className="relative z-20 p-10 text-white text-center mt-6">
                <span className="text-7xl font-light mb-2 block">60+</span>
                <h3 className="text-3xl font-bold leading-tight">Damos voz e amparamos a pessoa idosa</h3>
              </div>

              {/* Tarja Azul na Base */}
              <div className="relative z-20 bg-[#001D3D]/95 p-6 mx-4 mb-4 min-h-[140px] flex items-center justify-center">
                <p className="text-sm leading-relaxed text-white text-center">
                  O Ativa+Idade é um trabalho realizado pelos advogados e estagiários do nosso 
                  escritório em instituições de longa permanência para idosos (ILPIs), localizadas 
                  nas cidades de São Paulo e Embu-Guaçu e na região da Baixada Santista.
                </p>
              </div>
            </div>

            <p className="mt-8 text-gray-600 leading-relaxed text-[15px] text-justify md:text-center px-2">
              O objetivo é orientar as pessoas com 60 anos ou mais acerca de seus direitos quanto à 
              legislação previdenciária, assistencial e o Estatuto da Pessoa Idosa. Com essa atividade, 
              já foi possível obter, junto ao Poder Público, benefícios fundamentais para esses residentes, 
              muitos deles abandonados pela família e sem condições de prover o próprio sustento.
            </p>
          </motion.div>

          {/* CARD 2: JUSTIÇA PARA TODOS */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="flex flex-col h-full"
          >
            <div className="relative h-[550px] w-full overflow-hidden flex flex-col justify-between rounded-sm shadow-lg">
              <Image 
                src="/images/box2-qs1.png" 
                alt="Garantimos justiça para todos"
                fill
                className="object-cover"
              />
              
              {/* DEGRADÊ AUMENTADO */}
              <div 
                className="absolute inset-0 z-10" 
                style={{ 
                  background: 'linear-gradient(to bottom, rgba(0,29,61,0.9) 0%, rgba(0,29,61,0.6) 20%, rgba(0,29,61,0) 45%)' 
                }} 
              />

              {/* Conteúdo Superior */}
              <div className="relative z-20 p-10 text-white text-center mt-6 flex flex-col items-center">
                <div className="mb-4">
                   <HiOutlineUsers size={80} className="stroke-1 opacity-95" />
                </div>
                <h3 className="text-3xl font-bold leading-tight">Garantimos justiça para todos</h3>
              </div>

              {/* Tarja Azul na Base */}
              <div className="relative z-20 bg-[#001D3D]/95 p-6 mx-4 mb-4 min-h-[140px] flex items-center justify-center text-center">
                <p className="text-sm leading-relaxed text-white">
                  Mantemos um compromisso permanente com a promoção da cidadania e do acesso à justiça.
                </p>
              </div>
            </div>

            <p className="mt-8 text-gray-600 leading-relaxed text-[15px] text-justify md:text-center px-2">
              Com nosso programa de atuação pro bono, oferecemos assistência jurídica gratuita a 
              pessoas e organizações sem fins lucrativos, atuando com rigor técnico, ética e a 
              mesma excelência de sempre. Apoiamos iniciativas comunitárias e fornecemos orientação 
              jurídica preventiva a fim de impactar positivamente a sociedade.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}