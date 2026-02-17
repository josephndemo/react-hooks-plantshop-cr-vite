import { render, screen } from '@testing-library/react';
import App from './App'; // adjust path as needed

describe('All Plants Deliverable', () => {
  it('renders the plants list', () => {
    render(<App />);

    // Replace with the actual heading or static text that appears in the document
    expect(screen.getByText(/all plants/i)).toBeInTheDocument();
    // or if you have plant names already present in initial state:
    // expect(screen.getByText('Aloe Vera')).toBeInTheDocument();
  });
});