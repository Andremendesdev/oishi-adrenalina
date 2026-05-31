import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./studio/schemas";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["siteSettings", "hero", "about", "ctaReserve"]);

const structurePlugin = structureTool({
  structure: (S) =>
    S.list()
      .title("Conteúdo")
      .items([
        S.listItem()
          .title("⚙️ Configurações do Site")
          .child(
            S.document().schemaType("siteSettings").documentId("siteSettings"),
          ),
        S.listItem()
          .title("🏠 Hero (Topo)")
          .child(S.document().schemaType("hero").documentId("hero")),
        S.listItem()
          .title("📖 Sobre Nós")
          .child(S.document().schemaType("about").documentId("about")),
        S.listItem()
          .title("📞 CTA Reserva")
          .child(
            S.document().schemaType("ctaReserve").documentId("ctaReserve"),
          ),
        S.divider(),
        S.documentTypeListItem("menuCategory").title("🍽️ Categorias do Cardápio"),
        S.documentTypeListItem("feature").title("✨ Diferenciais"),
        S.documentTypeListItem("galleryImage").title("🖼️ Galeria"),
      ]),
});

export default defineConfig({
  name: "oishi-adrenalina",
  title: "Oishi Adrenalina — Admin",
  basePath: "/oishi-admin-painel",

  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "okxbi3pe",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",

  plugins: [structurePlugin, visionTool()],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
