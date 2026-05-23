import {
  Sparkles,
  Leaf,
  Wine,
  ConciergeBell,
  Fish,
  ChefHat,
  Clock,
  Heart,
  Star,
  Flame,
  LucideIcon, // 1. Importando a tipagem oficial do Lucide
} from "lucide-react";
import { useSanityData } from "@/hooks/useSanityData";
import { featuresQuery } from "@/sanity/queries";

// 2. Tipagens para os diferenciais
interface FeatureItem {
  icon: string;
  title: string;
  description?: string;
  desc?: string; // Mantido como opcional para garantir compatibilidade com dados antigos
}

// 3. Removendo o 'any' e tipando o mapa de ícones
const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Leaf,
  Wine,
  ConciergeBell,
  Fish,
  ChefHat,
  Clock,
  Heart,
  Star,
  Flame,
};

export const Features = () => {
  // 4. Aplicando a tipagem no hook do Sanity
  const { data: sanityFeatures } = useSanityData<FeatureItem[]>(
    "features",
    featuresQuery,
  );

  const fallbackFeatures: FeatureItem[] = [
    {
      icon: "Sparkles",
      title: "Ambiente Sofisticado",
      description: "Iluminação cuidada, design contemporâneo e atmosfera.",
    },
    {
      icon: "Leaf",
      title: "Ingredientes Frescos",
      description: "Peixes selecionados diariamente.",
    },
    {
      icon: "Wine",
      title: "Drinks Exclusivos",
      description: "Variedades de Drinks, com a melhor qualidade da região.",
    },
    {
      icon: "ConciergeBell",
      title: "Atendimento Premium",
      description: "Equipe treinada para uma experiência memorável.",
    },
  ];

  const featuresList = sanityFeatures?.length
    ? sanityFeatures
    : fallbackFeatures;

  return (
    <section id="diferenciais" className="relative py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5 reveal">
            <span className="font-jp text-primary text-sm tracking-[0.4em]">
              特徴
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05]">
              Nossos{" "}
              <span className="italic text-gradient-red">diferenciais</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 self-end text-muted-foreground text-lg leading-relaxed reveal">
            Cada detalhe foi pensado para transformar uma simples refeição em
            uma experiência sensorial completa — do primeiro gole ao último
            corte.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60">
          {featuresList.map((f, i) => {
            // Se o ícone não existir no mapa, o Sparkles será usado como fallback
            const Icon = iconMap[f.icon] || Sparkles;

            return (
              <div
                key={`${f.title}-${i}`}
                className="reveal bg-background p-10 group hover:bg-card transition-colors duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="inline-flex h-14 w-14 items-center justify-center border border-primary/40 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Icon size={22} strokeWidth={1.4} />
                </div>
                <h3 className="font-display text-2xl mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.description || f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
