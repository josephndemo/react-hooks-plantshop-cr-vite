// vitest.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // makes expect, describe, it globally available
    setupFiles: './src/__tests__/setupTests.js',
    environment: 'jsdom', // needed for React Testing Library
  },
});
