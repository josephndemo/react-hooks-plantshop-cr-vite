import { render, screen } from '@testing-library/react';
import App from './App';

describe('All Plants Deliverable', () => {
  it('renders the plants list with initial plants', () => {
    render(<App />);

    expect(screen.getByText('All Plants')).toBeInTheDocument();
    expect(screen.getByText('Aloe Vera')).toBeInTheDocument();
    expect(screen.getByText('Snake Plant')).toBeInTheDocument();
    expect(screen.getByText('Monstera')).toBeInTheDocument();

    // Optional: check the list container exists
    expect(screen.getByTestId('plants-list')).toBeInTheDocument();
  });
});