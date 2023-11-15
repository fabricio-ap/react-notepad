import { Text } from './styles';

interface NoteSimpleProps {
  content: string;
}

export function NoteSimple({ content }: NoteSimpleProps) {
  return <Text>{content}</Text>;
}
