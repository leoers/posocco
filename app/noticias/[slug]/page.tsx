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
        const response = await fetch(`https://posoccowp.xyz/wp/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
          headers: { 'User-Agent': 'Mozilla/5.0' },
          cache: 'no-store'
        });
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

  const extractVideoUrl = (html: string) => {
    if (!html) return;

    // 1. Elementor JSON
    const elementorMatch = html.match(/youtube_url&quot;:&quot;(.*?)&quot;/);
    if (elementorMatch) {
      setVideoUrl(elementorMatch[1].replace(/\\/g, ''));
      return;
    }

    // 2. Iframe
    const iframeMatch = html.match(/<iframe[^>]*src=["'](https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be)\/[^"']*)["'][^>]*>/i);
    if (iframeMatch) {
      setVideoUrl(iframeMatch[1]);
      return;
    }

    // 3. Link direto
    const youtubeLinkMatch = html.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([^\s&"']+)/);
    if (youtubeLinkMatch) {
      const videoId = youtubeLinkMatch[1].split('?')[0].split('&')[0];
      setVideoUrl(`https://www.youtube.com/embed/${videoId}`);
      return;
    }
  };

  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('youtube.com/watch')) return url.replace('watch?v=', 'embed/');
    if (url.includes('youtu.be/')) return url.replace('youtu.be/', 'youtube.com/embed/');
    return url;
  };

  if (loading) return <main className="min-h-screen pt-28"><div className="text-center">Carregando...</div></main>;
  if (error || !post) return <main className="min-h-screen pt-28"><div className="text-center">Post não encontrado</div></main>;

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
  const embedUrl = videoUrl ? getEmbedUrl(videoUrl) : null;

  return (
    <main className="bg-white min-h-screen pt-28 pb-20 relative">
      {/* Botão Voltar */}
      <div className="absolute top-24 left-6 md:left-12 z-40">
        <button
          onClick={() => router.back()}
          className="text-[#001D3D]/70 hover:text-[#001D3D] transition group cursor-pointer p-1"
          aria-label="Voltar"
        >
          <ArrowLeft size={24} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        {featuredImage && (
          <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden">
            <Image
              src={featuredImage}
              alt={post.title.rendered}
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>
        )}

        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

        <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
        
        {embedUrl && (
          <div className="mt-12 aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </main>
  );
}