import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Note } from '.';
import { Icon } from '../Icon';
import { NoteActionType } from './NoteActions';

const config = [
  {
    label: 'Action',
    render: <Icon name='pin' />,
    align: 'left',
    onClick: () => undefined,
  },
];

describe('Note', () => {
  it('Render note', () => {
    render(
      <Note.Root>
        <Note.Title title='Test' />
        <Note.Content content='Note for test' />
      </Note.Root>,
    );

    const title = screen.getByText('Test');
    const content = screen.getByText('Note for test');

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  it('Render note without title', () => {
    render(
      <Note.Root>
        <Note.Content content='Note for test' />
      </Note.Root>,
    );

    const title = screen.queryByText('Test');

    expect(title).not.toBeInTheDocument();
  });

  it('Render note without content', () => {
    render(
      <Note.Root>
        <Note.Title title='Test' />
      </Note.Root>,
    );

    const content = screen.queryByText('Note for test');

    expect(content).not.toBeInTheDocument();
  });

  it('Render note with actions', () => {
    render(
      <Note.Root actions={config as NoteActionType[]}>
        <Note.Title title='Test' />
      </Note.Root>,
    );

    const actions = screen.getByTestId('note-actions');

    expect(actions).toBeInTheDocument();
  });

  it('Remove opacity when mouse over', () => {
    render(
      <Note.Root actions={config as NoteActionType[]}>
        <Note.Title title='Test' />
      </Note.Root>,
    );

    const actions = screen.getByTestId('note-actions');
    fireEvent.mouseOver(actions);

    expect(actions).toHaveStyle('opacity: 1');
  });
});
