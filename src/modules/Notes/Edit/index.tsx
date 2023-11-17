import { Modal } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { Input } from '~/components';
import { resetNote } from '~/reducer/note';
import { NotesService } from '~/services';
import { RootState } from '~/store';
import { Wrapper } from './styles';

export function Edit() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const { isOpenEdit, note } = useSelector((state: RootState) => state.edit);
  const dispatch = useDispatch();

  const theme = useTheme();

  const Notes = NotesService.getInstance();
  const { mutate } = Notes.update();

  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
  }, [note]);

  const handleChangeTitle = (value: string) => setTitle(value);
  const handleChangeContent = (value: string) => setContent(value);

  const handleCancel = () => {
    mutate({ ...note, title, content });
    dispatch(resetNote());
  };

  return (
    <Modal
      open={isOpenEdit}
      onCancel={handleCancel}
      closeIcon={false}
      footer={false}
      styles={{ content: { background: theme.primary, padding: 0 } }}
    >
      <Wrapper>
        <Input.Root fullWidth>
          <Input.TextInput value={title} placeholder='Título' onChange={handleChangeTitle} />
        </Input.Root>
        <Input.Root fullWidth>
          <Input.TextArea
            value={content}
            placeholder='Criar uma nota...'
            onChange={handleChangeContent}
          />
        </Input.Root>
      </Wrapper>
    </Modal>
  );
}
