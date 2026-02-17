import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';

describe('Search Plants Deliverable', () => {
  it('filters plants when searching', async () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const searchInput = getByPlaceholderText(/search plants/i);

    fireEvent.change(searchInput, { target: { value: 'Aloe Vera' } });

    await waitFor(() => {
      expect(getByText(/aloe vera/i)).toBeInTheDocument();
    });
  });
});
