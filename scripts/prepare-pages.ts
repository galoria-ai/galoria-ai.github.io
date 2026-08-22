import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join, resolve, sep } from "node:path";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const buildDirectory = resolve(repositoryRoot, "dist");
const pagesDirectory = resolve(repositoryRoot, "docs");

if (!pagesDirectory.startsWith(`${resolve(repositoryRoot)}${sep}`)) {
  throw new Error("Refusing to write outside the repository.");
}

await rm(pagesDirectory, { recursive: true, force: true });
await mkdir(pagesDirectory, { recursive: true });
await cp(buildDirectory, pagesDirectory, { recursive: true });
await writeFile(join(pagesDirectory, ".nojekyll"), "", "utf8");

console.log("Prepared GitHub Pages output in docs/.");
