import sharp from "sharp";

const source = "logo/Fixxir logo-02 1.png";

const outputs = [
  { file: "src/app/icon.png", size: 64 },
  { file: "src/app/apple-icon.png", size: 180 },
  { file: "public/fixxir-mark.png", size: 256 },
  { file: "public/icon-512.png", size: 512 },
];

for (const { file, size } of outputs) {
  await sharp(source)
    .resize(size, size, { fit: "cover" })
    .png({ compressionLevel: 9, quality: 90 })
    .toFile(file === "public/fixxir-mark.png" ? `${file}.tmp` : file);
  console.log(`${file} @ ${size}px`);
}

// The mark is read by the running dev server, so swap it in only once written.
const { rename } = await import("node:fs/promises");
await rename("public/fixxir-mark.png.tmp", "public/fixxir-mark.png");
