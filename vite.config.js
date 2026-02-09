import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/MacOs/",
  build: {
    chunkSizeWarningLimit: 2000, // Raises the limit from 500kb to 1000kb
  },
});

