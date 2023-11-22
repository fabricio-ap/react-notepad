import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  it('Render button', () => {
    render(<Button label='Button' />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('Render button with a custom label', () => {
    render(<Button label='Custom label' />);

    const button = screen.getByRole('button', {
      name: /Custom label/i,
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Custom label');
  });
});
