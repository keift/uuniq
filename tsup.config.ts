import { defineConfig } from 'tsup';

export default defineConfig({
  bundle: true,
  cjsInterop: true,
  clean: true,
  dts: true,

  minify: false,
  sourcemap: false,
  splitting: false,

  outDir: './dist',
  format: ['esm', 'cjs'],
  entry: ['./src/main.ts']
});
