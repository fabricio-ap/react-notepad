import { Modal } from 'antd';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import { Button, Icon, Input, Tooltip } from '~/components';
import { TagsService } from '~/services';
import { Container, Item, Label, Wrapper } from './styles';

interface CreateTagProps {
  open: boolean;
  onClose: () => void;
}

export function CreateTag({ open, onClose }: CreateTagProps) {
  const [tagName, setTagName] = useState('');

  const theme = useTheme();

  const Tags = TagsService.getInstance();
  const { data, isLoading } = Tags.get();
  const { mutate: createTag } = Tags.create();
  const { mutate: deleteTag } = Tags.delete();

  const handleChange = (value: string) => setTagName(value);

  const handleClickAdd = () => {
    if (!tagName) return;

    const newTag = {
      label: tagName,
      value: tagName.toLowerCase().replaceAll(' ', '_'),
    };

    createTag(newTag);
    setTagName('');
  };

  const handleClickRemove = (id: string | number) => {
    deleteTag(id);
  };

  const styles = { content: { background: theme.primary, padding: 0 } };

  return (
    <Modal open={open} onCancel={onClose} closeIcon={false} footer={false} styles={styles}>
      <Wrapper>
        <Container>
          <Item>
            <Input
              type='text'
              placeholder='Criar novo marcador'
              value={tagName}
              onChange={handleChange}
              fullWidth
            />
            <Tooltip title='Criar novo marcador'>
              <Button icon={<Icon name='add' size='14px' />} onClick={handleClickAdd} />
            </Tooltip>
          </Item>

          {!isLoading && data?.length ? (
            <Container>
              {data.map((tag) => (
                <Item key={tag.value}>
                  <Icon name='tag' size='12px' />
                  <Label>{tag.label}</Label>
                  <Tooltip title='Apagar marcador'>
                    <Button
                      icon={<Icon name='remove' size='14px' />}
                      onClick={() => tag.id && handleClickRemove(tag.id)}
                    />
                  </Tooltip>
                </Item>
              ))}
            </Container>
          ) : (
            <></>
          )}
        </Container>
      </Wrapper>
    </Modal>
  );
}
