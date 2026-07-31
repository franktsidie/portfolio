import { copyFile, cp, mkdir, rm, writeFile } from "node:fs/promises";
import { build } from "vite";

await rm("dist", { recursive: true, force: true });

await build({
  base: "./",
  build: {
    outDir: "dist/client",
    emptyOutDir: false,
  },
});

await mkdir("dist/server", { recursive: true });
await mkdir("dist/.openai", { recursive: true });
await copyFile("sites/worker-wrapper.js", "dist/server/index.js");
await copyFile(".openai/hosting.json", "dist/.openai/hosting.json");

await rm("docs", { recursive: true, force: true });
await cp("dist/client", "docs", { recursive: true });
await writeFile("docs/.nojekyll", "");
