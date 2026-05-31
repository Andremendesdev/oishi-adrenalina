/**
 * Script para popular o Sanity CMS com todas as categorias do cardápio.
 * 
 * Como usar:
 * 1. Gere um token em: https://www.sanity.io/manage/project/okxbi3pe/api#tokens
 *    (crie um token com permissão "Editor" ou "Deploy Studio")
 * 2. Execute: npx sanity exec scripts/seed-categories.ts --with-user-token
 *    OU: SANITY_TOKEN=seu_token node scripts/seed-categories.mjs
 */

import { createClient } from "@sanity/client";

const projectId = "okxbi3pe";
const dataset = "production";

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

interface CategoryItem {
  _type: string;
  _key: string;
  name: string;
  description?: string;
}

interface CategoryDoc {
  _type: string;
  name: string;
  slug: { _type: string; current: string };
  description: string;
  order: number;
  items: CategoryItem[];
}

const categories: CategoryDoc[] = [
  {
    _type: "menuCategory",
    name: "Sashimis",
    slug: { _type: "slug", current: "sashimis" },
    description: "Fatias finas e precisas de peixe fresco da mais alta qualidade.",
    order: 1,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Mini Salgados",
    slug: { _type: "slug", current: "mini-salgados" },
    description: "Porções deliciosas de mini salgados fritos na hora.",
    order: 2,
    items: [
      { _type: "categoryItem", _key: "ms1", name: "Aipim com carne seca" },
      { _type: "categoryItem", _key: "ms2", name: "Bacalhau" },
      { _type: "categoryItem", _key: "ms3", name: "Queijo" },
      { _type: "categoryItem", _key: "ms4", name: "Mini pastel de queijo (12un)" },
      { _type: "categoryItem", _key: "ms5", name: "Mini pastel de carne (12un)" },
      { _type: "categoryItem", _key: "ms6", name: "Kibe" },
      { _type: "categoryItem", _key: "ms7", name: "Dadinho de tapioca" },
      { _type: "categoryItem", _key: "ms8", name: "Coxinha" },
      { _type: "categoryItem", _key: "ms9", name: "Bolinho de mandioca com queijo (500g)" },
    ],
  },
  {
    _type: "menuCategory",
    name: "Niguiris",
    slug: { _type: "slug", current: "niguiris" },
    description: "Fatias de peixe fresco moldadas perfeitamente sobre arroz.",
    order: 3,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Poke",
    slug: { _type: "slug", current: "poke" },
    description: "Bowl refrescante com peixes, legumes e molhos especiais.",
    order: 4,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Porções Frias",
    slug: { _type: "slug", current: "porcoes-frias" },
    description: "Opções leves e refrescantes perfeitas para começar.",
    order: 5,
    items: [
      { _type: "categoryItem", _key: "pf1", name: "Azeitona", description: "20 unid." },
      { _type: "categoryItem", _key: "pf2", name: "Mista", description: "Presunto e mussarela" },
      { _type: "categoryItem", _key: "pf3", name: "1/2 Mista", description: "Presunto e mussarela" },
      { _type: "categoryItem", _key: "pf4", name: "1/2 Mista Família", description: "Presunto, mussarela, ovo de codorna, salsicha, salame, azeitonas e pão" },
      { _type: "categoryItem", _key: "pf5", name: "Mista Família", description: "Presunto, mussarela, ovo de codorna, salsicha, salame, azeitonas e pão" },
      { _type: "categoryItem", _key: "pf6", name: "Ovo de codorna", description: "12 unid." },
      { _type: "categoryItem", _key: "pf7", name: "Presunto" },
      { _type: "categoryItem", _key: "pf8", name: "Salame" },
      { _type: "categoryItem", _key: "pf9", name: "Porção de Mussarela" },
      { _type: "categoryItem", _key: "pf10", name: "Salsicha em conserva", description: "UN" },
    ],
  },
  {
    _type: "menuCategory",
    name: "Porções Quentes",
    slug: { _type: "slug", current: "porcoes-quentes" },
    description: "Petiscos fritos e grelhados, crocantes e saborosos.",
    order: 6,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Pratos Quentes",
    slug: { _type: "slug", current: "pratos-quentes" },
    description: "Refeições completas preparadas com tempero especial.",
    order: 7,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Refrigerantes",
    slug: { _type: "slug", current: "refrigerantes" },
    description: "Refrigerantes em lata ou garrafa, bem gelados.",
    order: 8,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Saladas",
    slug: { _type: "slug", current: "saladas" },
    description: "Saladas frescas com ingredientes selecionados.",
    order: 9,
    items: [
      { _type: "categoryItem", _key: "sa1", name: "Salada", description: "Alface, tomate e cebola" },
      { _type: "categoryItem", _key: "sa2", name: "Especial com fruta", description: "Alface, tomate, rabanete, pepino, rúcula, azeitonas, fruta da época e ovo de codorna" },
      { _type: "categoryItem", _key: "sa3", name: "Palmito", description: "Tomate, azeitonas, ovo de codorna" },
      { _type: "categoryItem", _key: "sa4", name: "Rúcula com tomate seco", description: "Rúcula e tomate seco" },
      { _type: "categoryItem", _key: "sa5", name: "Tomate" },
      { _type: "categoryItem", _key: "sa6", name: "Salada mista", description: "Alface, cenoura, tomate, milho, ovo de codorna e cebola" },
    ],
  },
  {
    _type: "menuCategory",
    name: "Massas",
    slug: { _type: "slug", current: "massas" },
    description: "Massas al dente com molhos especiais e saborosos.",
    order: 10,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Sobremesas",
    slug: { _type: "slug", current: "sobremesas" },
    description: "Doces irresistíveis para fechar sua refeição.",
    order: 11,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Sorvetes",
    slug: { _type: "slug", current: "sorvetes" },
    description: "Sorvetes cremosos de diversos sabores.",
    order: 12,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Sucos",
    slug: { _type: "slug", current: "sucos" },
    description: "Sucos naturais feitos com frutas frescas da estação.",
    order: 13,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Temakis",
    slug: { _type: "slug", current: "temakis" },
    description: "Cones de alga crocante recheados com peixes frescos.",
    order: 14,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Tilápia",
    slug: { _type: "slug", current: "tilapia" },
    description: "Porções de tilápia frita, crocante por fora e macia por dentro.",
    order: 15,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Uramakis",
    slug: { _type: "slug", current: "uramakis" },
    description: "Rolinhos deliciosos com arroz por fora e recheios variados.",
    order: 16,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Yakissobas",
    slug: { _type: "slug", current: "yakissobas" },
    description: "Tradicional macarrão oriental com legumes frescos e molho.",
    order: 17,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Entradas",
    slug: { _type: "slug", current: "entradas" },
    description: "Opções deliciosas para abrir o apetite.",
    order: 18,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Barcas",
    slug: { _type: "slug", current: "barcas" },
    description: "Combinação clássica de cortes finos selecionados.",
    order: 19,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Batidinhas",
    slug: { _type: "slug", current: "batidinhas" },
    description: "Bebidas cremosas com álcool e frutas.",
    order: 20,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Cachaças",
    slug: { _type: "slug", current: "cachacas" },
    description: "Doses de cachaças selecionadas e especiais.",
    order: 21,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Caipirinhas",
    slug: { _type: "slug", current: "caipirinhas" },
    description: "A clássica brasileira feita com cachaça ou vodka e frutas.",
    order: 22,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Cervejas",
    slug: { _type: "slug", current: "cervejas" },
    description: "Cervejas trincando de geladas para acompanhar.",
    order: 23,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Combinados",
    slug: { _type: "slug", current: "combinados" },
    description: "As melhores seleções de sushis e sashimis em um só prato.",
    order: 24,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Energéticos",
    slug: { _type: "slug", current: "energeticos" },
    description: "Para dar aquela energia a mais na sua noite.",
    order: 25,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Águas",
    slug: { _type: "slug", current: "aguas" },
    description: "Água mineral com ou sem gás.",
    order: 26,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Especiais",
    slug: { _type: "slug", current: "especiais" },
    description: "Pratos exclusivos e criações especiais da casa.",
    order: 27,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Especialidades",
    slug: { _type: "slug", current: "especialidades" },
    description: "As receitas que são o nosso grande destaque.",
    order: 28,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Futomakis",
    slug: { _type: "slug", current: "futomakis" },
    description: "Rolinhos grossos com diversos ingredientes saborosos.",
    order: 29,
    items: [],
  },
  {
    _type: "menuCategory",
    name: "Guarnições",
    slug: { _type: "slug", current: "guarnicoes" },
    description: "Acompanhamentos perfeitos para seu prato principal.",
    order: 30,
    items: [],
  },
];

async function seed() {
  console.log("🌱 Iniciando seed das categorias do cardápio...\n");

  const transaction = client.transaction();

  for (const category of categories) {
    transaction.create(category);
    console.log(`  ✅ ${category.name} (${category.items.length} itens)`);
  }

  console.log("\n⏳ Enviando para o Sanity...");
  const result = await transaction.commit();
  console.log(`\n🎉 Pronto! ${categories.length} categorias criadas com sucesso!`);
  console.log(`   IDs: ${result.documentIds.join(", ")}`);
}

seed().catch((err) => {
  console.error("❌ Erro ao fazer seed:", err.message);
  process.exit(1);
});
