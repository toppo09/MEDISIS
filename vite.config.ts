import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MEDISIS/', // ★ここが抜けている、またはスペルミスがあるとCSSが404になります
})
