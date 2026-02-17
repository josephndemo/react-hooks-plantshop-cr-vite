// src/__tests__/setupTests.js
import { expect, afterEach } from 'vitest';   // ✅ import expect from vitest
import '@testing-library/jest-dom';          // ✅ adds custom matchers
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

// now you can use jest-dom matchers with Vitest's expect
