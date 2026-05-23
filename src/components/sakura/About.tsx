import { useSanityData } from "@/hooks/useSanityData";
import { aboutQuery } from "@/sanity/queries";

// 1. Tipagens para os dados do Sanity e Estatísticas
interface Stat {
  number: string;
  label: string;
}

interface AboutData {
  heading?: string;
  headingLine2?: string;
  paragraph1?: string;
  paragraph2?: string;
  stats?: Stat[];
}

export const About = () => {
  // 2. Corrigido o tipo genérico (substituído 'saniteSetti' por 'AboutData')
  const { data: aboutData } = useSanityData<AboutData>("about", aboutQuery);

  const fallbackStats: Stat[] = [
    { number: "10+", label: "Anos de tradição" },
    { number: "60", label: "Itens no cardápio" },
    { number: "AGSB 🇯🇵🇧🇷", label: "Membro" },
  ];

  const stats = aboutData?.stats?.length ? aboutData.stats : fallbackStats;

  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
      <div className="container grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 reveal">
          <span className="font-jp text-primary text-sm tracking-[0.4em]">
            私たちについて
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05]">
            {aboutData?.heading || "Onde a tradição"}
            <br />
            <span className="italic text-gradient-red">
              {aboutData?.headingLine2 || "encontra Piraju."}
            </span>
          </h2>
        </div>

        <div
          className="lg:col-span-6 lg:col-start-7 reveal"
          style={{ transitionDelay: "120ms" }}
        >
          <p className="text-lg leading-relaxed text-foreground/85 font-light">
            {aboutData?.paragraph1 ? (
              aboutData.paragraph1
            ) : (
              <>
                O <span className="text-primary">Oishi</span> é um restaurante e
                bar japonês reconhecido pela atmosfera única, sabor e
                modernidade. Membro AGSB 🇯🇵🇧🇷, uma releitura ousada do oriente.
              </>
            )}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {aboutData?.paragraph2 ||
              "De sushi e sashimi cuidadosamente selecionados a temakis exclusivos e drinks autorais, oferecemos uma jornada gastronômica em um ambiente sofisticado, perfeito para encontros memoráveis."}
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {/* 3. Tipagem aplicada no map, removendo o 'any' */}
            {stats.map((s: Stat, i: number) => (
              <div key={s.label}>
                <div
                  className={`
                   font-display text-primary
                   ${i === 2 ? "text-2xl" : "text-4xl"}
                      `}
                >
                  {s.number}
                </div>

                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
