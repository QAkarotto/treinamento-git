const fs = require("node:fs");
const path = require("node:path");

const publicDir = path.join(__dirname, "..", "public");
const outputDir = path.join(__dirname, "..", "dist");

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });
fs.cpSync(publicDir, outputDir, { recursive: true });

console.log(`Build concluido: ${outputDir}`);
