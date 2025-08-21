import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/',
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@app', replacement: '/src/app' },
      { find: '@components', replacement: '/src/components' },
      { find: '@api', replacement: '/src/api' },
    ],
  },
  optimizeDeps: {
    include: ['react-image-lightbox'], // Vite가 빌드 전에 ESM으로 변환하도록 강제
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/], // CommonJS 패키지도 빌드에서 처리
    },
  },
});
