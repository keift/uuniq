import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm", "cjs"],
  entry: ["./src/main.ts"],
  outDir: "./dist",
  splitting: true,
  clean: true,
  dts: true
});