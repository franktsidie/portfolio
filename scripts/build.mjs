import { copyFile, cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
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

const pagesHtmlPath = "docs/index.html";
let pagesHtml = await readFile(pagesHtmlPath, "utf8");
const stylesheetMatch = pagesHtml.match(/<link rel="stylesheet" crossorigin href="\.\/(assets\/[^"]+\.css)">/);
const scriptMatch = pagesHtml.match(/<script type="module" crossorigin src="\.\/(assets\/[^"]+\.js)"><\/script>/);

if (!stylesheetMatch || !scriptMatch) {
  throw new Error("Could not find generated CSS and JavaScript assets for GitHub Pages.");
}

const [pagesCss, pagesJs] = await Promise.all([
  readFile(`docs/${stylesheetMatch[1]}`, "utf8"),
  readFile(`docs/${scriptMatch[1]}`, "utf8"),
]);
const inlinePagesJs = pagesJs.replaceAll("</script", "<\\/script");

pagesHtml = pagesHtml
  .replace(stylesheetMatch[0], () => `<style>${pagesCss}</style>`)
  .replace(scriptMatch[0], () => `<script type="module">${inlinePagesJs}</script>`);

await writeFile(pagesHtmlPath, pagesHtml);
await rm("docs/assets", { recursive: true, force: true });
await writeFile("docs/.nojekyll", "");
