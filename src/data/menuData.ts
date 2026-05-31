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

export interface CategoryItem {
  name: string;
  desc?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  desc: string;
  img: string;
  items: CategoryItem[];
}

export const fallbackCategories: MenuCategory[] = [
  { 
    id: "sashimis",
    name: "Sashimis", 
    desc: "Fatias finas e precisas de peixe fresco da mais alta qualidade.", 
    img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=600&q=80",
    items: []
  },
  { 
    id: "mini-salgados",
    name: "Mini Salgados", 
    desc: "Porções deliciosas de mini salgados fritos na hora.", 
    img: porcao,
    items: [
      { name: "Aipim com carne seca" },
      { name: "Bacalhau" },
      { name: "Queijo" },
      { name: "Mini pastel de queijo (12un)" },
      { name: "Mini pastel de carne (12un)" },
      { name: "Kibe" },
      { name: "Dadinho de tapioca" },
      { name: "Coxinha" },
      { name: "Bolinho de mandioca com queijo (500g)" }
    ]
  },
  { 
    id: "niguiris",
    name: "Niguiris", 
    desc: "Fatias de peixe fresco moldadas perfeitamente sobre arroz.", 
    img: Nigiri,
    items: []
  },
  { 
    id: "poke",
    name: "Poke", 
    desc: "Bowl refrescante com peixes, legumes e molhos especiais.", 
    img: p1,
    items: []
  },
  { 
    id: "porcoes-frias",
    name: "Porções Frias", 
    desc: "Opções leves e refrescantes perfeitas para começar.", 
    img: ceviche,
    items: [
      { name: "Azeitona", desc: "20 unid." },
      { name: "Mista", desc: "Presunto e mussarela" },
      { name: "1/2 Mista", desc: "Presunto e mussarela" },
      { name: "1/2 Mista Família", desc: "Presunto, mussarela, ovo de codorna, salsicha, salame, azeitonas e pão" },
      { name: "Mista Família", desc: "Presunto, mussarela, ovo de codorna, salsicha, salame, azeitonas e pão" },
      { name: "Ovo de codorna", desc: "12 unid." },
      { name: "Presunto" },
      { name: "Salame" },
      { name: "Porção de Mussarela" },
      { name: "Salsicha em conserva", desc: "UN" }
    ]
  },
  { 
    id: "porcoes-quentes",
    name: "Porções Quentes", 
    desc: "Petiscos fritos e grelhados, crocantes e saborosos.", 
    img: aneis,
    items: []
  },
  { 
    id: "pratos-quentes",
    name: "Pratos Quentes", 
    desc: "Refeições completas preparadas com tempero especial.", 
    img: strogonoff,
    items: []
  },
  { 
    id: "refrigerantes",
    name: "Refrigerantes", 
    desc: "Refrigerantes em lata ou garrafa, bem gelados.", 
    img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
    items: []
  },
  { 
    id: "saladas",
    name: "Saladas", 
    desc: "Saladas frescas com ingredientes selecionados.", 
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    items: [
      { name: "Salada", desc: "Alface, tomate e cebola" },
      { name: "Especial com fruta", desc: "Alface, tomate, rabanete, pepino, rúcula, azeitonas, fruta da época e ovo de codorna" },
      { name: "Palmito", desc: "Tomate, azeitonas, ovo de codorna" },
      { name: "Rúcula com tomate seco", desc: "Rúcula e tomate seco" },
      { name: "Tomate" },
      { name: "Salada mista", desc: "Alface, cenoura, tomate, milho, ovo de codorna e cebola" },
      { name: "Acréscimos", desc: "Alface, Palmito, Tomate, Tomate Seco, Milho, Rúcula, Ovo de codorna, Azeitona" }
    ]
  },
  { 
    id: "massas",
    name: "Massas", 
    desc: "Massas al dente com molhos especiais e saborosos.", 
    img: macarrao,
    items: []
  },
  { 
    id: "sobremesas",
    name: "Sobremesas", 
    desc: "Doces irresistíveis para fechar sua refeição.", 
    img: "https://images.unsplash.com/photo-1563805042-7684c8a9e9ce?auto=format&fit=crop&w=600&q=80",
    items: []
  },
  { 
    id: "sorvetes",
    name: "Sorvetes", 
    desc: "Sorvetes cremosos de diversos sabores.", 
    img: "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&w=600&q=80",
    items: []
  },
  { 
    id: "sucos",
    name: "Sucos", 
    desc: "Sucos naturais feitos com frutas frescas da estação.", 
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80",
    items: []
  },
  { 
    id: "temakis",
    name: "Temakis", 
    desc: "Cones de alga crocante recheados com peixes frescos.", 
    img: temaki,
    items: []
  },
  { 
    id: "tilapia",
    name: "Tilápia", 
    desc: "Porções de tilápia frita, crocante por fora e macia por dentro.", 
    img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
    items: []
  },
  { 
    id: "uramakis",
    name: "Uramakis", 
    desc: "Rolinhos deliciosos com arroz por fora e recheios variados.", 
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80",
    items: []
  },
  { 
    id: "yakissobas",
    name: "Yakissobas", 
    desc: "Tradicional macarrão oriental com legumes frescos e molho.", 
    img: yakssoba,
    items: []
  },
  { 
    id: "entradas",
    name: "Entradas", 
    desc: "Opções deliciosas para abrir o apetite.", 
    img: caldo,
    items: []
  },
  { 
    id: "barcas",
    name: "Barcas", 
    desc: "Combinação clássica de cortes finos selecionados.", 
    img: barca,
    items: []
  },
  { 
    id: "batidinhas",
    name: "Batidinhas", 
    desc: "Bebidas cremosas com álcool e frutas.", 
    img: drinks,
    items: []
  },
  { 
    id: "cachacas",
    name: "Cachaças", 
    desc: "Doses de cachaças selecionadas e especiais.", 
    img: "https://images.unsplash.com/photo-1516594915633-140b9dc563e4?auto=format&fit=crop&w=600&q=80",
    items: []
  },
  { 
    id: "caipirinhas",
    name: "Caipirinhas", 
    desc: "A clássica brasileira feita com cachaça ou vodka e frutas.", 
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    items: []
  },
  { 
    id: "cervejas",
    name: "Cervejas", 
    desc: "Cervejas trincando de geladas para acompanhar.", 
    img: "https://images.unsplash.com/photo-1538481199005-271011d7e091?auto=format&fit=crop&w=600&q=80",
    items: []
  },
  { 
    id: "combinados",
    name: "Combinados", 
    desc: "As melhores seleções de sushis e sashimis em um só prato.", 
    img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=600&q=80",
    items: []
  },
  { 
    id: "energeticos",
    name: "Energéticos", 
    desc: "Para dar aquela energia a mais na sua noite.", 
    img: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80",
    items: []
  },
  { 
    id: "aguas",
    name: "Águas", 
    desc: "Água mineral com ou sem gás.", 
    img: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80",
    items: []
  },
  { 
    id: "especiais",
    name: "Especiais", 
    desc: "Pratos exclusivos e criações especiais da casa.", 
    img: camarao,
    items: []
  },
  { 
    id: "especialidades",
    name: "Especialidades", 
    desc: "As receitas que são o nosso grande destaque.", 
    img: nhoque,
    items: []
  },
  { 
    id: "futomakis",
    name: "Futomakis", 
    desc: "Rolinhos grossos com diversos ingredientes saborosos.", 
    img: "https://images.unsplash.com/photo-1558985250-27a406d64cb3?auto=format&fit=crop&w=600&q=80",
    items: []
  },
  { 
    id: "guarnicoes",
    name: "Guarnições", 
    desc: "Acompanhamentos perfeitos para seu prato principal.", 
    img: milho,
    items: []
  }
];
