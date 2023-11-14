import { useState } from 'react';
import { useQuery } from 'react-query';
import { Card, TextInput } from '~/components';
import { NoteServices } from '~/services';
import { Note } from '~/types/note';
import { List, ListItem, Wrapper } from './styles';

export function NoteList() {
  const [search, setSearch] = useState<string>('');

  const { data: notes, isLoading } = useQuery<Note[]>({
    queryKey: ['notes', search],
    queryFn: () => NoteServices.getNotes(search),
  });

  const showNotes = !isLoading && notes?.length;

  const handleChange = (value: string) => setSearch(value);

  return (
    <Wrapper>
      <TextInput value={search} placeholder='Pesquisar' onChange={handleChange} />

      {isLoading && <div>Carregando</div>}

      {showNotes && (
        <List>
          {notes.map((note, index) => (
            <ListItem key={index}>
              <Card {...note} />
            </ListItem>
          ))}
        </List>
      )}
    </Wrapper>
  );
}
