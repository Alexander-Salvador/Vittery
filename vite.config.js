import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/Components'),
      '@pages': path.resolve(__dirname, './src/Pages'),
      '@services': path.resolve(__dirname, './src/Services'),
      '@context': path.resolve(__dirname, './src/Context'),
      '@hooks': path.resolve(__dirname, './src/Hooks'),
      '@utils': path.resolve(__dirname, './src/Utils'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@routes': path.resolve(__dirname, './src/Routes'),
    },
  },
});
