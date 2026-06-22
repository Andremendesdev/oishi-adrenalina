import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "menuCategory",
  title: "Categoria do Cardápio",
  type: "document",
  icon: () => "🍽️",
  fields: [
    defineField({
      name: "name",
      title: "Nome da Categoria",
      type: "string",
      description: "Ex: Sashimis, Porções Frias, Mini Salgados...",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      description:
        "Identificador único para a URL (ex: porcoes-frias). Clique em 'Generate' para gerar automaticamente.",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição da Categoria",
      type: "text",
      rows: 2,
      description: "Breve descrição que aparece no card do cardápio.",
    }),
    defineField({
      name: "image",
      title: "Imagem da Categoria",
      type: "image",
      options: {
        hotspot: true,
        accept: "image/*",
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Texto alternativo",
        }),
      ],
      description: "Foto de capa para o card da categoria (recomendado: 600x450).",
    }),
    defineField({
      name: "order",
      title: "Ordem de Exibição",
      type: "number",
      description: "Número para ordenar no cardápio (menor = primeiro).",
      validation: (Rule) => Rule.required().min(0),
      initialValue: 0,
    }),
    defineField({
      name: "items",
      title: "Itens da Categoria",
      type: "array",
      description: "Adicione aqui todos os pratos/produtos desta categoria.",
      of: [
        defineArrayMember({
          type: "object",
          name: "categoryItem",
          title: "Item",
          fields: [
            defineField({
              name: "name",
              title: "Nome do Item",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Descrição do Item",
              type: "text",
              rows: 2,
              description:
                "Ingredientes ou observações (ex: presunto e mussarela).",
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "description",
            },
          },
        }),
      ],
    }),
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
});
