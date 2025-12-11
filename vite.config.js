import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Opsional: Mengatur port default ke 3000
    open: true, // Opsional: Otomatis membuka browser saat 'npm run dev'
  },
})