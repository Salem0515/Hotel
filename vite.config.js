import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Hotel/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        404: './index.html', // Generate 404.html as a fallback
      },
    },
  },
});
