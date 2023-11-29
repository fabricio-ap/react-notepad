import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '~/theme';
import { Popover } from '.';
import { Button } from '../Button';

describe('Popover', () => {
  it('Should render popover without show popup', () => {
    render(
      <ThemeProvider theme={theme.light}>
        <Popover content={<div>Popover</div>}>
          <Button label='Click Me' />
        </Popover>
      </ThemeProvider>,
    );

    const popover = screen.queryByText('Popover');

    expect(popover).not.toBeInTheDocument();
  });

  it('Should show a popup when click in button', () => {
    render(
      <ThemeProvider theme={theme.light}>
        <Popover content={<div>Popover</div>}>
          <Button label='Click Me' />
        </Popover>
      </ThemeProvider>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const popover = screen.queryByText('Popover');

    expect(popover).toBeInTheDocument();
  });
});
