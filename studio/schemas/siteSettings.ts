// Schema: Configurações gerais do restaurante (singleton)
export default {
  name: "siteSettings",
  title: "Configurações do Site",
  type: "document",
  icon: () => "⚙️",
  fields: [
    {
      name: "restaurantName",
      title: "Nome do Restaurante",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "tagline",
      title: "Tagline / Slogan",
      type: "string",
      description: "Ex: Restaurante e bar japonês onde tradição, sabor e sofisticação se encontram.",
    },
    {
      name: "whatsappNumber",
      title: "Número WhatsApp",
      type: "string",
      description: "Formato E.164 sem + (ex: 5514997757180)",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "whatsappMessage",
      title: "Mensagem Padrão WhatsApp",
      type: "string",
      description: "Mensagem pré-preenchida ao clicar no botão WhatsApp",
    },
    {
      name: "address",
      title: "Endereço",
      type: "string",
    },
    {
      name: "phone",
      title: "Telefone",
      type: "string",
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "string",
      description: "Ex: @oishiadrenalina",
    },
    {
      name: "openHour",
      title: "Hora de Abertura",
      type: "number",
      description: "Hora (0-23) em que o restaurante abre",
      validation: (Rule: any) => Rule.min(0).max(23),
    },
    {
      name: "closeHour",
      title: "Hora de Fechamento",
      type: "number",
      description: "Hora (0-24) em que o restaurante fecha. Use 24 para meia-noite.",
      validation: (Rule: any) => Rule.min(0).max(24),
    },
    {
      name: "hoursLabel",
      title: "Texto do Horário",
      type: "string",
      description: "Ex: Seg — Sáb",
    },
    {
      name: "hoursDisplay",
      title: "Horário Exibido",
      type: "string",
      description: "Ex: 16h às 00h",
    },
    {
      name: "copyrightText",
      title: "Texto de Copyright",
      type: "string",
    },
  ],
  // Singleton: aparece apenas um documento
  preview: {
    prepare() {
      return { title: "Configurações do Site" };
    },
  },
};
