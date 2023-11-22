import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { NoteForm } from '.';
import { Input } from '../Input';

describe('NoteForm', () => {
  it('Render a simple form without inputs', () => {
    render(<NoteForm onClose={() => undefined} />);

    const form = screen.getByTestId('note-form');
    const action = screen.getByRole('button');

    expect(form).toBeInTheDocument();
    expect(action).toBeInTheDocument();
    expect(action).toHaveTextContent('Fechar');
  });

  it('Render a simple form with one input', () => {
    render(
      <NoteForm onClose={() => undefined}>
        <Input type='text' />
      </NoteForm>,
    );

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
  });
});
