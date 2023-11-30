import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Tag } from '.';

describe('Tag', () => {
  it('Render tag', () => {
    render(<Tag label='Tag' />);
    const tag = screen.getByText('Tag');
    expect(tag).toBeInTheDocument();
  });
});
