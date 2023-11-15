import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  search: string;
}

const initialState: FilterState = {
  search: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      console.log({ state, action });
      state.search = action.payload;
    },
  },
});

export const { setSearch } = filterSlice.actions;

export default filterSlice.reducer;
