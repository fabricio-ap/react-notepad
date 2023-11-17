import { useSelector } from 'react-redux';
import { NotesService } from '~/services';
import { RootState } from '~/store';
import { DraggingList } from './DraggingList';
import { Wrapper } from './styles';

export function List() {
  const { search } = useSelector((state: RootState) => state.filter);

  const Notes = NotesService.getInstance();
  const { data: notes, isLoading } = Notes.get(search);

  const showNotes = !isLoading && notes?.length;

  return (
    <Wrapper>
      {isLoading && <div>Carregando</div>}

      {showNotes ? <DraggingList itemsArr={notes} /> : <></>}
    </Wrapper>
  );
}
