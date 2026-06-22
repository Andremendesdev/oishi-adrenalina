/**
 * Reseta o documento navbarHours para corrigir erros do Studio.
 *
 * Uso:
 *   $env:SANITY_TOKEN="seu_token"; npx tsx scripts/reset-navbar-hours.mts
 *
 * Token: https://www.sanity.io/manage/project/okxbi3pe/api#tokens
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
  console.error(
    "❌ Defina SANITY_TOKEN no .env ou na variável de ambiente.",
  );
  process.exit(1);
}

const client = createClient({
  projectId: "okxbi3pe",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token,
});

async function reset() {
  const ids = await client.fetch<string[]>(`*[_type == "navbarHours"]._id`);

  for (const id of ids) {
    await client.delete(id);
    console.log(`🗑️  Removido: ${id}`);
  }

  await client.createOrReplace({
    _id: "navbarHours",
    _type: "navbarHours",
    automatic: true,
    status: "open",
  });

  console.log("✅ Documento navbarHours recriado com sucesso.");
  console.log("   automatic: true | status: open | horário: 16:00 — 00:00");
}

reset().catch((err) => {
  console.error("❌ Erro:", err.message);
  process.exit(1);
});
