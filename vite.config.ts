import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages: if repo name is not 'username.github.io', set base to '/repo-name/'
// For custom domain or username.github.io: use '/'
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH && process.env.VITE_BASE_PATH.trim() !== '' 
    ? `/${process.env.VITE_BASE_PATH}/` 
    : '/',
  // Use relative paths for assets to work on GitHub Pages
  build: {
    assetsDir: 'assets',
  },
})
