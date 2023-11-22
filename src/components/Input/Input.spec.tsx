import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from '.';

describe('Input', () => {
  it('Render an input', () => {
    render(<Input type='text' />);

    const root = screen.getByTestId('input');
    const input = screen.getByRole<HTMLInputElement>('textbox');

    expect(root).toContainElement(input);
  });

  it('Render a textarea', () => {
    render(<Input type='textarea' />);

    const root = screen.getByTestId('input');
    const input = screen.getByRole<HTMLInputElement>('textbox');

    expect(root).toContainElement(input);
  });

  it('Render input with a value received by prop', () => {
    render(<Input type='text' value='Teste' />);

    const input = screen.getByRole<HTMLInputElement>('textbox');

    expect(input.value).toBe('Teste');
  });

  it('Should has an input with typed value', () => {
    render(<Input type='text' />);

    const input = screen.getByRole<HTMLInputElement>('textbox');
    fireEvent.change(input, { target: { value: '23' } });

    expect(input.value).toBe('23');
  });
});
