import { useMutation, useQuery } from 'react-query';
import { NoteType } from '~/types/note';
import { addNote, deleteNote, getNotes, updateNote } from './service';

export class NotesService {
  private static instance: NotesService;
  public getRefetch: () => void = () => undefined;

  private constructor() {}

  public static getInstance(): NotesService {
    if (!NotesService.instance) {
      NotesService.instance = new NotesService();
    }

    return NotesService.instance;
  }

  public get(search: string) {
    const { refetch, ...query } = useQuery<NoteType[]>({
      queryKey: ['users', search],
      queryFn: () => getNotes(search),
    });

    this.getRefetch = refetch;

    return { ...query, refetch };
  }

  public add() {
    return useMutation(addNote, {
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

  private refetchNotes() {
    this.getRefetch();
  }
}