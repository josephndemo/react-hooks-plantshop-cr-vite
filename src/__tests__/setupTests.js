import { vi, expect, afterEach } from 'vitest';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

// Mocking fetch to provide the data the tests expect
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        { id: 1, name: "Aloe Vera", image: "aloe.jpg", price: 10 },
        { id: 2, name: "Snake Plant", image: "snake.jpg", price: 20 }
      ]),
  })
);