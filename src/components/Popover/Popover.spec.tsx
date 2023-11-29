import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Popover } from '.';
import { Button } from '../Button';

describe('Popover', () => {
  it('Should render popover without show popup', () => {
    render(
      <Popover content={<div>Popover</div>}>
        <Button label='Click Me' />
      </Popover>,
    );

    const popover = screen.queryByText('Popover');

    expect(popover).not.toBeInTheDocument();
  });

  it('Should show a popup when click in button', () => {
    render(
      <Popover content={<div>Popover</div>}>
        <Button label='Click Me' />
      </Popover>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const popover = screen.queryByText('Popover');

    expect(popover).toBeInTheDocument();
  });
});
