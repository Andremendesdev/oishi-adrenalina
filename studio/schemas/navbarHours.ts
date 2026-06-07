export default {
  name: "navbarHours",
  title: "Horário da Navbar",
  type: "document",
  icon: () => "🕐",
  fields: [
    {
      name: "openHour",
      title: "Abrir",
      type: "number",
      description: "Hora de abertura (0–23). Ex: 16 = 16:00",
      validation: (Rule: any) => Rule.required().min(0).max(23),
      initialValue: 16,
    },
    {
      name: "closeHour",
      title: "Fechar",
      type: "number",
      description: "Hora de fechamento (0–24). Use 24 para meia-noite.",
      validation: (Rule: any) => Rule.required().min(0).max(24),
      initialValue: 24,
    },
    {
      name: "automatic",
      title: "Automático",
      type: "boolean",
      description:
        "Ativo: exibe Aberto/Fechado automaticamente conforme o horário atual. Desativado: usa o status manual abaixo.",
      initialValue: true,
    },
    {
      name: "manualStatus",
      title: "Status Manual",
      type: "string",
      description: "Usado apenas quando Automático estiver desativado.",
      options: {
        list: [
          { title: "Aberto", value: "open" },
          { title: "Fechado", value: "closed" },
        ],
        layout: "radio",
      },
      initialValue: "open",
      hidden: ({ parent }: { parent?: { automatic?: boolean } }) =>
        parent?.automatic !== false,
    },
  ],
  preview: {
    prepare() {
      return { title: "Horário da Navbar" };
    },
  },
};
