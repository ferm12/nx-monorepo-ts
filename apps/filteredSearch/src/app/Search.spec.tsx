import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
  it('renders the current value', () => {
    render(<Search value="fermin" setValue={vi.fn()} />);
    expect(screen.getByRole('textbox')).toHaveValue('fermin');
  });
  it('calls setValue when the user types', () => {
    const setValue = vi.fn();
    render(<Search value="" setValue={setValue} />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'max' },
    });
    expect(setValue).toHaveBeenCalledWith('max');
  });
});