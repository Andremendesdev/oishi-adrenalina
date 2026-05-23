// Schema: Feature / Diferencial
export default {
  name: "feature",
  title: "Diferencial",
  type: "document",
  icon: () => "✨",
  fields: [
    {
      name: "icon",
      title: "Ícone",
      type: "string",
      description: "Nome do ícone Lucide a usar",
      options: {
        list: [
          { title: "✨ Sparkles (Brilho)", value: "Sparkles" },
          { title: "🍃 Leaf (Folha)", value: "Leaf" },
          { title: "🍷 Wine (Vinho)", value: "Wine" },
          { title: "🛎️ ConciergeBell (Sino)", value: "ConciergeBell" },
          { title: "🐟 Fish (Peixe)", value: "Fish" },
          { title: "👨‍🍳 ChefHat (Chef)", value: "ChefHat" },
          { title: "⏰ Clock (Relógio)", value: "Clock" },
          { title: "❤️ Heart (Coração)", value: "Heart" },
          { title: "⭐ Star (Estrela)", value: "Star" },
          { title: "🔥 Flame (Fogo)", value: "Flame" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Descrição",
      type: "text",
      rows: 3,
    },
    {
      name: "order",
      title: "Ordem de Exibição",
      type: "number",
      validation: (Rule: any) => Rule.required().min(0),
    },
  ],
  orderings: [
    {
      title: "Ordem de Exibição",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "description" },
  },
};
