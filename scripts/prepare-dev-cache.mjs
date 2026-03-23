import { mkdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const nextDir = path.join(projectRoot, ".next");
const markerPath = path.join(nextDir, "cache", "project-root.txt");

const pathExists = async (targetPath) => {
  try {
    await stat(targetPath);
    return true;
  } catch {
    return false;
  }
};

const clearNextCacheIfNeeded = async () => {
  const nextDirExists = await pathExists(nextDir);
  if (!nextDirExists) {
    return;
  }

  let shouldClearCache = false;

  try {
    const cachedRoot = (await readFile(markerPath, "utf8")).trim();
    shouldClearCache = cachedRoot !== projectRoot;
  } catch {
    shouldClearCache = true;
  }

  if (shouldClearCache) {
    console.log("[dev-cache] Clearing stale .next cache");
    await rm(nextDir, { recursive: true, force: true });
  }
};

await clearNextCacheIfNeeded();
await mkdir(path.dirname(markerPath), { recursive: true });
await writeFile(markerPath, `${projectRoot}\n`, "utf8");
