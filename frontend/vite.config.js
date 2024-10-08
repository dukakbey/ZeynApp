import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: 
  {
    port: 5173, // Port numarasını burada belirleyin
    host: true,  // Yerel ağ üzerinden erişilebilirliği sağlar
    proxy:{
      '/api':'http://localhost:8080'
    }
  }
})
