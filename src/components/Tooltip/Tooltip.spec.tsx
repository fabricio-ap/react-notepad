import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Tooltip } from '.';

describe('Tooltip', () => {
  it('Show tooltip when hover a label', async () => {
    render(
      <Tooltip title='Tooltip'>
        <div>Label</div>
      </Tooltip>,
    );

    const label = screen.getByText('Label');
    fireEvent.mouseOver(label);

    expect(label).toBeInTheDocument();
    await waitFor(() => screen.findByText('Tooltip'));
    expect(await screen.findByText('Tooltip')).toBeInTheDocument();
  });
});
