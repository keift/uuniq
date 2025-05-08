import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "./src/main.ts",
  ],
  outDir: "./dist",
  format: ["esm", "cjs"],
  splitting: true,
  clean: true,
  dts: true,
});