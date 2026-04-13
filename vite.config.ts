import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Tailwind must run before React so utilities are applied to scanned modules in dev.
  plugins: [tailwindcss(), react()],
  server: {
    open: '/home',
  },
})
