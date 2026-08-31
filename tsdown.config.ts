import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    main: './src/main.ts',
    types: './src/exports/types.ts'
  }
});
