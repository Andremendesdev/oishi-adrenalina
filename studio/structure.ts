import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Conteúdo")
    .items([
      S.listItem()
        .title("🕐 Horário da Navbar")
        .child(
          S.document().schemaType("navbarHours").documentId("navbarHours"),
        ),
      S.divider(),
      S.documentTypeListItem("menuCategory").title("🍽️ Categorias do Cardápio"),
      S.documentTypeListItem("liveshows").title("🎵 Agenda de Shows"),
      S.documentTypeListItem("galleryImage").title("🖼️ Galeria"),
    ]);
