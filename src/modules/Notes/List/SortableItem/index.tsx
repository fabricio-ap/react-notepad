import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useDispatch } from 'react-redux';
import { Note } from '~/components';
import { setNote } from '~/reducer/note';
import { NotesService } from '~/services';
import { NoteType } from '~/types/note';
import { ListItem } from './styles';

interface SortableItemProps {
  item: NoteType;
}

export function SortableItem({ item }: SortableItemProps) {
  const { isDragging, attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: item.id,
  });

  const dispatch = useDispatch();

  const Notes = NotesService.getInstance();
  const { mutate } = Notes.delete();

  const handleSelect = () => dispatch(setNote(item));

  const handleDelete = () => mutate(item.id);

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
      onClick={handleSelect}
    >
      <Note.Root>
        {/* <Note.Actions onDelete={handleDelete} /> */}
        <Note.Title title={item.title} />
        <Note.Simple content={item.content} />
      </Note.Root>
    </ListItem>
  );
}
