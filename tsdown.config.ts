import { defineConfig } from 'tsdown';

export default defineConfig({
  format: ['esm', 'cjs'],
  entry: {
    main: './src/main.ts',
    types: './src/exports/types.ts'
  }
});
