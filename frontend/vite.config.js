import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change the base path to your repo name if you deploy to GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/<repo-name>/' // <-- Replace <repo-name> with your actual repo name
})