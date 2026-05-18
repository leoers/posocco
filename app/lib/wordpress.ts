const BASE_URL = "https://posocco.com.br/wp-json/wp/v2";

export async function getPosts() {
  const res = await fetch(`${BASE_URL}/posts?_embed&per_page=9`);
  if (!res.ok) throw new Error("Falha ao carregar posts");
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories`);
  if (!res.ok) throw new Error("Falha ao carregar categorias");
  return res.json();
}