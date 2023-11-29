import { Text } from '../styles';

interface NoteSimpleProps {
  content: string;
}

export function NoteSimple({ content }: NoteSimpleProps) {
  const text = content.replaceAll('<br />', '\n');

  return <Text>{text}</Text>;
}
