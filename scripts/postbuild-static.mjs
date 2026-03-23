import { access, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptsDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptsDir, "..");
const outDir = path.join(projectRoot, "out");
const noJekyllFile = path.join(outDir, ".nojekyll");

try {
  await access(outDir, constants.F_OK);
  await writeFile(noJekyllFile, "");
  console.log("Created out/.nojekyll for GitHub Pages.");
} catch {
  console.log("Skipped .nojekyll creation because out/ does not exist.");
}
