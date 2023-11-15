import { NoteActions } from './NoteActions';
import { NoteRoot } from './NoteRoot';
import { NoteSimple } from './NoteSimple';
import { NoteTitle } from './NoteTitle';

// Exemplo do pattern de composição

export const Note = {
  Root: NoteRoot,
  Title: NoteTitle,
  Simple: NoteSimple,
  Actions: NoteActions,
};
