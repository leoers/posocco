"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

interface Post {
  id: number;
  title: { rendered: string };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
  };
}

export default function PostsAdicionais() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showGrid, setShowGrid] = useState(false);
  const [loading, setLoading] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const fetchMorePosts = async () => {
    if (showGrid) return;
    setLoading(true);
    try {
      const res = await fetch("https://posocco.com.br/wp-json/wp/v2/posts?per_page=6&offset=6&_embed");
      const data = await res.json();
      setPosts(data);
      setShowGrid(true);
    } catch (error) {
      console.error("Erro ao carregar mais posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleShowLess = () => {
    setShowGrid(false);
    // Opcional: Rola a tela suavemente de volta para o topo da seção
    window.scrollTo({
      top: (gridRef.current?.offsetTop || 0) - 100,
      behavior: "smooth"
    });
  };

  return (
    <section ref={gridRef} className="w-full bg-white pb-20 overflow-hidden">
      <div className="container mx-auto max-w-[1600px] px-6 md:px-12">
        
        {/* Botão Gatilho: Mostre Mais (Aparece apenas quando o grid está fechado) */}
        {!showGrid && (
          <div className="flex flex-col items-center justify-center gap-4 py-10">
            <button 
              onClick={fetchMorePosts}
              disabled={loading}
              className="group flex flex-col items-center gap-2"
            >
              <span className="text-[#333] text-xl md:text-2xl font-light tracking-wide transition-colors group-hover:text-[#001D3D]">
                {loading ? "Carregando..." : "Mostrar mais"}
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full group-hover:bg-gray-50 transition-all"
              >
                <ChevronDown className="w-6 h-6 text-gray-400" />
              </motion.div>
            </button>
          </div>
        )}

        {/* Grid de Posts Adicionais com Animação de Entrada/Saída */}
        <AnimatePresence>
          {showGrid && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-10">
                {posts.map((post) => {
                  const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg";
                  return (
                    <div key={post.id} className="w-full">
                      <a href={post.link} target="_blank" rel="noopener noreferrer" className="group block w-full">
                        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[2.5rem] mb-6 shadow-sm border border-gray-100">
                          <Image
                            src={imageUrl}
                            alt={post.title.rendered}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <div className="min-h-[100px]">
                          <h3 
                            className="text-[#333] font-bold text-xl lg:text-2xl leading-tight line-clamp-3 group-hover:text-[#001D3D] transition-colors"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                          />
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>

              {/* Botão CTA Central */}
              <div className="flex justify-center mt-12 mb-10">
                <a 
                  href="https://posocco.com.br/noticias" target="_blank"
                  className="flex items-center gap-3 bg-[#001D3D] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl"
                >
                  Ver todas as notícias
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Botão Mostrar Menos (Exatamente igual ao Mostrar Mais, mas invertido) */}
              <div className="flex flex-col items-center justify-center gap-4 py-6 border-t border-gray-100">
                <button 
                  onClick={handleShowLess}
                  className="group flex flex-col items-center gap-2"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }} // Seta "pulando" para cima
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full group-hover:bg-gray-50 transition-all"
                  >
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  </motion.div>
                  <span className="text-[#333] text-xl md:text-2xl font-light tracking-wide transition-colors group-hover:text-[#001D3D]">
                    Mostrar menos
                  </span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}