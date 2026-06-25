/**
 * Gera public/sitemap.xml e atualiza public/robots.txt
 *
 * Uso: npm run generate:sitemap
 * URL: defina VITE_SITE_URL no .env (ex.: https://seu-dominio.com.br)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const envPath = path.resolve(rootDir, ".env");
const publicDir = path.resolve(rootDir, "public");

const DEFAULT_SITE_URL = "https://oishiadrenalina.com.br";

function loadEnvValue(key: string): string | undefined {
  if (process.env[key]) return process.env[key];
  if (!fs.existsSync(envPath)) return undefined;

  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const envKey = trimmed.slice(0, eq).trim();
    const value = trimmed
      .slice(eq + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    if (envKey === key) return value;
  }

  return undefined;
}

const siteUrl = (loadEnvValue("VITE_SITE_URL") ?? DEFAULT_SITE_URL).replace(
  /\/$/,
  "",
);
const lastmod = new Date().toISOString().split("T")[0];

const pages = [{ path: "/", changefreq: "weekly", priority: "1.0" }];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots, "utf8");

console.log(`✅ sitemap.xml → ${siteUrl}/sitemap.xml`);
console.log(`✅ robots.txt atualizado com Sitemap`);
