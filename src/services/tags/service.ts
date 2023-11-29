import axios from 'axios';
import { NoteType, TagType } from '~/types/note';
import { TAGS_URL } from '~/utils/urls';
import { api } from '../api';
import { getNotes, updateNote } from '../note/service';

export const getTags = async () => {
  const { data } = await api.get(TAGS_URL);

  return data;
};

export const createTag = async (params: TagType) => {
  const { data } = await api.post(TAGS_URL, params);
  return data;
};

export const deleteTag = async (id: string | number) => {
  const notes = await getNotes('', { id, label: '', value: '' });
  axios.all(notes.map((note: NoteType) => updateNote({ ...note, tag: null })));

  const { data } = await api.delete(`${TAGS_URL}/${id}`);
  return data;
};
