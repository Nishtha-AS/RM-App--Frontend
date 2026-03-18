import fs from 'fs';
import path from 'path';
import { sync as globSync } from 'glob'; // ✅ Correct named import for v11+

const ASSETS_DIR = path.resolve('src/assets');
const SRC_DIR = path.resolve('src');

// Read asset filenames and build lowercase map
const assetFiles = fs.readdirSync(ASSETS_DIR);
const assetsLowerMap = new Map(
  assetFiles.map((f) => [f.toLowerCase(), f])
);

// Search for .ts and .tsx files recursively
const files = globSync(`${SRC_DIR}/**/*.{ts,tsx}`);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  let changed = false;

  // Replace asset references to correct case
  content = content.replace(/['"]assets\/([^'"]+)['"]/g, (match, filename) => {
    const correctName = assetsLowerMap.get(filename.toLowerCase());
    if (correctName && filename !== correctName) {
      changed = true;
      return `"assets/${correctName}"`;
    }
    return match;
  });

  if (changed) {
    console.log(`✔ Fixed casing in: ${file}`);
    fs.writeFileSync(file, content);
  }
}
