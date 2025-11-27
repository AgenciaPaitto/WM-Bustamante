import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração para WordPress
export default defineConfig({
  plugins: [react()],
  // Base relativa para que os assets (imagens/fonts) sejam carregados a partir da pasta atual
  base: '',
  define: {
    'process.env': {} 
  },
  build: {
    outDir: 'dist',
    // Não usar subpasta assets, jogar tudo na raiz da dist
    assetsDir: '',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Nomes fixos na raiz
        entryFileNames: 'app.js',
        chunkFileNames: 'app.js',
        assetFileNames: 'app.[ext]' 
      }
    }
  }
})