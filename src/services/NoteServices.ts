import { GET_NOTES_URL } from '~/utils/urls';
import { api } from './api';

const getNotes = async (q: string) => {
  const params = { q };
  const { data } = await api.get(GET_NOTES_URL, { params });

  return data;
};

export default {
  getNotes,
};
