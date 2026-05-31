import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/sakura/Navbar";
import { Footer } from "@/components/sakura/Footer";
import { WhatsAppFab } from "@/components/sakura/WhatsAppFab";
import { PetalRain } from "@/components/sakura/PetalRain";
import { fallbackCategories, MenuCategory, CategoryItem } from "@/data/menuData";
import { useSanityData } from "@/hooks/useSanityData";
import { menuCategoriesQuery } from "@/sanity/queries";

interface SanityCategory {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  order: number;
  items?: { name: string; description?: string }[];
}

const Category = () => {
  const { slug } = useParams();

  const { data: sanityCategories } = useSanityData<SanityCategory[]>(
    "menuCategories",
    menuCategoriesQuery,
  );

  // Tenta encontrar no Sanity primeiro, depois no fallback local
  let category: MenuCategory | undefined;

  if (sanityCategories?.length) {
    const sanityCat = sanityCategories.find((c) => c.slug === slug);
    if (sanityCat) {
      category = {
        id: sanityCat.slug,
        name: sanityCat.name,
        desc: sanityCat.description || "",
        img: sanityCat.image || "",
        items: (sanityCat.items || []).map((item) => ({
          name: item.name,
          desc: item.description,
        })),
      };
    }
  }

  // Fallback para os dados locais se não encontrar no Sanity
  if (!category) {
    category = fallbackCategories.find((c) => c.id === slug);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!category) {
    return (
      <main className="relative bg-background text-foreground min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display mb-4">Categoria não encontrada</h2>
          <Link to="/cardapio" className="text-primary hover:underline">Voltar ao cardápio</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative bg-background text-foreground overflow-x-hidden min-h-screen flex flex-col">
      <PetalRain />
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20 container max-w-4xl">
        <div className="flex flex-col items-center text-center mb-16 relative z-10">
          <span className="font-jp text-primary text-sm tracking-[0.4em] uppercase">
            メニュー
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl text-foreground">
            {category.name}
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {category.desc}
          </p>
          <div className="divider-line w-24 mt-8" />
        </div>

        {category.items && category.items.length > 0 ? (
          <div className="grid gap-4 relative z-10">
            {category.items.map((item, index) => (
              <div 
                key={index}
                className="bg-card/30 backdrop-blur-sm border border-border/40 p-5 hover:border-primary/40 transition-colors"
              >
                <h3 className="text-lg font-display text-foreground tracking-wide">{item.name}</h3>
                {item.desc && (
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground relative z-10">
            <p>Nenhum item cadastrado nesta categoria ainda.</p>
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppFab />
      
      {/* Floating Back Button */}
      <Link
        to="/cardapio"
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-background border border-primary/50 text-primary shadow-lg hover:bg-primary hover:text-white hover:scale-110 transition-all duration-500"
        aria-label="Voltar para o cardápio"
      >
        <ArrowLeft className="w-6 h-6" />
      </Link>
    </main>
  );
};

export default Category;
