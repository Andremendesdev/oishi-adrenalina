// Schema: CTA Reserva (singleton)
export default {
  name: "ctaReserve",
  title: "CTA Reserva",
  type: "document",
  icon: () => "📞",
  fields: [
    {
      name: "heading",
      title: "Título",
      type: "string",
      description: "Ex: Venha nos visitar agora.",
    },
    {
      name: "description",
      title: "Descrição",
      type: "text",
      rows: 3,
    },
    {
      name: "buttonText",
      title: "Texto do Botão",
      type: "string",
      description: "Ex: Chamar no WhatsApp",
    },
  ],
  preview: {
    prepare() {
      return { title: "CTA Reserva" };
    },
  },
};
