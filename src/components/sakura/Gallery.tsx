import { useSanityData } from "@/hooks/useSanityData";
import { galleryImagesQuery } from "@/sanity/queries";

import i1 from "@/assets/interior.jpeg";
import i2 from "@/assets/interior2.jpeg";
import i3 from "@/assets/interior3.jpeg";
import f1 from "@/assets/fora.jpeg";
import f2 from "@/assets/frente.jpeg";

// 1. Tipagens para a galeria
interface GalleryImage {
  src: string;
  alt: string;
  isLarge: boolean;
}

interface SanityGalleryItem {
  image?: string; // Idealmente, tipar com o objeto de imagem do Sanity se não for string
  alt?: string;
}

export const Gallery = () => {
  // 2. Substituindo 'any[]' pela tipagem correta
  const { data: sanityGallery } = useSanityData<SanityGalleryItem[]>(
    "gallery",
    galleryImagesQuery,
  );

  const fallbackImages: GalleryImage[] = [
    {
      src: i1,
      alt: "Salão do Sakura Lounge com lanternas vermelhas",
      isLarge: true,
    },
    { src: i2, alt: "Chef preparando sushi", isLarge: false },
    { src: f1, alt: "Variedade de sushi", isLarge: false },
    { src: i3, alt: "Bar do Sakura Lounge", isLarge: false },
    { src: f2, alt: "Ambiente do restaurante", isLarge: false },
  ];

  // 3. Mapeando as imagens do Sanity de forma segura e sem 'any'
  let images: GalleryImage[] = fallbackImages;

  if (sanityGallery && sanityGallery.length > 0) {
    images = sanityGallery.map((img, i) => ({
      // Garante que se a imagem não for uma string válida (ex: objeto cru do Sanity), use um fallback
      src:
        typeof img.image === "string"
          ? img.image
          : fallbackImages[i % fallbackImages.length].src,
      alt: img.alt || "Imagem da galeria",
      isLarge: i === 0, // Primeira imagem fica maior no grid
    }));
  }

  return (
    <section id="galeria" className="relative py-32 bg-secondary/40">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-20 reveal">
          <span className="font-jp text-primary text-sm tracking-[0.4em]">
            ギャラリー
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">
            <span className="italic text-gradient-red">Atmosfera</span> Oishi
          </h2>
          <div className="divider-line w-32 mt-8" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 lg:h-[640px]">
          {images.map((img, i) => {
            const delay = i * 80 + "ms";
            const isLarge = img.isLarge;

            return (
              <figure
                key={`gallery-img-${i}`}
                className={`reveal relative overflow-hidden group ${
                  isLarge ? "col-span-2 row-span-2" : ""
                }`}
                style={{ transitionDelay: delay }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform transition-duration-[1200ms] group-hover:scale-105"
                />
                {isLarge && (
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                )}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};
