// Queries GROQ para buscar dados do Sanity CMS

export const navbarHoursQuery = `*[_type == "navbarHours"][0]{
  automatic,
  status
}`;

export const showsQuery = `*[_type == "liveshows"] | order(coalesce(order, 999) asc) {
  _id,
  artist,
  date,
  time,
  description,
  "imageUrl": image.asset->url
}`;

// Categorias do cardápio com subitens
export const menuCategoriesQuery = `*[_type == "menuCategory"] | order(order asc){
  _id,
  name,
  "slug": slug.current,
  description,
  "image": image.asset->url,
  order,
  items[]{
    name,
    description
  }
}`;

// Gallery images (lista ordenada)
export const galleryImagesQuery = `*[_type == "galleryImage"] | order(order asc){
  _id,
  "image": image.asset->url,
  alt,
  order
}`;
