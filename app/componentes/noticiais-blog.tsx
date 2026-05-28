import Image from "next/image";
import Link from "next/link";

interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
  };
}

export default async function NoticiasBlog() {
  let posts: Post[] = [];

  try {
    const res = await fetch("https://posocco.com.br/wp-json/wp/v2/posts?per_page=6&_embed", {
      next: { revalidate: 3600 } // Cache de 1 hora
    });
    posts = await res.json();
  } catch (error) {
    console.error("Erro na API:", error);
  }

  if (posts.length === 0) return null;

  return (
    <section className="w-full bg-white pt-16 pb-10 md:py-20">
      <div className="container mx-auto max-w-[1600px] px-4 md:px-12">
        
        {/* Grid: 1 coluna no mobile, 2 no tablet e 3 no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {posts.map((post) => {
            const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg";
            
            return (
              <Link 
                key={post.id} 
                href={`/noticias/${post.slug}`}
                className="group block w-full cursor-pointer"
              >
                {/* Imagem com hover igual ao notícias */}
                <div className="relative w-full h-[250px] overflow-hidden rounded-[20px] mb-6">
                  <Image
                    src={imageUrl}
                    alt={post.title.rendered}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Conteúdo do post - igual ao notícias */}
                <div className="space-y-3">
                  <h2 
                    className="text-xl font-bold text-[#1A1A1A] line-clamp-2 leading-tight group-hover:text-[#001D3D] transition-colors"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  
                  <div 
                    className="text-gray-500 text-sm line-clamp-3 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-2">
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}