import { TAGS_URL } from '~/utils/urls';
import { api } from '../api';

export const getTags = async () => {
  const { data } = await api.get(TAGS_URL);

  return data;
};
