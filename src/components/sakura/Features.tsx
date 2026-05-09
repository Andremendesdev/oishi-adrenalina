import { Sparkles, Leaf, Wine, ConciergeBell } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Ambiente Sofisticado",
    desc: "Iluminação cuidada, design contemporâneo e atmosfera intimista.",
  },
  {
    icon: Leaf,
    title: "Ingredientes Frescos",
    desc: "Peixes selecionados diariamente e produtos importados do Japão.",
  },
  {
    icon: Wine,
    title: "Drinks Exclusivos",
    desc: "Carta autoral assinada pelo nosso bartender, com sake premium.",
  },
  {
    icon: ConciergeBell,
    title: "Atendimento Premium",
    desc: "Equipe treinada para uma experiência gastronômica memorável.",
  },
];

export const Features = () => {
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
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal bg-background p-10 group hover:bg-card transition-colors duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="inline-flex h-14 w-14 items-center justify-center border border-primary/40 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <f.icon size={22} strokeWidth={1.4} />
              </div>
              <h3 className="font-display text-2xl mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
