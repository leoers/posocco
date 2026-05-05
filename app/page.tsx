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
      {/* Seção Simples: Áreas do Direito */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#001D3D] text-4xl md:text-5xl font-bold">+ 30</span>
            <h2 className="text-[#001D3D] text-3xl md:text-4xl font-semibold tracking-tight">
              Áreas do Direito
            </h2>
          </div>
          <p className="text-gray-600 text-lg md:text-xl font-light tracking-wide">
            Advogados especializados para todo tipo de desafio
          </p>
        </div>
      </section>
      {/* <AreasAtuacao /> */}
      <Solutions />
      <CarouselImprensa />
      <NoticiasBlog />
      <PostsAdicionais />
      
    </main>
  );
}