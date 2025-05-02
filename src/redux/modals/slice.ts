/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface dataState {
  loading: boolean;
  isVisible: boolean;
  name: string | null;
  content: any;
  error: any| null;
}

const initialState: dataState = {
  loading: false,
  isVisible: false,
  name: null,
  content: null,
  error: null,
};

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ name: string, content: any }>) => {
      state.loading = true;
      state.isVisible = true;
      state.error = null;
      state.name = action.payload.name;
      state.content = action.payload.content;
    },
    closeModal:  (state, action: PayloadAction<{ name: string }>) => {
      state.name = action.payload.name;
    },
    modelOpened: (state) => {
      state.loading = false;
      state.isVisible = true;
    },
    modelCloed: (state) => {
      state.loading = false;
      state.isVisible = false;
      state.name = null;
      state.content = null;
      state.error = null;
    },
    modalFailure: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.isVisible = false;
      state.name = null;
      state.content = null;
      state.error = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  modelOpened,
  modelCloed,
  modalFailure,
} = slice.actions;

export default slice.reducer;
