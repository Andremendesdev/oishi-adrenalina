// Schema: Item do cardápio
export default {
  name: "menuItem",
  title: "Item do Cardápio",
  type: "document",
  icon: () => "🍣",
  fields: [
    {
      name: "name",
      title: "Nome do Prato",
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
      name: "image",
      title: "Foto do Prato",
      type: "image",
      options: { hotspot: true },
      description: "Foto do prato (recomendado: 600x720)",
    },
    {
      name: "order",
      title: "Ordem de Exibição",
      type: "number",
      description: "Número para ordenar no cardápio (menor = primeiro)",
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
    select: {
      title: "name",
      subtitle: "description",
      media: "image",
    },
  },
};
