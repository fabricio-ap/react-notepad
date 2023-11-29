import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { NoteType } from '~/types/note';
import { Item } from '../Item';
import { ListItem } from './styles';

interface SortableItemProps {
  item: NoteType;
}

export function SortableItem({ item }: SortableItemProps) {
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
      <Item note={item} />
    </ListItem>
  );
}
