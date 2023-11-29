import { NoteType, TagType } from '~/types/note';
import { NOTES_URL } from '~/utils/urls';
import { api } from '../api';

export const getNotes = async (q: string, tag: TagType | null) => {
  const params = { q, 'tag.id': tag?.id };
  const { data } = await api.get(NOTES_URL, { params });

  return data;
};

export const createNote = async (params: NoteType) => {
  const { data } = await api.post(NOTES_URL, params);
  return data;
};

export const updateNote = async (params: NoteType) => {
  const { id, ...body } = params;
  const { data } = await api.put(`${NOTES_URL}/${id}`, body);
  return data;
};

export const deleteNote = async (id: string) => {
  const { data } = await api.delete(`${NOTES_URL}/${id}`);
  return data;
};
