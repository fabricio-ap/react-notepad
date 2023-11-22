import { NoteRoot } from './NoteRoot';
import { NoteSimple } from './NoteSimple';
import { NoteTag } from './NoteTag';
import { NoteTitle } from './NoteTitle';

// Exemplo do pattern de composição

export const Note = {
  Root: NoteRoot,
  Title: NoteTitle,
  Content: NoteSimple,
  Tag: NoteTag,
};
