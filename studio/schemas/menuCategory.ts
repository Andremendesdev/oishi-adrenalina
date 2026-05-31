// Schema: Categoria do cardápio com subitens
export default {
  name: "menuCategory",
  title: "Categoria do Cardápio",
  type: "document",
  icon: () => "🍽️",
  fields: [
    {
      name: "name",
      title: "Nome da Categoria",
      type: "string",
      description: "Ex: Sashimis, Porções Frias, Mini Salgados...",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      description: "Identificador único para a URL (ex: porcoes-frias). Clique em 'Generate' para gerar automaticamente.",
      options: { source: "name", maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Descrição da Categoria",
      type: "text",
      rows: 2,
      description: "Breve descrição que aparece no card do cardápio.",
    },
    {
      name: "image",
      title: "Imagem da Categoria",
      type: "image",
      options: { hotspot: true },
      description: "Foto de capa para o card da categoria (recomendado: 600x450).",
    },
    {
      name: "order",
      title: "Ordem de Exibição",
      type: "number",
      description: "Número para ordenar no cardápio (menor = primeiro).",
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: "items",
      title: "Itens da Categoria",
      type: "array",
      description: "Adicione aqui todos os pratos/produtos desta categoria.",
      of: [
        {
          type: "object",
          name: "categoryItem",
          title: "Item",
          fields: [
            {
              name: "name",
              title: "Nome do Item",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "description",
              title: "Descrição do Item",
              type: "text",
              rows: 2,
              description: "Ingredientes ou observações (ex: presunto e mussarela).",
            },
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "description",
            },
          },
        },
      ],
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
