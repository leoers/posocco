// src/lib/wordpress.ts

// A base deve terminar no rest_route=
const BASE_URL = 'https://posoccowp.xyz/wp/index.php?rest_route=';

export async function getPosts(perPage = 6, categoryId?: number, page = 1) {
  // Montagem correta: /wp/v2/posts seguido de & para os parâmetros
  let url = `${BASE_URL}/wp/v2/posts&_embed&per_page=${perPage}&page=${page}`;
  
  if (categoryId) {
    url += `&categories=${categoryId}`;
  }

  const res = await fetch(url, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    console.error('Erro ao buscar posts da Posocco');
    return [];
  }

  return res.json();
}

export async function getCategories() {
  // Montagem correta para categorias
  const res = await fetch(`${BASE_URL}/wp/v2/categories&hide_empty=true`, {
    next: { revalidate: 86400 }
  });

  if (!res.ok) return [];
  return res.json();
}