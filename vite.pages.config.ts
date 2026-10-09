import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// @ts-expect-error JS plugin alongside the TS vite config
import { grokPwaPlugin } from "./scripts/grok-pwa-plugin.mjs";

/** GitHub project Pages: https://yusran017.github.io/Stou_leader_1.0/ */
const BASE = "/Stou_leader_1.0/";

export default defineConfig({
  base: BASE,
  build: {
    outDir: "dist-pages",
    emptyOutDir: true,
  },
  resolve: { tsconfigPaths: true },
  plugins: [
    grokPwaPlugin(),
    tailwindcss(),
    tanstackStart({
      spa: {
        enabled: true,
        prerender: {
          outputPath: "/index",
        },
      },
      router: {
        basepath: "/Stou_leader_1.0",
      },
    }),
    viteReact(),
  ],
});
