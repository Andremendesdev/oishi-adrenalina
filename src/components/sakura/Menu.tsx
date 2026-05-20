import { useState } from "react";

import barca from "@/assets/barca.png";
import temaki from "@/assets/temaki.jpeg";
import Nigiri from "@/assets/Nigiri.jpeg";
import yakssoba from "@/assets/yakssoba.jpeg";
import strogonoff from "@/assets/strogonoff.jpeg";
import porcao from "@/assets/porcao.jpeg";
import nhoque from "@/assets/nhoque.jpeg";
import macarrao from "@/assets/macarrao.jpeg";
import camarao from "@/assets/camarao.jpeg";
import p1 from "@/assets/p1.jpeg";
import ceviche from "@/assets/ceviche.jpeg";
import porcaolinguica from "@/assets/porcaolinguica.jpeg";
import aneis from "@/assets/aneis.jpeg";
import drinks from "@/assets/drinks.png";
import caldo from "@/assets/caldo.jpeg";
import cevichenataca from "@/assets/cevichenataca.jpeg";
import milho from "@/assets/milho.jpeg";

export const Menu = () => {
  // 1. Volta a começar mostrando apenas 4 itens
  const [showAll, setShowAll] = useState(4);

  const items = [
    {
      name: "Temaki",
      desc: "Cones de alga crocante recheados com peixes frescos e ingredientes selecionados.",
      img: temaki,
    },
    {
      name: "Barca",
      desc: "Combinação clássica de cortes finos selecionados pelo nosso sushiman.",
      img: barca,
    },
    {
      name: "Nigiri",
      desc: "Fatias de peixe fresco moldadas perfeitamente sobre arroz temperado.",
      img: Nigiri,
    },
    {
      name: "Yakisoba",
      desc: "Tradicional macarrão oriental com legumes frescos e molho artesanal.",
      img: yakssoba,
    },
    {
      name: "Porções",
      desc: "Petiscos e acompanhamentos fritos na hora, crocantes e saborosos.",
      img: porcao,
    },
    {
      name: "Drinks",
      desc: "Drinks refrescantes preparados com combinações especiais e apresentação sofisticada.",
      img: drinks,
    },
    {
      name: "Strogonoff",
      desc: "Clássico strogonoff cremoso servido com arroz branco e batata palha.",
      img: strogonoff,
    },
    {
      name: "Nhoque",
      desc: "Massa artesanal leve de batata ao molho suculento da casa.",
      img: nhoque,
    },
    {
      name: "Massas",
      desc: "Massas preparadas al dente com molhos especiais e ingredientes selecionados.",
      img: macarrao,
    },
    {
      name: "Camarão",
      desc: "Camarões selecionados preparados com temperos especiais e muito sabor.",
      img: camarao,
    },
    {
      name: "Poke",
      desc: "Bowl havaiano refrescante com peixes frescos, legumes e molhos especiais.",
      img: p1,
    },
    {
      name: "Ceviche",
      desc: "Peixe marinado no limão com cebola roxa, temperos frescos e toque cítrico.",
      img: ceviche,
    },
    {
      name: "Porção de Linguiça",
      desc: "Linguiça grelhada na medida certa, servida quentinha e cheia de sabor.",
      img: porcaolinguica,
    },
    {
      name: "Anéis de Cebola",
      desc: "Anéis de cebola empanados e fritos até ficarem dourados e crocantes.",
      img: aneis,
    },
    {
      name: "Caldo",
      desc: "Caldo quente e saboroso preparado com ingredientes frescos e tempero especial.",
      img: caldo,
    },
    {
      name: "Ceviche na Taça",
      desc: "Versão sofisticada do ceviche servida na taça com muito frescor e sabor.",
      img: cevichenataca,
    },
    {
      name: "Milho no Copo",
      desc: "Milho cremoso servido quentinho no copo com temperos e acompanhamentos especiais.",
      img: milho,
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
                <span className="absolute top-5 right-5 font-jp text-primary/80 text-2xl"></span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-foreground">
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
