import { useTheme } from 'styled-components';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import { TagsService } from '~/services';
import { TagType } from '~/types/note';
import { Title, Wrapper } from './styles';

interface TagSelectionProps {
  selected: TagType | null;
  onSelect: (tag: TagType | null) => void;
}

export function TagSelection({ selected, onSelect }: TagSelectionProps) {
  const theme = useTheme();

  const Tags = TagsService.getInstance();
  const { data: tags, isLoading } = Tags.get();

  const handleSelect = (tag: TagType) => {
    if (tag.value === selected?.value) return onSelect(null);
    onSelect(tag);
  };

  if (isLoading) return <></>;

  return (
    <Wrapper>
      <Title>Selecionar marcador</Title>

      {tags?.map(({ label, value, ...props }, index) => (
        <Button
          key={index}
          label={label}
          icon={<Icon name='tag' size='14px' />}
          color={selected?.value === value ? theme.primary : 'transparent'}
          size='12px'
          onClick={() => handleSelect({ label, value, ...props })}
        />
      ))}
    </Wrapper>
  );
}
