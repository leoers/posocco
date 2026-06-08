"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { HiOutlineShieldCheck, HiOutlineAcademicCap } from "react-icons/hi";

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
  const router = useRouter();

  return (
    <main className="w-full relative">
      
      {/* BOTÃO VOLTAR MINIMALISTA */}
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
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg-quem-somos.png"
            alt="Escritório Posocco"
            fill
            className="object-cover object-left"
            priority
          />
          <div className="absolute inset-0 bg-black/20" /> 
        </div>

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
            Fundado em 1999, o Posocco & Advogados Associados oferece soluções jurídicas estratégicas e de alto impacto para pessoas físicas e empresas em todo o Brasil.
          </p>
        </motion.div>
      </section>

      {/* SEÇÃO LIDERANÇA (NOVA) */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-[600px] w-full overflow-hidden rounded-[20px] shadow-xl">
              <Image 
                src="/images/fabricio-qs.png" 
                alt="Fabrício Sicchierolli Posocco"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-white/10 md:bg-white/20 z-0" />
            </div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariant}
              className="flex flex-col space-y-6 md:space-y-8"
            >
              <p className="text-lg leading-relaxed text-gray-800 font-normal">
                O escritório é liderado por{" "}
                <span className="font-bold text-[#001D3D]">Fabrício Sicchierolli Posocco</span>,
                advogado com mais de 25 anos de sólida e intensa atuação na linha de frente dos tribunais. Aliando a força de sua vivência prática diária à máxima excelência técnica, possui múltiplas especializações, com destaque para conclusão de Mestrado em Ciências Jurídicas e Sociais pela Universidade de Lisboa.
              </p>
              <p className="text-lg leading-relaxed text-gray-800 font-normal">
                Toda essa vasta experiência de mercado e rigor acadêmico se traduzem também em sua atuação como docente no ensino superior e em cursos preparatórios para carreiras jurídicas, com obras publicadas pela Editora Saraiva e, desde 2019, como presidente das Comissões de Direito Civil e Processo Civil da OAB/São Vicente-SP.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLOCO 1: SÃO MAIS DE 25 ANOS */}
      <div className="bg-white pt-10 md:py-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          className="container mx-auto px-6 text-center max-w-4xl"
        >
          <h2 className="text-[#001D3D] text-3xl md:text-4xl font-bold mb-6">
            Nossa missão
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
            Garantir a proteção absoluta dos direitos de nossos clientes por meio de uma advocacia de excelência. Unimos a força de mais de 25 anos de atuação na linha de frente à inovação estratégica, combinando profundo rigor técnico e combatividade inegociável nos Tribunais para entregar resultados claros, rápidos e implacáveis.
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
          className="container mx-auto px-6 text-center max-w-6xl"
        >
          <div className="flex justify-center mb-6">
            <HiOutlineShieldCheck className="text-[#001D3D] text-7xl opacity-90" />
          </div>
          <h2 className="text-[#001D3D] text-3xl md:text-4xl font-bold mb-6">
            Protegemos o seu direito, não importa onde você esteja
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Com atuação em todo o território nacional, nossa equipe combina notável saber jurídico e ampla experiência prática para defender os seus interesses do início ao fim do processo. Seja no fórum da sua cidade, nos Tribunais localizados na capital do seu Estado ou nas mais altas instâncias em Brasília (STF, STJ, TST, TSE, STM), garantimos a mesma combatividade e excelência técnica. Onde houver um direito a ser defendido — seja na Justiça Comum, Federal, Trabalhista, Eleitoral ou Militar — o Posocco & Advogados Associados estará lá, assegurando que sua voz seja respeitada com o mesmo peso, rigor técnico e estratégia implacável em qualquer lugar do Brasil. 
          </p>
        </motion.div>
      </div>
      
      <Responsabilidade />
      <div className="bg-[#f2f2f2] py-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          className="container mx-auto px-6 text-center max-w-6xl"
        >
          <div className="flex justify-center mb-6">
            <HiOutlineAcademicCap className="text-[#001D3D] text-7xl opacity-90" />
          </div>
          <h2 className="text-[#001D3D] text-3xl md:text-4xl font-bold mb-6">
            Meu Primeiro Cliente: da Teoria à Prática
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Acreditamos no desenvolvimento da advocacia e, por isso, criamos o projeto Meu Primeiro Cliente. Uma iniciativa de responsabilidade social voltada para estudantes do último ano e advogados recém-formados. Mais do que um programa de aprendizado, é uma verdadeira imersão na linha de frente do Direito. Com o acompanhamento lado a lado dos nossos especialistas, o participante vivencia a rotina de um escritório de alto nível: do atendimento estratégico ao cliente e elaboração de peças complexas, até o acompanhamento tático de ações e audiências. Aplicamos nossa experiência de mais de duas décadas para forjar profissionais preparados, éticos e combativos, abrindo caminhos para o mercado e futuras parcerias de sucesso. 
          </p>
        </motion.div>
      </div>
      <div className="flex justify-center w-full pt-20">
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