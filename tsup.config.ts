import { defineConfig } from "tsup";

export default defineConfig({
  bundle: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
  cjsInterop: true,

  outDir: "./dist",
  format: ["esm", "cjs"],
  entry: ["./src/**/*.ts"]
});
