import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Create Plant Deliverable', () => {
  it('allows user to create and display a new plant', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find form elements using accessible queries
    const nameInput = screen.getByLabelText(/plant name/i);
    const submitButton = screen.getByRole('button', { name: /add plant/i });

    // Type and submit
    await user.type(nameInput, 'Peace Lily');
    await user.click(submitButton);

    // New plant should appear in the list
    expect(screen.getByText('Peace Lily (In Stock)')).toBeInTheDocument();

    // Input should be cleared after submit
    expect(nameInput).toHaveValue('');
  });

  it('does not add empty plant names', async () => {
    const user = userEvent.setup();
    render(<App />);

    const nameInput = screen.getByLabelText(/plant name/i);
    const submitButton = screen.getByRole('button', { name: /add plant/i });

    await user.type(nameInput, '   '); // only spaces
    await user.click(submitButton);

    // No new empty item should appear
    expect(screen.queryByText('(In Stock)')).not.toBeInTheDocument();
  });
});