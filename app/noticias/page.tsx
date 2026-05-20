"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getPosts, getCategories } from "../componentes/wordpress";

export default function Noticias() {
  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // CONTROLADORES DE INTERFACE (Altere para 'true' para reativar os blocos no futuro)
  const showCategories = false; // Oculta a barra de filtros da imagem_288126.png
  const showNewsletter = false; // Oculta o card "Acompanhe a Posocco!"

  useEffect(() => {
    async function loadInitialData() {
      setLoading(true);
      try {
        const [postsData, catsData] = await Promise.all([
          getPosts(8, selectedCategory, 1),
          getCategories()
        ]);
        setPosts(postsData);
        setCategories(catsData);
        setPage(1);
        setHasMore(postsData.length === 8);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadInitialData();
  }, [selectedCategory]);

  const loadMorePosts = async () => {
    const nextPage = page + 1;
    try {
      const newPosts = await getPosts(8, selectedCategory, nextPage);
      if (newPosts.length < 8) setHasMore(false);
      setPosts((prev) => [...prev, ...newPosts]);
      setPage(nextPage);
    } catch (error) {
      console.error("Erro ao carregar mais posts:", error);
    }
  };

  return (
    <main className="bg-white min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Cabeçalho de Título */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-400 mb-6">Notícias</h1>
          
          {/* BLOCO DA IMAGEM (FILTROS): Envelopado na condicional showCategories */}
          {showCategories && (
            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <button 
                onClick={() => setSelectedCategory(undefined)}
                className={`${!selectedCategory ? "text-black border-b-2 border-black" : "text-gray-400 hover:text-black transition-colors"}`}
              >
                Mais recentes
              </button>
              {categories.map((cat) => (
                <button 
                  key={cat.id} 
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`${selectedCategory === cat.id ? "text-black border-b-2 border-black" : "text-gray-400 hover:text-black transition-colors"}`}
                >
                  | {cat.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grid de 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 items-start">
          <AnimatePresence mode="popLayout">
            {posts.map((post) => {
              const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/placeholder.jpg";
              return (
                <motion.article 
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col group cursor-pointer"
                >
                  <Link href={`/noticias/${post.slug}`}>
                    <div className="relative h-[250px] w-full mb-6 overflow-hidden rounded-[20px]">
                      <Image src={image} alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-xl font-bold text-[#1A1A1A] line-clamp-2 leading-tight" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      <div className="text-gray-500 text-sm line-clamp-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-2">
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </AnimatePresence>

          {/* CARD DE ASSINATURA: Ocultado via showNewsletter */}
          {showNewsletter && (
            <motion.div 
              layout
              className="flex flex-col justify-end pb-4 h-full min-h-[300px]"
            >
              <div className="max-w-[300px]">
                <h3 className="text-[22px] font-medium text-[#4D4D4D] mb-2 leading-tight">
                  Acompanhe a Posocco!
                </h3>

                {/* Linha Decorativa Bicolor */}
                <div className="relative w-full h-[3px] bg-[#D1D1D1] mb-10 rounded-full overflow-hidden">
                  <div 
                    className="absolute left-0 top-0 h-full bg-[#001D3D] rounded-full" 
                    style={{ width: '45%' }}
                  ></div>
                </div>

                {/* Input de E-mail Estilo Pílula */}
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="e-mail"
                    className="w-full h-[45px] px-6 bg-white border border-[#707070] rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#001D3D] transition-all"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Botão Ver Mais */}
        {hasMore && !loading && (
          <div className="mt-24 text-center">
            <button 
              onClick={loadMorePosts}
              className="px-14 py-3 border border-black rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300"
            >
              Ver mais
            </button>
          </div>
        )}

        {loading && posts.length === 0 && (
          <div className="flex justify-center py-20 text-gray-400 animate-pulse uppercase tracking-widest text-xs font-bold">
            Carregando notícias...
          </div>
        )}
      </div>
    </main>
  );
}