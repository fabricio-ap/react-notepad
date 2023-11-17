import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NoteType } from '~/types/note';

export interface NoteState {
  isOpenEdit: boolean;
  note: NoteType;
}

const initialState: NoteState = {
  isOpenEdit: false,
  note: {
    id: '',
    title: '',
    content: '',
  },
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,

  reducers: {
    setNote: (state, action: PayloadAction<NoteType>) => {
      state.isOpenEdit = true;
      state.note = { ...action.payload };
    },
    resetNote: (state, action: PayloadAction) => {
      state.isOpenEdit = initialState.isOpenEdit;
      state.note = initialState.note;
    },
  },
});

export const { setNote, resetNote } = noteSlice.actions;

export default noteSlice.reducer;
