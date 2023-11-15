import { ReactNode } from 'react';
import { Wrapper } from './styles';

interface NoteRootProps {
  children: ReactNode;
}

export function NoteRoot({ children }: NoteRootProps) {
  return <Wrapper>{children}</Wrapper>;
}
