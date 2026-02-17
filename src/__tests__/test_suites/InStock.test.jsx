import { render, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';

describe('In Stock Deliverable', () => {
  it('shows plants that are in stock', () => {
    const { getByText, getAllByTestId } = render(<App />);
    const stockItems = getAllByTestId('in-stock'); // Add `data-testid="in-stock"` in App

    expect(stockItems.length).toBeGreaterThan(0);

    stockItems.forEach(item => {
      expect(within(item).getByText(/in stock/i)).toBeInTheDocument();
    });
  });
});
