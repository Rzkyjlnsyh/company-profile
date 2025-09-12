import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Konfigurasi dasar Vite
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // alias @ mengarah ke folder src
    },
  },
});
