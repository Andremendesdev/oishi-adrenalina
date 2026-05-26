import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

// Estrutura customizada para organizar singletons e listas
const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["siteSettings", "hero", "about", "ctaReserve"]);

const structurePlugin = structureTool({
  structure: (S) =>
    S.list()
      .title("Conteúdo")
      .items([
        // Singletons
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
        // Listas
        S.documentTypeListItem("menuItem").title("🍣 Cardápio"),
        S.documentTypeListItem("liveshows").title("🎵 Agenda de Shows"),
        S.documentTypeListItem("feature").title("✨ Diferenciais"),
        S.documentTypeListItem("galleryImage").title("🖼️ Galeria"),
      ]),
});

export default defineConfig({
  name: "oishi-adrenalina",
  title: "Oishi Adrenalina — Admin",

  // ⚠️ Preencha com seu projectId do Sanity
  // Crie em: https://www.sanity.io/manage
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "okxbi3pe",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",

  plugins: [structurePlugin, visionTool()],

  schema: {
    types: schemaTypes,
    // Singletons: impede criação de documentos duplicados
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // Singletons: restringe ações
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
