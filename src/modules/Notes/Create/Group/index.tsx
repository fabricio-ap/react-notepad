import { useState } from 'react';
import { Input, NoteForm } from '~/components';
import { NotesService } from '~/services';
import { Wrapper } from './styles';

interface GroupProps {
  changeView: (view: boolean) => void;
}

export function Group({ changeView }: GroupProps) {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const Notes = NotesService.getInstance();
  const { mutate } = Notes.add();

  const handleChangeTitle = (value: string) => setTitle(value);
  const handleChangeContent = (value: string) => setContent(value);

  const addNote = async () => {
    changeView(false);
    if (!content) return;
    mutate({ id: Math.random().toString(16).slice(2), title, content });
  };

  return (
    <Wrapper>
      <NoteForm onClose={addNote}>
        <Input placeholder='Título' value={title} onChange={handleChangeTitle} fullWidth />
        <Input
          type='textarea'
          placeholder='Criar uma nota...'
          value={content}
          onChange={handleChangeContent}
          fullWidth
        />
      </NoteForm>
    </Wrapper>
  );
}
