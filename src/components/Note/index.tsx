import { ReactNode } from 'react';
import { NoteSimple } from './Content';
import { NoteRoot } from './Root';
import { NoteTitle } from './Title';

export type NoteActionType = {
  label: string;
  render?: ReactNode;
  align?: 'right' | 'left';
  onClick?: () => void;
};

// Exemplo do pattern de composição
export const Note = {
  Root: NoteRoot,
  Title: NoteTitle,
  Content: NoteSimple,
};
