import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, arrayMove, rectSortingStrategy } from '@dnd-kit/sortable';
import { useCallback, useEffect, useState } from 'react';
import { NoteType } from '~/types/note';
import { SortableItem } from './SortableItem';
import { List, Title, Wrapper } from './styles';

interface DraggingList {
  title?: string;
  itemsArr: NoteType[];
}

export function DraggingList({ title, itemsArr = [] }: DraggingList) {
  const [items, setItems] = useState(itemsArr);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    setItems(itemsArr);
  }, [itemsArr]);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: { delay: 100, tolerance: 1 },
    }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 100, tolerance: 1 },
    }),
  );

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over!.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <Wrapper>
      <Title>{title}</Title>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <List>
            {items.map((item) => (
              <SortableItem key={item.id} item={item} />
            ))}
          </List>
        </SortableContext>
      </DndContext>
    </Wrapper>
  );
}
