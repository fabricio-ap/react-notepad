import { useDispatch } from 'react-redux';
import { Icon, Note, NoteActionType, Tag } from '~/components';
import { setNote } from '~/reducer/note';
import { NotesService } from '~/services';
import { NoteType } from '~/types/note';

interface ItemProps {
  note: NoteType;
}

export function Item({ note }: ItemProps) {
  const dispatch = useDispatch();

  const Notes = NotesService.getInstance();
  const { mutate: update } = Notes.update();
  const { mutate: remove } = Notes.delete();

  const config = [
    {
      label: note.fixed ? 'Desafixar' : 'Fixar',
      render: <Icon name='pin' />,
      align: 'left',
      onClick: () => update({ ...note, fixed: !note.fixed }),
    },
    {
      label: 'Apagar',
      render: <Icon name='remove' />,
      align: 'right',
      onClick: () => remove(note.id),
    },
  ];

  const handleSelect = () => {
    dispatch(setNote(note));
  };

  return (
    <Note.Root actions={config as NoteActionType[]} onClick={handleSelect}>
      {note.title && <Note.Title title={note.title} />}
      <Note.Content content={note.content} />
      {note.tag && <Tag label={note.tag.label} />}
    </Note.Root>
  );
}
