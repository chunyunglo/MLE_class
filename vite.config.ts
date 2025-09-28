import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 將 'your-repo-name' 替換為你的 GitHub repository 名稱
  base: '/MLE_class/', 
  plugins: [react()],
})
