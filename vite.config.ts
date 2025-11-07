import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, './components'),
      'components/ui': path.resolve(__dirname, './components/ui'),
      'pages': path.resolve(__dirname, './pages'),
      'data': path.resolve(__dirname, './data'),
      'lib': path.resolve(__dirname, './lib'),
      'context': path.resolve(__dirname, './context'),
      'config': path.resolve(__dirname, './config'),
      'types': path.resolve(__dirname, './types'),
      'app': path.resolve(__dirname, './app'),
    },
  },
  optimizeDeps: {
    include: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'lucide-react': ['lucide-react'],
        },
      },
    },
  },
});
