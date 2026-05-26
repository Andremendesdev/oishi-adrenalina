// Queries GROQ para buscar dados do Sanity CMS

// Settings gerais do restaurante (singleton)
export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  restaurantName,
  tagline,
  whatsappNumber,
  whatsappMessage,
  address,
  phone,
  instagram,
  openHour,
  closeHour,
  hoursLabel,
  hoursDisplay,
  copyrightText
}`;

// Hero section (singleton)
export const heroQuery = `*[_type == "hero"][0]{
  subtitle,
  headingLine1,
  headingLine2,
  tagline,
  description,
  ctaButtonText,
  secondaryLinkText,
  "backgroundImage": backgroundImage.asset->url
}`;
// Adicione isto ao seu arquivo de queries
export const showsQuery = `*[_type == "liveshows"] | order(date asc) {
  artist,
  date,
  time,
  description,
  "imageUrl": image.asset->url
}`;

// About section (singleton)
export const aboutQuery = `*[_type == "about"][0]{
  heading,
  headingLine2,
  paragraph1,
  paragraph2,
  stats[]{ number, label }
}`;

// Menu items (lista ordenada)
export const menuItemsQuery = `*[_type == "menuItem"] | order(order asc){
  _id,
  name,
  description,
  "image": image.asset->url,
  order
}`;

// Features / diferenciais (lista ordenada)
export const featuresQuery = `*[_type == "feature"] | order(order asc){
  _id,
  icon,
  title,
  description,
  order
}`;

// Gallery images (lista ordenada)
export const galleryImagesQuery = `*[_type == "galleryImage"] | order(order asc){
  _id,
  "image": image.asset->url,
  alt,
  order
}`;

// CTA Reserve section (singleton)
export const ctaReserveQuery = `*[_type == "ctaReserve"][0]{
  heading,
  description,
  buttonText
}`;
