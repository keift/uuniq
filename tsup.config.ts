import { defineConfig } from 'tsup';

export default defineConfig({
  bundle: true,
  cjsInterop: true,
  clean: true,
  dts: true,
  sourcemap: false,
  splitting: false,

  outDir: './dist',
  format: ['esm', 'cjs'],
  entry: ['./src/main.ts']
});
