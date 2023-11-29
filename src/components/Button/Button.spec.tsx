import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '~/theme';
import { Button } from '.';

describe('Button', () => {
  it('Render button', () => {
    render(
      <ThemeProvider theme={theme.light}>
        <Button label='Button' />
      </ThemeProvider>,
    );

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('Render button with a custom label', () => {
    render(
      <ThemeProvider theme={theme.light}>
        <Button label='Custom label' />
      </ThemeProvider>,
    );

    const button = screen.getByRole('button', {
      name: /Custom label/i,
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Custom label');
  });
});
