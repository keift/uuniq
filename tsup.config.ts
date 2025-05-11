import { defineConfig } from "tsup";

export default defineConfig({
  outDir: "./dist",
  splitting: true,
  clean: true,
  dts: true,
  format: ["esm", "cjs"],
  entry: ["./src/main.ts"]
});