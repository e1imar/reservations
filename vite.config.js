import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    react()
  ],
  build: {targets: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari14']},
  optimizeDeps: {
    esbuildOptions: { target: 'es2015'},
  }
})
