import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    // This line is crucial! It tells Vitest to load your mocks
    setupFiles: './src/__tests__/setupTests.js', 
  },
});