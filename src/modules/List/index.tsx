import { useSelector } from 'react-redux';
import { NotesService } from '~/services';
import { RootState } from '~/store';
import { DraggingList } from './DraggingList';
import { Content, Wrapper } from './styles';

export function List() {
  const { search, tag } = useSelector((state: RootState) => state.filter);

  const Notes = NotesService.getInstance();
  const { data: notes, isLoading } = Notes.get(search, tag);

  const showNotes = !isLoading && notes?.length;

  const fixedNotes = notes?.filter(({ fixed }) => fixed) || [];
  const nonFixedNotes = notes?.filter(({ fixed }) => !fixed) || [];

  return (
    <Wrapper>
      {showNotes ? (
        <Content>
          {fixedNotes.length ? <DraggingList title='Marcadas' itemsArr={fixedNotes} /> : <></>}
          <DraggingList title='Outras' itemsArr={nonFixedNotes} />
        </Content>
      ) : (
        <></>
      )}
    </Wrapper>
  );
}
