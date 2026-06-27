import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative base so the build works whether it's served from the domain root
  // or a GitHub Pages project subpath (e.g. /Ai_designer/) — and avoids
  // case-sensitivity mismatches between the repo name and the URL path.
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
