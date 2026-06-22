export default {
  name: "navbarHours",
  title: "Status da Navbar",
  type: "document",
  icon: () => "🕐",
  fields: [
    {
      name: "automatic",
      title: "Horário automático",
      type: "boolean",
      description:
        "Ativo: Aberto/Fechado conforme horário padrão (Seg — Sáb, 16:00 — 00:00). Domingo sempre fechado. Desativado: escolha o status manual abaixo.",
      initialValue: true,
    },
    {
      name: "status",
      title: "Status manual",
      type: "string",
      description: "Usado quando Horário automático estiver desativado.",
      options: {
        list: [
          { title: "Aberto", value: "open" },
          { title: "Fechado", value: "closed" },
        ],
        layout: "radio",
      },
      initialValue: "open",
      hidden: ({ parent }: { parent?: { automatic?: boolean } }) =>
        Boolean(parent?.automatic ?? true),
    },
  ],
  preview: {
    select: { automatic: "automatic", status: "status" },
    prepare({
      automatic,
      status,
    }: {
      automatic?: boolean;
      status?: string;
    }) {
      const mode =
        automatic !== false
          ? "Automático · Seg — Sáb · 16:00 — 00:00"
          : status === "closed"
            ? "Fechado · Seg — Sáb · 16:00 — 00:00"
            : "Aberto · Seg — Sáb · 16:00 — 00:00";
      return { title: "Status da Navbar", subtitle: mode };
    },
  },
};
