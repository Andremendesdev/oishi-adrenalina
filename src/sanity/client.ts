import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "okxbi3pe",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

// Solução definitiva para evitar conflitos de TS
export type SanityImageSource = string;

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
