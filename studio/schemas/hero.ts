// Schema: Hero section (singleton)
export default {
  name: "hero",
  title: "Hero (Topo do Site)",
  type: "document",
  icon: () => "🏠",
  fields: [
    {
      name: "subtitle",
      title: "Subtítulo",
      type: "string",
      description: "Ex: Bar & Restaurante",
    },
    {
      name: "subSubtitle",
      title: "Sub-subtítulo",
      type: "string",
      description: "Ex: Segunda à Sábado",
    },
    {
      name: "headingLine1",
      title: "Título Linha 1",
      type: "string",
      description: "Ex: Oishi",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "headingLine2",
      title: "Título Linha 2",
      type: "string",
      description: "Ex: Adrenalina",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Ex: Uma experiência japonesa inesquecível.",
    },
    {
      name: "description",
      title: "Descrição",
      type: "text",
      rows: 3,
      description: "Ex: Referência em gastronomia em Piraju e região...",
    },
    {
      name: "ctaButtonText",
      title: "Texto Botão CTA",
      type: "string",
      description: "Ex: Chamar no WhatsApp",
    },
    {
      name: "secondaryLinkText",
      title: "Texto Link Secundário",
      type: "string",
      description: "Ex: Ver cardápio",
    },
    {
      name: "backgroundImage",
      title: "Imagem de Fundo",
      type: "image",
      options: { hotspot: true },
      description: "Imagem principal do hero (recomendado: 1920x1080)",
    },
  ],
  preview: {
    prepare() {
      return { title: "Hero (Topo do Site)" };
    },
  },
};
