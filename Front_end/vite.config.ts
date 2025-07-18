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
});
