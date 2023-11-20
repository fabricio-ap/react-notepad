import { useState } from 'react';
import { Input, NoteForm } from '~/components';
import { useComponentVisible } from '~/hooks/useComponentVisible';
import { NotesService } from '~/services';
import { Container, Wrapper } from './styles';

export function Create() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const Notes = NotesService.getInstance();
  const { mutate } = Notes.add();

  const handleChangeTitle = (value: string) => setTitle(value);
  const handleChangeContent = (value: string) => setContent(value);

  const handleAddNote = async () => {
    setShow(false);
    if (!title && !content) return;
    mutate({ id: Math.random().toString(16).slice(2), title, content });
    resetState();
  };

  const resetState = () => {
    setTitle('');
    setContent('');
  };

  const { ref, show, setShow } = useComponentVisible<HTMLDivElement>(handleAddNote);

  return (
    <Wrapper>
      <Container ref={ref}>
        {!show && <Input placeholder='Criar uma nota...' fullWidth />}

        {show && (
          <NoteForm onClose={handleAddNote}>
            <Input placeholder='Título' value={title} onChange={handleChangeTitle} fullWidth />
            <Input
              type='textarea'
              placeholder='Criar uma nota...'
              value={content}
              onChange={handleChangeContent}
              fullWidth
            />
          </NoteForm>
        )}
      </Container>
    </Wrapper>
  );
}
