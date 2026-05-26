import { defineField, defineType } from "sanity";

export default defineType({
  name: "liveshows",
  title: "Agenda de Shows",
  type: "document",
  fields: [
    defineField({
      name: "artist",
      title: "Nome do Artista ou Banda",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("O nome do artista é obrigatório."),
    }),
    defineField({
      name: "date",
      title: "Data do Show",
      type: "string",
      description: "Ex: 24 AGO",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "time",
      title: "Horário",
      type: "string",
      description: "Ex: 20:00",
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      rows: 3,
      description: "Breve descrição do show para aparecer no card.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Foto da Atração",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "order",
      title: "Ordem de Exibição",
      type: "number",
      description: "Número para ordenar na página (menor = primeiro)",
      validation: (Rule) => Rule.required().min(0),
      initialValue: 0,
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
      title: "artist",
      subtitle: "date",
      media: "image",
    },
  },
});
