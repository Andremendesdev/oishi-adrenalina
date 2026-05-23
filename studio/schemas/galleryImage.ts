// Schema: Imagem da galeria
export default {
  name: "galleryImage",
  title: "Imagem da Galeria",
  type: "document",
  icon: () => "🖼️",
  fields: [
    {
      name: "image",
      title: "Imagem",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
      description: "Foto para a galeria (recomendado: 800x600 ou maior)",
    },
    {
      name: "alt",
      title: "Texto Alternativo",
      type: "string",
      description: "Descrição da imagem para acessibilidade",
      validation: (Rule: any) => Rule.required(),
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
    select: { title: "alt", media: "image" },
  },
};
