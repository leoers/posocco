// src/lib/wordpress.ts

const BASE_URL = 'https://posocco.com.br/wp-json/wp/v2';

/**
 * Busca posts do WordPress com suporte a limite, categorias e paginação.
 * @param perPage - Quantidade de posts por página (Home usa 6, Notícias pode usar 100)
 * @param categoryId - ID da categoria para filtrar os posts (opcional)
 * @param page - Número da página para paginação futura (opcional)
 */
export async function getPosts(perPage = 6, categoryId?: number, page = 1) {
  // Construção dinâmica da URL
  let url = `${BASE_URL}/posts?_embed&per_page=${perPage}&page=${page}`;
  
  if (categoryId) {
    url += `&categories=${categoryId}`;
  }

  const res = await fetch(url, {
    next: { revalidate: 3600 } // Cache de 1 hora conforme sua estratégia
  });

  if (!res.ok) {
    console.error('Erro ao buscar posts da Posocco');
    return [];
  }

  return res.json();
}

/**
 * Busca todas as categorias que possuem posts vinculados.
 */
export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories?hide_empty=true`, {
    next: { revalidate: 86400 } // Cache de 24h para categorias
  });

  if (!res.ok) return [];
  return res.json();
}