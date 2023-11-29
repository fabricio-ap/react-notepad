import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { Button, Icon, Input, Popover, Tag } from '~/components';
import { setInitialState, setNoteContent } from '~/reducer/note';
import { NotesService } from '~/services';
import { RootState } from '~/store';
import { TagType } from '~/types/note';
import { TagSelection } from './TagSelection';
import { Section, Wrapper } from './styles';

export function Form() {
  const { isEditing, isNew, note } = useSelector((state: RootState) => state.edit);
  const dispatch = useDispatch();
  const theme = useTheme();

  const Note = NotesService.getInstance();
  const { mutate: createNote } = Note.create();
  const { mutate: updateNote } = Note.update();

  const handleChangeTitle = (value: string) => {
    dispatch(setNoteContent({ ...note, title: value }));
  };

  const handleChangeContent = (value: string) => {
    dispatch(setNoteContent({ ...note, content: value }));
  };

  const handleChangeTag = (tag: TagType | null) => {
    dispatch(setNoteContent({ ...note, tag }));
  };

  const handleRemoveTag = () => {
    dispatch(setNoteContent({ ...note, tag: null }));
  };

  const handleSubmit = () => {
    const hasNote = note.title && note.content;
    if (!hasNote) return dispatch(setInitialState());

    isNew ? createNote(note) : updateNote(note);

    dispatch(setInitialState());
  };

  const styles = { content: { background: theme.primary, padding: 0 } };

  return (
    <Modal
      open={isEditing}
      onCancel={handleSubmit}
      closeIcon={false}
      footer={false}
      styles={styles}
    >
      <Wrapper>
        <Input placeholder='Título' value={note.title} onChange={handleChangeTitle} fullWidth />
        <Input
          type='textarea'
          placeholder='Criar uma nota...'
          value={note.content}
          onChange={handleChangeContent}
          fullWidth
        />

        {note.tag && (
          <Section>
            <Tag label={note.tag.label} onClick={handleRemoveTag} />
          </Section>
        )}

        <Section data-testid='note-actions'>
          <Popover content={<TagSelection selected={note.tag} onSelect={handleChangeTag} />}>
            <Button label='Adicionar marcador' icon={<Icon name='tag' size='14px' />} />
          </Popover>

          <Button label='Fechar' onClick={handleSubmit} />
        </Section>
      </Wrapper>
    </Modal>
  );
}
