import Image from "next/image";
import Hero from "@/app/componentes/hero";
import Solutions from "@/app/componentes/solucoes";
import CarouselImprensa from "@/app/componentes/carousel-imprensa";
import NoticiasBlog from "@/app/componentes/noticiais-blog";
import PostsAdicionais from "@/app/componentes/PostsAdicionais";

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Seção Simples: Áreas do Direito (Ajustada para o novo padrão visual limpo da foto) */}
      <section className="bg-[#F8F9FA] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          {/* Unificado em uma estrutura fluida idêntica à que usaremos em Notícias */}
          <h2 className="text-[#001D3D] text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            <span className="font-bold">+ 30</span> Áreas do Direito
          </h2>
          <p className="text-gray-500 text-lg md:text-xl lg:text-2xl font-light tracking-wide max-w-3xl">
            Advogados especializados para todo tipo de desafio
          </p>
        </div>
      </section>

      <Solutions />
      <CarouselImprensa />
      <NoticiasBlog />
      <PostsAdicionais />
    </main>
  );
}