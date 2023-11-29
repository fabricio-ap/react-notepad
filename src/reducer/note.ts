import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NoteType } from '~/types/note';

export interface NoteState {
  isEditing: boolean;
  isNew: boolean;
  note: NoteType;
}

const initialState: NoteState = {
  isEditing: false,
  isNew: true,
  note: {
    id: '',
    title: '',
    content: '',
    tag: null,
  },
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,

  reducers: {
    setNote: (state, action: PayloadAction<NoteType | undefined>) => {
      state.isEditing = true;
      state.isNew = !action.payload;
      state.note = action.payload || initialState.note;
    },
    setInitialState: (state, action: PayloadAction) => {
      state.isEditing = false;
      state.isNew = initialState.isNew;
      state.note = initialState.note;
    },
    setNoteContent: (state, action: PayloadAction<NoteType>) => {
      state.note = action.payload;
    },
  },
});

export const { setNote, setInitialState, setNoteContent } = noteSlice.actions;

export default noteSlice.reducer;
