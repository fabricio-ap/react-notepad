import { useMutation, useQuery } from 'react-query';
import { NoteType, TagType } from '~/types/note';
import { createNote, deleteNote, getNotes, updateNote } from './service';

export class NotesService {
  private static instance: NotesService;
  private refetch: () => void = () => undefined;

  private constructor() {}

  public static getInstance(): NotesService {
    if (!NotesService.instance) {
      NotesService.instance = new NotesService();
    }

    return NotesService.instance;
  }

  public get(search: string, tag: TagType | null) {
    const { refetch, ...query } = useQuery<NoteType[]>({
      queryKey: ['users', search, tag],
      queryFn: () => getNotes(search, tag),
    });

    this.refetch = refetch;

    return { ...query, refetch };
  }

  public create() {
    return useMutation(createNote, {
      onSuccess: () => this.refetchNotes(),
    });
  }

  public update() {
    return useMutation(updateNote, {
      onSuccess: () => this.refetchNotes(),
    });
  }

  public delete() {
    return useMutation(deleteNote, {
      onSuccess: () => this.refetchNotes(),
    });
  }

  public refetchNotes() {
    this.refetch();
  }
}
