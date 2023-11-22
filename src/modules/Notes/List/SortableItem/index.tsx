import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Icon, Note } from '~/components';
import { NoteActionType } from '~/components/Note/NoteActions';
import { setNote } from '~/reducer/note';
import { NotesService } from '~/services';
import { NoteType } from '~/types/note';
import { ListItem } from './styles';

interface SortableItemProps {
  item: NoteType;
}

export function SortableItem({ item }: SortableItemProps) {
  const dispatch = useDispatch();

  const Notes = NotesService.getInstance();
  const { mutate: update } = Notes.update();
  const { mutate: remove } = Notes.delete();

  const handleSelect = () => dispatch(setNote(item));

  const config = useMemo(
    () => [
      {
        label: item.fixed ? 'Desafixar' : 'Fixar',
        render: <Icon name='pin' />,
        align: 'left',
        onClick: () => update({ ...item, fixed: !item.fixed }),
      },
      {
        label: 'Apagar',
        render: <Icon name='remove' />,
        align: 'right',
        onClick: () => remove(item.id),
      },
    ],
    [],
  );

  const { isDragging, attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: item.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  };

  return (
    <ListItem
      ref={setNodeRef}
      style={style}
      $isDragging={isDragging}
      {...attributes}
      {...listeners}
    >
      <Note.Root actions={config as NoteActionType[]} onClick={handleSelect}>
        {item.title && <Note.Title title={item.title} />}
        <Note.Content content={item.content} />
        {item.tag ? <Note.Tag tag={item.tag} /> : <></>}
      </Note.Root>
    </ListItem>
  );
}
