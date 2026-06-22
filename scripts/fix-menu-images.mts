/**
 * Corrige campo `image` inválido em categorias do cardápio
 * (ex: string em vez de objeto image — causa erro ao fazer upload).
 *
 * Uso: npm run fix:menu-images
 */

import { createClient } from "@sanity/client";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, "../.env");

function loadToken() {
  if (process.env.SANITY_TOKEN) return process.env.SANITY_TOKEN;
  if (!fs.existsSync(envPath)) return undefined;

  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed
      .slice(eq + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    if (key === "SANITY_TOKEN") return value;
  }
  return undefined;
}

const token = loadToken();
if (!token) {
  console.error("❌ Defina SANITY_TOKEN no .env");
  process.exit(1);
}

const client = createClient({
  projectId: "okxbi3pe",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token,
});

function isValidImage(value: unknown): boolean {
  return (
    typeof value === "object" &&
    value !== null &&
    "_type" in value &&
    (value as { _type?: string })._type === "image"
  );
}

async function fix() {
  const categories = await client.fetch<
    { _id: string; name: string; image?: unknown }[]
  >(`*[_type == "menuCategory"]{ _id, name, image }`);

  let fixed = 0;

  for (const cat of categories) {
    if (cat.image === undefined || cat.image === null) continue;
    if (isValidImage(cat.image)) continue;

    await client.patch(cat._id).unset(["image"]).commit();
    console.log(`🔧 ${cat.name}: campo image inválido removido`);
    fixed++;
  }

  if (fixed === 0) {
    console.log("✅ Nenhuma categoria com image corrompido.");
  } else {
    console.log(`\n✅ ${fixed} categoria(s) corrigida(s). Tente o upload de novo.`);
  }
}

fix().catch((err) => {
  console.error("❌ Erro:", err.message);
  process.exit(1);
});
