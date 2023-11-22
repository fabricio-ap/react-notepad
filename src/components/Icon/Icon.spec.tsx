import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Icon } from '.';

describe('Icon', () => {
  it('Render an icon', () => {
    render(<Icon name='search' />);

    const icon = screen.getByTestId('icon');

    expect(icon).toBeInTheDocument();
  });
});
