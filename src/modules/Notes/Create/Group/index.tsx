import { useState } from 'react';
import { Button, Input } from '~/components';
import { NotesService } from '~/services';
import { Actions, Wrapper } from './styles';

export function Group() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const Notes = NotesService.getInstance();
  const { mutate } = Notes.add();

  const handleChangeTitle = (value: string) => setTitle(value);
  const handleChangeContent = (value: string) => setContent(value);

  const addNote = async () => {
    if (!content) return;
    mutate({ id: Math.random().toString(16).slice(2), title, content });
  };

  return (
    <Wrapper>
      <Input.Root fullWidth>
        <Input.TextInput placeholder='Título' value={title} onChange={handleChangeTitle} />
      </Input.Root>
      <Input.Root fullWidth>
        <Input.TextArea
          placeholder='Criar uma nota...'
          value={content}
          onChange={handleChangeContent}
        />
      </Input.Root>

      <Actions>
        <Button label='Salvar' onClick={addNote} />
      </Actions>
    </Wrapper>
  );
}
