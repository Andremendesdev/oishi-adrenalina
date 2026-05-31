import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
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
      S.documentTypeListItem("liveshows").title("🎵 Agenda de Shows"),
      S.documentTypeListItem("feature").title("✨ Diferenciais"),
      S.documentTypeListItem("galleryImage").title("🖼️ Galeria"),
    ]);
