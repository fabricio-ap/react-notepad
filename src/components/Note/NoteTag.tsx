import { TagType } from '~/types/note';
import { Tag, TagWrapper } from './styles';

interface NoteTagProps {
  tag: TagType;
}

export function NoteTag({ tag }: NoteTagProps) {
  return (
    <TagWrapper>
      <Tag>{tag.label}</Tag>
    </TagWrapper>
  );
}
