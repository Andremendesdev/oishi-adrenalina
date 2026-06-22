import { useSanityData } from "@/hooks/useSanityData";
import { menuCategoriesQuery } from "@/sanity/queries";
import { ArrowRight } from "lucide-react";
import { fallbackCategories, MenuCategory } from "@/data/menuData";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface SanityCategory {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  order: number;
  items?: { name: string; description?: string }[];
}

const MENU_WHATSAPP_MESSAGE = "Quero ver o Menu";
const INITIAL_ITEMS = 4;

export const Menu = () => {
  const { data: sanityCategories } = useSanityData<SanityCategory[]>(
    "menuCategories",
    menuCategoriesQuery,
  );

  const sanityMapped: MenuCategory[] | undefined = sanityCategories?.length
    ? sanityCategories.map((cat) => ({
        id: cat.slug,
        name: cat.name,
        desc: cat.description || "",
        img: cat.image || "",
        items: (cat.items || []).map((item) => ({
          name: item.name,
          desc: item.description,
        })),
      }))
    : undefined;

  const finalItems = sanityMapped || fallbackCategories;
  const fotosVisiveis = finalItems.slice(0, INITIAL_ITEMS);
  const menuWhatsAppUrl = buildWhatsAppUrl(MENU_WHATSAPP_MESSAGE);

  return (
    <section id="cardapio" className="relative py-16 bg-secondary/40">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="font-jp text-primary text-sm tracking-[0.4em]">
            お品書き
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">
            Nosso <span className="italic text-gradient-red">cardápio</span>
          </h2>
          <div className="divider-line w-32 mt-8" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {fotosVisiveis.map((it, idx) => (
            <article
              key={`${it.id}-${idx}`}
              className="relative h-full bg-card border border-border/60 overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-foreground">
                  {it.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {it.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {finalItems.length > INITIAL_ITEMS && (
          <div className="flex justify-center mt-12">
            <a
              href={menuWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium tracking-wider text-sm uppercase rounded-sm"
            >
              Ver todos
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
