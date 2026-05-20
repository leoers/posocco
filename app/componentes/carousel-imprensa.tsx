"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const logos = [
  // Emissoras de TV / Rádio (Linha de cima do print)
  { name: "Record", src: "/images/logos/record.png" },
  { name: "RedeTV", src: "/images/logos/redetv.png" },
  { name: "Cultura", src: "/images/logos/cultura.png" },
  { name: "Record News", src: "/images/logos/recordnews.svg" },
  { name: "Futura", src: "/images/logos/futura.png" },
  { name: "Santa Cecília TV", src: "/images/logos/santaceciliatv.png" },
  { name: "BS TV", src: "/images/logos/bstv.png" },
  { name: "Rádio Justiça", src: "/images/logos/radiojustica.jpeg" },
  { name: "Rádio Bandeirantes", src: "/images/logos/radiobandeirantes.png" },
  { name: "Jovem Pan", src: "/images/logos/jovempan.svg" },
  { name: "CBN", src: "/images/logos/cbn.svg" },
  { name: "Capital", src: "/images/logos/capital.png" },
  { name: "Nova Brasil", src: "/images/logos/novabrasil.png" },
  { name: "A Tarde FM", src: "/images/logos/atarde.jpeg" },
  { name: "Santos FM", src: "/images/logos/santosfm.png" },
  { name: "GloboNews", src: "/images/logos/globonews.svg" },

  // Portais de Notícias / Jornais (Linha de baixo do print)
  { name: "A Tribuna", src: "/images/logos/atribuna.svg" },
  { name: "Folha de S.Paulo", src: "/images/logos/folhadespaulo.png" },
  { name: "Estadão", src: "/images/logos/estadao.png" },
  { name: "UOL", src: "/images/logos/uol.png" },
  { name: "Metrópoles", src: "/images/logos/metropoles.png" },
  { name: "R7", src: "/images/logos/r7.svg" },
  { name: "Veja SP", src: "/images/logos/vejasp.webp" },
  { name: "Terra", src: "/images/logos/terra.png" },
  { name: "iG", src: "/images/logos/ig.webp" },
  { name: "Migalhas", src: "/images/logos/migalhas.png" },
  { name: "Consultor Jurídico", src: "/images/logos/conjur.png" },
  { name: "Jusbrasil", src: "/images/logos/jusbrasil.png" },
  { name: "EBC", src: "/images/logos/ebc.png" },
  { name: "Globo", src: "/images/logos/globo.png" },
  { name: "Band", src: "/images/logos/band.svg" },
  { name: "SBT", src: "/images/logos/sbt.svg" },
  { name: "GWC", src: "/images/logos/gwc.png" }
];

const duplicateLogos = [...logos, ...logos, ...logos];

export default function CarouselImprensa() {
  const [activeDot, setActiveDot] = useState(0);

  // Sincroniza os pontinhos com o tempo de 30s da animação (10s para cada ponto)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 3);
    }, 10000); // 30 segundos divididos por 3 pontos = 10000ms

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-12 overflow-hidden border-b border-gray-100">
      <div className="max-w-8xl mx-auto px-6 flex flex-col items-center text-center mb-16 w-full">
        <h2 className="text-[#001D3D] text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
          Notícias
        </h2>
        {/* Removido o truncate e igualado o tamanho (text-lg md:text-xl lg:text-2xl) */}
        <p className="text-gray-500 text-lg md:text-xl lg:text-2xl font-light tracking-wide max-w-4xl">
          Somos fonte de informação jurídica para a imprensa de todo o país
        </p>
      </div>

      {/* Container do Carousel */}
      <div className="flex relative items-center mb-8">
        <motion.div
          className="flex gap-16 items-center"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicateLogos.map((logo, index) => (
            <div 
              key={index} 
              className="relative w-[100px] h-[50px] flex-shrink-0 opacity-100 transition-opacity duration-500 hover:opacity-80"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pontinhos Indicadores (Bullets) */}
      <div className="flex justify-center gap-2">
        {[0, 1, 2].map((dot) => (
          <div
            key={dot}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              activeDot === dot 
                ? "bg-[#001D3D] w-6" // O ponto ativo fica mais compridinho e escuro
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}