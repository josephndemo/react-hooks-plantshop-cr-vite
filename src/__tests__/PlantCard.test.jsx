// src/__tests__/PlantCard.test.jsx
import { render, screen } from '@testing-library/react';
// If globals: true is NOT set, import expect
import { describe, it, expect } from 'vitest';
import PlantCard from '../components/PlantCard';

describe('PlantCard Component', () => {
  const mockPlant = {
    name: 'Aloe Vera',
    price: '$12',
    image: 'aloe-vera.jpg',
  };

  it('renders plant name', () => {
    render(<PlantCard plant={mockPlant} />);
    expect(screen.getByText('Aloe Vera')).toBeInTheDocument();
  });
});
