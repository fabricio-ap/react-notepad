import { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { NoteServices } from '~/services';
import { RootState } from '~/store';
import { NoteType } from '~/types/note';
import { DraggingList } from './DraggingList';
import { Wrapper } from './styles';

export function NoteList() {
  const [open, setOpen] = useState(false);

  const { search } = useSelector((state: RootState) => state.filter);

  const { data: notes, isLoading } = useQuery<NoteType[]>({
    queryKey: ['notes', search],
    queryFn: () => NoteServices.getNotes(search),
  });

  const showNotes = !isLoading && notes?.length;

  return (
    <Wrapper>
      {isLoading && <div>Carregando</div>}

      {showNotes ? <DraggingList itemsArr={notes} /> : <></>}
    </Wrapper>
  );
}
