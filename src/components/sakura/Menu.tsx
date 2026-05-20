import { useState } from "react";

import barca from "@/assets/barca.png";
import temaki from "@/assets/temaki.jpeg";
import Nigiri from "@/assets/Nigiri.jpeg";
import yakssoba from "@/assets/yakssoba.jpeg";
import strogonoff from "@/assets/strogonoff.jpeg";
import porcao from "@/assets/porcao.jpeg";
import nhoque from "@/assets/nhoque.jpeg";
import macarrao from "@/assets/macarrao.jpeg";

export const Menu = () => {
  // 1. Volta a começar mostrando apenas 4 itens
  const [showAll, setShowAll] = useState(4);

  const items = [
    {
      name: "temaki",
      jp: "おいしい",
      desc: "Cones de alga crocante recheados com os peixes mais frescos do dia.",
      img: temaki,
    },
    {
      name: "barca",
      jp: "おいしい",
      desc: "Combinação clássica de cortes finos selecionados pelo nosso sushiman.",
      img: barca,
    },
    {
      name: "Nigiri",
      jp: "おいしい",
      desc: "Fatias de peixe fresco moldadas perfeitamente sobre arroz temperado.",
      img: Nigiri,
    },
    {
      name: "Yakssoba",
      jp: "おいしい",
      desc: "Tradicional macarrão oriental com legumes frescos e molho artesanal.",
      img: yakssoba,
    },
    {
      name: "Porções",
      jp: "おいしい",
      desc: "Petiscos e acompanhamentos fritos na hora, crocantes e saborosos.",
      img: porcao,
    },
    {
      name: "Strogonoff",
      jp: "おいしい",
      desc: "Clássico strogonoff cremoso servido com arroz branco e batata palha.",
      img: strogonoff,
    },
    {
      name: "Nhoque",
      jp: "おいしい",
      desc: "Massa artesanal leve de batata ao molho suculento da casa.",
      img: nhoque,
    },
    {
      name: "Massa",
      jp: "おいしい",
      desc: "Macarrão perfeitamente cozido al dente com molho especial do chef.",
      img: macarrao,
    },
  ];

  const fotosVisiveis = items.slice(0, showAll);

  return (
    <section id="cardapio" className="relative py-32 bg-secondary/40">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-jp text-primary text-sm tracking-[0.4em]">
            お品書き
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">
            Nosso <span className="italic text-gradient-red">cardápio</span>
          </h2>
          <div className="divider-line w-32 mt-8" />
        </div>

        {/* 2. O GRID FECHA AQUI APENAS COM OS CARDS DENTRO */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {fotosVisiveis.map((it, idx) => (
            <article
              key={it.name}
              className="group relative bg-card border border-border/60 overflow-hidden hover:border-primary/60 transition-all duration-700"
            >
              <div className="relative aspect-[5/6] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  width={600}
                  height={800}
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

        {/* 3. O BOTÃO FICA AQUI FORA, CENTRALIZADO E BEM VISÍVEL */}
        {showAll < items.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(items.length)}
              className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium tracking-wider text-sm uppercase rounded-sm"
            >
              Ver mais no cardápio
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
