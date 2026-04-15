import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        memes: resolve(__dirname, 'memes.html'),
        gripes: resolve(__dirname, 'gripes.html'),
      },
    },
  },
});
