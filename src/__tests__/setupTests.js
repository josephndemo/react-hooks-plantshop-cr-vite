// src/__tests__/setupTests.js
import { expect, afterEach, vi } from 'vitest';   
import '@testing-library/jest-dom';          
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

// --- ADD THIS FETCH MOCK ---
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        {
          id: 1,
          name: "Aloe Vera",
          image: "./images/aloe.jpg",
          price: 15.99,
        },
      ]),
  })
);