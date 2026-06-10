"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

interface BlocoConteudo {
  id: string;
  categoria: string;
  imagemCard: string;
}

export function DesktopCarousel({ dados }: { dados: BlocoConteudo[] }) {
  const [index, setIndex] = useState(0);
  const cardWidth = 328;
  const maxIndex = Math.max(0, dados.length - 4);

  return (
    <div className="relative group">
      {index > 0 && (
        <button onClick={() => setIndex(index - 1)} className="absolute left-[-20px] top-1/2 z-30 bg-white p-4 rounded-full shadow-xl text-[#001D3D]"><FaChevronLeft size={20} /></button>
      )}
      {index < maxIndex && (
        <button onClick={() => setIndex(index + 1)} className="absolute right-[-20px] top-1/2 z-30 bg-white p-4 rounded-full shadow-xl text-[#001D3D]"><FaChevronRight size={20} /></button>
      )}
      
      <div className="overflow-hidden">
        <motion.div className="flex gap-6" animate={{ x: -(index * cardWidth) }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
          {dados.map((item, idx) => (
            <a key={idx} href={`#${item.id}`} className="w-[280px] h-[350px] flex-shrink-0 relative overflow-hidden rounded-sm shadow-2xl bg-slate-800">
              <Image src={item.imagemCard} alt={item.categoria} fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D] via-[#001D3D]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white"><h3 className="text-xl font-bold uppercase">{item.categoria}</h3></div>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Pontinhos para Desktop */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button 
            key={i} 
            onClick={() => setIndex(i)} 
            className={`h-2.5 rounded-full transition-all duration-300 ${index === i ? "bg-[#001D3D] w-6" : "bg-gray-300 w-2.5"}`} 
          />
        ))}
      </div>
    </div>
  );
}

export function MobileCarousel({ dados }: { dados: BlocoConteudo[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Efeito para garantir que o índice atualize corretamente com o embla
  if (emblaApi) {
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {dados.map((item, idx) => (
            <div key={idx} className="flex-[0_0_100%] px-2">
              <a href={`#${item.id}`} className="block w-full h-[350px] relative rounded-sm overflow-hidden shadow-2xl bg-slate-800">
                <Image src={item.imagemCard} alt={item.categoria} fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D] via-[#001D3D]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white"><h3 className="text-xl font-bold uppercase">{item.categoria}</h3></div>
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-2 mt-8">
        {dados.map((_, i) => (
          <button 
            key={i} 
            onClick={() => emblaApi?.scrollTo(i)} 
            className={`h-2.5 rounded-full transition-all duration-300 ${selectedIndex === i ? "bg-[#001D3D] w-6" : "bg-gray-300 w-2.5"}`} 
          />
        ))}
      </div>
    </div>
  );
}