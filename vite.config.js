import pages from "@hono/vite-cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import build from "@hono/vite-build/cloudflare-workers";
import { defineConfig } from "vite";

export default defineConfig(function ({ mode }) {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: {
            "markdown-renderer": "./src/client/markdown-renderer.tsx",
            "post-body-editor": "./src/client/post-body-editor.ts",
          },
          output: {
            entryFileNames: "static/client/[name].js",
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
      }),
      devServer({
        entry: "src/index.tsx",
        exclude: [
          /^\/variables\.css$/,
          /^\/style\.css$/,
          /^\/favicon\.ico$/,
          /^\/icons\/.*/,
          /^\/static\/.*/,
        ],
      }),
    ],
  };
});
