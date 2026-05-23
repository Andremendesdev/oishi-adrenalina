// Schema: About section (singleton)
export default {
  name: "about",
  title: "Sobre Nós",
  type: "document",
  icon: () => "📖",
  fields: [
    {
      name: "heading",
      title: "Título Linha 1",
      type: "string",
      description: "Ex: Onde a tradição",
    },
    {
      name: "headingLine2",
      title: "Título Linha 2",
      type: "string",
      description: "Ex: encontra Piraju.",
    },
    {
      name: "paragraph1",
      title: "Parágrafo 1",
      type: "text",
      rows: 4,
    },
    {
      name: "paragraph2",
      title: "Parágrafo 2",
      type: "text",
      rows: 4,
    },
    {
      name: "stats",
      title: "Estatísticas",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "number", title: "Número/Valor", type: "string" },
            { name: "label", title: "Descrição", type: "string" },
          ],
          preview: {
            select: { title: "number", subtitle: "label" },
          },
        },
      ],
      validation: (Rule: any) => Rule.max(4),
    },
  ],
  preview: {
    prepare() {
      return { title: "Sobre Nós" };
    },
  },
};
