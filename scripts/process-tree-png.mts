/**
 * Remove fundo escuro/cinza do tree.png (uso único).
 * Requer: npm install --no-save sharp
 */
import fs from "node:fs";
import sharp from "sharp";

const source = "public/images/tree.original.png";
const output = "public/images/tree.png";

if (!fs.existsSync(source)) {
  console.error("Arquivo não encontrado:", source);
  process.exit(1);
}

const { data, info } = await sharp(source)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const px = new Uint8ClampedArray(data);

for (let i = 0; i < px.length; i += 4) {
  const r = px[i];
  const g = px[i + 1];
  const b = px[i + 2];
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const sat = max === 0 ? 0 : (max - min) / max;

  const isFlower = r > 95 && g > 55 && b > 75 && r >= g - 10 && sat > 0.04;
  const isBranch = lum < 88 && sat < 0.42;

  if (isFlower) continue;

  if (isBranch) {
    px[i + 3] = lum < 28 ? 0 : Math.min(255, Math.round(((lum - 28) / 60) * 255));
    continue;
  }

  if (sat < 0.12 && lum < 130) {
    px[i + 3] = 0;
    continue;
  }

  if (lum < 150 && sat < 0.22) {
    px[i + 3] = Math.round(((150 - lum) / 80) * 255);
  }
}

await sharp(Buffer.from(px), {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(output);

console.log("✅", output, "atualizado");
