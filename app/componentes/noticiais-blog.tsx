"use client";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Post {
  id: number;
  title: { rendered: string };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
  };
}

export default function NoticiasBlog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(6); 
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [itemsToScroll, setItemsToScroll] = useState(3);

  // Detecta o tamanho da tela para ajustar a navegação do slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToScroll(1);
      else if (window.innerWidth < 1024) setItemsToScroll(2);
      else setItemsToScroll(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://posocco.com.br/wp-json/wp/v2/posts?per_page=6&_embed");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Erro na API:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const extendedPosts = [...posts, ...posts, ...posts];

  useEffect(() => {
    if (currentIndex >= 12 || currentIndex <= 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(6);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  if (loading || posts.length === 0) return null;

  return (
    <section className="w-full bg-white py-10 md:py-20 overflow-hidden">
      <div className="container mx-auto max-w-[1600px] px-4 md:px-12 relative">
        
        {/* Setas: Menores no mobile e fora do conteúdo para não sobrepor */}
        <button 
          onClick={handlePrev}
          className="absolute left-1 md:-left-4 top-[35%] md:top-[40%] -translate-y-1/2 z-30 p-1.5 md:p-3 rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50 transition-all"
        >
          <ChevronLeft className="w-5 h-5 md:w-7 md:h-7 text-gray-400" />
        </button>

        <button 
          onClick={handleNext}
          className="absolute right-1 md:-right-4 top-[35%] md:top-[40%] -translate-y-1/2 z-30 p-1.5 md:p-3 rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50 transition-all"
        >
          <ChevronRight className="w-5 h-5 md:w-7 md:h-7 text-gray-400" />
        </button>

        <div className="w-full overflow-hidden">
          <motion.div 
            className="flex"
            // O cálculo agora é dinâmico (100/1, 100/2 ou 100/3) dependendo da tela
            animate={{ x: `-${currentIndex * (100 / itemsToScroll)}%` }}
            transition={isTransitioning ? { type: "tween", ease: "easeInOut", duration: 0.5 } : { duration: 0 }}
          >
            {extendedPosts.map((post, index) => {
              const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg";
              
              return (
                <div 
                  key={`${post.id}-${index}`} 
                  // RESPONSIVIDADE: 1 post (mobile), 2 posts (tablet), 3 posts (desktop)
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%] px-3 md:px-4 box-border"
                >
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="group block w-full">
                    
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] mb-4 md:mb-6 shadow-sm bg-gray-100">
                      <Image
                        src={imageUrl}
                        alt={post.title.rendered}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="min-h-[80px] md:min-h-[100px]">
                      <h3 
                        className="text-[#333] font-bold text-lg md:text-xl lg:text-2xl leading-tight line-clamp-3 group-hover:text-[#001D3D] transition-colors"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                    </div>
                  </a>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}