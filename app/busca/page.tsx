// app/busca/page.tsx
"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

interface SearchResult {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  slug: string;
  type: "post" | "page";
  featuredImage?: string;
}

export default function BuscaPage() {
  return (
    <Suspense fallback={<BuscaLoading />}>
      <BuscaContent />
    </Suspense>
  );
}

function BuscaContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";
  
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    if (query) {
      performSearch(query);
    } else {
      setLoading(false);
    }
  }, [query]);

  const performSearch = async (searchTerm: string) => {
    setLoading(true);
    try {
      // Buscar em posts
      const postsRes = await fetch(
        `https://posocco.com.br/wp-json/wp/v2/posts?search=${encodeURIComponent(searchTerm)}&_embed&per_page=20`
      );
      const posts = await postsRes.json();

      // Buscar em páginas
      const pagesRes = await fetch(
        `https://posocco.com.br/wp-json/wp/v2/pages?search=${encodeURIComponent(searchTerm)}&_embed&per_page=10`
      );
      const pages = await pagesRes.json();

      // Combinar resultados
      const combinedResults: SearchResult[] = [
        ...(Array.isArray(posts) ? posts.map((post: any) => ({
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 200),
          date: post.date,
          link: `/noticias/${post.slug}`,
          slug: post.slug,
          type: "post" as const,
          featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
        })) : []),
        ...(Array.isArray(pages) ? pages.map((page: any) => ({
          id: page.id,
          title: page.title.rendered,
          excerpt: page.excerpt.rendered?.replace(/<[^>]*>/g, '').substring(0, 200) || page.content.rendered.replace(/<[^>]*>/g, '').substring(0, 200),
          date: page.date,
          link: `/${page.slug}`,
          slug: page.slug,
          type: "page" as const,
          featuredImage: page._embedded?.["wp:featuredmedia"]?.[0]?.source_url
        })) : [])
      ];

      setResults(combinedResults);
    } catch (error) {
      console.error("Erro na busca:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/busca?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  if (loading) {
    return <BuscaLoading />;
  }

  return (
    <main className="bg-white min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Botão Voltar */}
        <button
          onClick={() => router.back()}
          className="mb-8 text-[#001D3D]/70 hover:text-[#001D3D] transition group cursor-pointer p-1 flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          <span className="text-sm">Voltar</span>
        </button>

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">
          Resultados da busca
        </h1>

        {/* Formulário de busca */}
        <form onSubmit={handleSearch} className="mb-12">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Digite sua busca..."
              className="w-full px-6 py-4 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:border-[#001D3D] transition-colors pr-14"
              autoFocus
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#001D3D] transition-colors"
            >
              <Search size={24} />
            </button>
          </div>
        </form>

        {/* Resultados */}
        {query === "" ? (
          <div className="text-center py-20">
            <Search size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">Digite algo para buscar</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">
              Nenhum resultado encontrado para &ldquo;{query}&rdquo;
            </p>
            <p className="text-gray-400">Tente usar outras palavras ou verifique a ortografia</p>
          </div>
        ) : (
          <>
            <p className="text-gray-500 mb-8">
              Encontramos {results.length} resultado{results.length !== 1 ? "s" : ""} para &ldquo;{query}&rdquo;
            </p>

            <div className="space-y-8">
              {results.map((result) => (
                <Link
                  key={`${result.type}-${result.id}`}
                  href={result.link}
                  className="block group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {result.featuredImage && (
                      <div className="relative w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={result.featuredImage}
                          alt={result.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${
                          result.type === "post" 
                            ? "bg-blue-100 text-blue-700" 
                            : "bg-green-100 text-green-700"
                        }`}>
                          {result.type === "post" ? "Notícia" : "Página"}
                        </span>
                        <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                          {new Date(result.date).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      
                      <h2 
                        className="text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#001D3D] transition-colors line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: result.title }}
                      />
                      
                      <p className="text-gray-600 line-clamp-3">
                        {result.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

function BuscaLoading() {
  return (
    <main className="bg-white min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mb-8"></div>
          <div className="h-14 bg-gray-200 rounded-2xl mb-12"></div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-2xl p-6">
                <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}