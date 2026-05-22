import Image from "next/image";

interface Post {
  id: number;
  title: { rendered: string };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
  };
}

// Marcado como async para buscar os dados diretamente ou use um Client Component com useEffect
export default async function NoticiasBlog() {
  let posts: Post[] = [];

  try {
    const res = await fetch("https://posocco.com.br/wp-json/wp/v2/posts?per_page=6&_embed", {
      next: { revalidate: 3600 } // Opcional: cache de 1 hora
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => {
            const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg";
            
            return (
              <a 
                key={post.id} 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block w-full"
              >
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
            );
          })}
        </div>
        
      </div>
    </section>
  );
}