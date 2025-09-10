import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Nombre del repositorio (ajústalo al tuyo exacto en GitHub)
const repoName = "mediVideoWeb"

// Detectar si estamos en GitHub Pages (usando variable de entorno)
const isGithubPages = process.env.GITHUB_PAGES === "true"

export default defineConfig({
  plugins: [react()],
  base: isGithubPages ? `/${repoName}/` : "./",
})
