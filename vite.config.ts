import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    // 청크 크기 최적화
    rollupOptions: {
      output: {
        manualChunks: {
          // React 관련 라이브러리를 별도 청크로 분리
          'react-vendor': ['react', 'react-dom'],
          // 라우터 관련
          'router-vendor': ['react-router-dom'],
          // 애니메이션 라이브러리
          'animation-vendor': ['framer-motion'],
          // 아이콘 라이브러리
          'icon-vendor': ['lucide-react'],
        }
      }
    },
    // 성능 최적화 설정
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: true,
    // 대용량 에셋 경고 임계값 조정
    chunkSizeWarningLimit: 1000,
  },
  // 개발 서버 최적화
  server: {
    hmr: {
      overlay: false
    }
  }
})
