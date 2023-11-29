import { Header, Title } from '../styles';

interface NoteTitleProps {
  title: string;
}

export function NoteTitle({ title }: NoteTitleProps) {
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  );
}
