import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TagType } from '~/types/note';

export interface FilterState {
  search: string;
  tag: TagType | null;
}

const initialState: FilterState = {
  search: '',
  tag: null,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setTag: (state, action: PayloadAction<TagType | null>) => {
      state.tag = action.payload;
    },
  },
});

export const { setSearch, setTag } = filterSlice.actions;

export default filterSlice.reducer;
