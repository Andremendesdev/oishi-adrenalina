/**
 * Envia as fotos da galeria (src/assets) para o Sanity CMS.
 *
 * Execute na pasta studio:
 *   npm run seed:gallery
 *
 * Para recriar mesmo com imagens existentes:
 *   $env:FORCE_GALLERY_SEED="1"; npm run seed:gallery
 */

import { getCliClient } from "sanity/cli";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, "../../src/assets");

const client = getCliClient({ apiVersion: "2024-01-01" });

const galleryImages = [
  {
    file: "interior.jpeg",
    alt: "Salão do Sakura Lounge com lanternas vermelhas",
    order: 0,
  },
  {
    file: "interior2.jpeg",
    alt: "Chef preparando sushi",
    order: 1,
  },
  {
    file: "fora.jpeg",
    alt: "Variedade de sushi",
    order: 2,
  },
  {
    file: "interior3.jpeg",
    alt: "Bar do Sakura Lounge",
    order: 3,
  },
  {
    file: "frente.jpeg",
    alt: "Ambiente do restaurante",
    order: 4,
  },
];

async function uploadImage(filePath: string, filename: string) {
  const buffer = fs.readFileSync(filePath);
  return client.assets.upload("image", buffer, { filename });
}

async function seed() {
  const existing = await client.fetch<number>(
    `count(*[_type == "galleryImage"])`,
  );

  if (existing > 0 && process.env.FORCE_GALLERY_SEED !== "1") {
    console.log(
      `ℹ️  Já existem ${existing} imagem(ns) na galeria do Sanity. Nada a fazer.`,
    );
    console.log("   Para recriar, execute com FORCE_GALLERY_SEED=1");
    return;
  }

  if (existing > 0 && process.env.FORCE_GALLERY_SEED === "1") {
    const ids = await client.fetch<string[]>(`*[_type == "galleryImage"]._id`);
    const tx = client.transaction();
    for (const id of ids) tx.delete(id);
    await tx.commit();
    console.log(`🗑️  ${ids.length} imagem(ns) antiga(s) removida(s).\n`);
  }

  console.log("🖼️  Enviando fotos da galeria para o Sanity...\n");

  for (const item of galleryImages) {
    const filePath = path.join(assetsDir, item.file);

    if (!fs.existsSync(filePath)) {
      throw new Error(`Arquivo não encontrado: ${filePath}`);
    }

    console.log(`  ⬆️  ${item.file}`);
    const asset = await uploadImage(filePath, item.file);

    await client.create({
      _type: "galleryImage",
      image: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
      },
      alt: item.alt,
      order: item.order,
    });

    console.log(`  ✅ ${item.alt}`);
  }

  console.log(
    `\n🎉 Pronto! ${galleryImages.length} fotos publicadas na Galeria do Sanity.`,
  );
  console.log("   Acesse: https://oishi.sanity.studio/");
}

seed().catch((err) => {
  console.error("❌ Erro ao enviar galeria:", err.message);
  process.exit(1);
});
