// src/lib/wordpress.ts

export async function getPosts() {
  // Buscamos os 6 posts mais recentes com o parâmetro _embed para vir as fotos
  const res = await fetch('https://posocco.com.br/wp-json/wp/v2/posts?_embed&per_page=6', {
    next: { revalidate: 3600 } // Atualiza o cache a cada 1 hora automaticamente
  });

  if (!res.ok) {
    // Se der erro, retorna um array vazio para não quebrar o site
    console.error('Erro ao buscar posts da Posocco');
    return [];
  }

  return res.json();
}