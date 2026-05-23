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
      description:
        "Ex: 24 AGO (Como é um texto curto, você pode escrever o formato exato que quer na tela)",
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
      description: "Breve descrição do show para aparecer no card.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Foto da Atração",
      type: "image",
      options: {
        hotspot: true, // Permite ajustar o corte da foto direto no painel do Sanity
      },
    }),
  ],
  // Isso aqui deixa a lista do Sanity bonitinha com a foto e data ao lado do nome
  preview: {
    select: {
      title: "artist",
      subtitle: "date",
      media: "image",
    },
  },
});
