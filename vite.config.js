import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio/", // Gebruik de exacte naam van je GitHub repository
  plugins: [react()],
})
