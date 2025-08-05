import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite conexões externas
    port: 5173,      // Porta padrão do Vite
  },
  //criação de um alias(atalho) que permite o uso de caminhos relativos. att importe o path antes do código abaixo:
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      
    }
  }
})
