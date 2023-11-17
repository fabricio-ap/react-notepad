import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '~/reducer/filter';
import noteReducer from '~/reducer/note';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    edit: noteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
