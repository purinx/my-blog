import pages from "@hono/vite-cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import build from "@hono/vite-build/node";
import { defineConfig } from "vite-plus";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: "./src/client/markdown-renderer.tsx",
          output: {
            entryFileNames: "static/client/markdown-renderer.js",
          },
        },
      },
    };
  }

  return {
    plugins: [
      pages(),
      build({
        entry: "src/index.tsx",
        staticRoot: "./dist",
      }),
      devServer({
        entry: "src/index.tsx",
      }),
    ],
  };
});
