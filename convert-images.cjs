
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "public", "images", "menu");
const outputDir = path.join(inputDir, "webp");

const files = [
  "butter-chicken.jpg",
  "chicken-biryani.jpg",
  "gulab-jamun.jpg",
  "paneer-tikka.jpg",
];

async function convertImages() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputName = file.replace(/\.jpg$/i, ".webp");
    const outputPath = path.join(outputDir, outputName);

    await sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`Converted: ${file} -> ${outputName}`);
  }

  console.log("All images converted successfully!");
}

convertImages().catch(console.error);
