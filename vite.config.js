import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari14']},
  optimizeDeps: {
    esbuildOptions: { target: 'es2015'},
  }
})
