"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded?: { "wp:featuredmedia"?: Array<{ source_url: string }> };
}

export default function NoticiaIndividual() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      try {
        setLoading(true);
        const response = await fetch(`https://posocco.com.br/wp-json/wp/v2/posts?slug=${slug}&_embed`);
        const data = await response.json();
        if (data && data.length > 0) {
          setPost(data[0]);
          extractVideoUrl(data[0].content.rendered);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Erro ao buscar post:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  // Função para extrair URL do vídeo de múltiplas fontes
  const extractVideoUrl = (html: string) => {
    if (!html) return;

    // 1. Tentar extrair do JSON do Elementor
    const elementorMatch = html.match(/youtube_url&quot;:&quot;(.*?)&quot;/);
    if (elementorMatch) {
      const url = elementorMatch[1].replace(/\\/g, '');
      setVideoUrl(url);
      return;
    }

    // 2. Tentar extrair de iframe do YouTube
    const iframeMatch = html.match(/<iframe[^>]*src=["'](https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be)\/[^"']*)["'][^>]*>/i);
    if (iframeMatch) {
      setVideoUrl(iframeMatch[1]);
      return;
    }

    // 3. Tentar extrair de link direto do YouTube
    const youtubeLinkMatch = html.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([^\s&"']+)/);
    if (youtubeLinkMatch) {
      let videoId = youtubeLinkMatch[1];
      // Limpar parâmetros extras
      videoId = videoId.split('?')[0].split('&')[0];
      setVideoUrl(`https://www.youtube.com/embed/${videoId}`);
      return;
    }

    // 4. Tentar extrair do Vimeo
    const vimeoMatch = html.match(/https?:\/\/(?:www\.)?vimeo\.com\/(\d+)/);
    if (vimeoMatch) {
      setVideoUrl(`https://player.vimeo.com/video/${vimeoMatch[1]}`);
      return;
    }

    // 5. Tentar extrair vídeo do Elementor
    const elementorVideoMatch = html.match(/data-video=["']([^"']+)["']/);
    if (elementorVideoMatch) {
      setVideoUrl(elementorVideoMatch[1]);
      return;
    }
  };

  // Função para converter URL para embed
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    
    // YouTube
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    // YouTu.be
    if (url.includes('youtu.be')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    // Vimeo
    if (url.includes('vimeo.com')) {
      const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    // Se já for embed
    if (url.includes('/embed/')) {
      return url;
    }
    return url;
  };

  // Limpar o HTML do conteúdo
  const cleanContent = (html: string) => {
    if (!html) return '';
    
    let cleaned = html;
    
    // Remover divs vazias do Elementor
    cleaned = cleaned.replace(/<div class="elementor-video"><\/div>/g, '');
    
    // Remover iframes de vídeo (já que vamos renderizar separadamente)
    cleaned = cleaned.replace(/<iframe[^>]*src=["'](https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be|vimeo\.com)[^"']*)["'][^>]*><\/iframe>/gi, '');
    
    return cleaned;
  };

  if (loading) {
    return (
      <main className="bg-white min-h-screen pt-28 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-center py-20">
            <div className="text-gray-400 animate-pulse uppercase tracking-widest text-xs font-bold">
              Carregando post...
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="bg-white min-h-screen pt-28 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-6">Post não encontrado</p>
            <button
              onClick={() => router.push('/noticias')}
              className="px-8 py-3 border border-black rounded-full text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all"
            >
              Voltar para notícias
            </button>
          </div>
        </div>
      </main>
    );
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
  const cleanedContent = cleanContent(post.content.rendered);
  const embedUrl = videoUrl ? getEmbedUrl(videoUrl) : null;

  return (
    <main className="bg-white min-h-screen pt-28 pb-20">
      {/* BOTÃO VOLTAR */}
      <div className="absolute top-24 left-6 md:left-12 z-40">
        <button
          onClick={() => router.back()}
          className="text-[#001D3D]/70 hover:text-[#001D3D] transition group cursor-pointer p-1"
          aria-label="Voltar"
        >
          <ArrowLeft
            size={24}
            strokeWidth={1.5}
            className="group-hover:-translate-x-1 transition-transform"
          />
        </button>
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        {/* Data do post */}
        <div className="text-center mb-6">
          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
            {new Date(post.date).toLocaleDateString('pt-BR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </p>
        </div>

        {/* Título */}
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] text-center mb-12 leading-tight"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {/* Imagem destacada */}
        {featuredImage && (
          <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={featuredImage}
              alt={post.title.rendered}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        

        {/* Conteúdo do post */}
        <article
          className="
            prose 
            prose-lg 
            max-w-none
            prose-headings:text-[#001D3D]
            prose-h1:text-3xl
            prose-h2:text-2xl
            prose-h3:text-xl
            prose-p:text-gray-700
            prose-p:leading-relaxed
            prose-p:mb-6
            prose-a:text-blue-700
            prose-strong:text-black
            prose-strong:font-bold
            prose-img:rounded-xl
            prose-img:w-full
            prose-img:h-auto
            prose-li:text-gray-700
            prose-blockquote:border-l-4
            prose-blockquote:border-[#001D3D]
            prose-blockquote:pl-4
            prose-blockquote:italic
          "
          dangerouslySetInnerHTML={{ __html: cleanedContent }}
        />
        {/* Vídeo - Versão nativa com iframe */}
        {embedUrl && (
          <div className="mt-[50px] mb-12 rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video">
              <iframe
                src={embedUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Vídeo do post"
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}