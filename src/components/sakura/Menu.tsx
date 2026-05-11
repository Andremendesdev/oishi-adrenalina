import sushi from "@/assets/menu-sushi.jpg";
import sashimi from "@/assets/menu-sashimi.jpg";
import temaki from "@/assets/menu-temaki.jpg";
import hot from "@/assets/menu-hot.jpg";
import drinks from "@/assets/menu-drinks.jpg";

const items = [
  {
    name: "Sushi",
    jp: "寿司",
    desc: "Peças clássicas e autorais com peixes selecionados diariamente.",
    img: "/images/combinado.png",
  },
  {
    name: "barca",
    jp: "刺身",
    desc: "Cortes finos de salmão, atum e peixe branco em sua forma mais pura.",
    img: "/images/barca.png",
  },
  {
    name: "Temaki",
    jp: "手巻き",
    desc: "Cones de alga crocante recheados com combinações exclusivas da casa.",
    img: temaki,
  },
  {
    name: "Pratos Quentes",
    jp: "温かい料理",
    desc: "Yakisoba, ramen e robatas preparados na hora pelo nosso chef.",
    img: hot,
  },
  {
    name: "Drinks",
    jp: "ドリンク",
    desc: "Coquetéis autorais com sake, gin japonês e infusões de sakura.",
    img: "/images/drinks.png",
  },
];

export const Menu = () => {
  return (
    <section id="cardapio" className="relative py-32 bg-secondary/40">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-20 reveal">
          <span className="font-jp text-primary text-sm tracking-[0.4em]">
            お品書き
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">
            Nosso <span className="italic text-gradient-red">cardápio</span>
          </h2>
          <div className="divider-line w-32 mt-8" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, idx) => (
            <article
              key={it.name}
              className="reveal group relative bg-card border border-border/60 overflow-hidden hover:border-primary/60 transition-all duration-700"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className="absolute top-5 right-5 font-jp text-primary/80 text-2xl">
                  {it.jp}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-3xl text-foreground">
                  {it.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {it.desc}
                </p>
                <div className="mt-5 h-px w-10 bg-primary/60 transition-all duration-500 group-hover:w-20" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
