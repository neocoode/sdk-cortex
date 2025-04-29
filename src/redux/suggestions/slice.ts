/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface dataState {
  valid: boolean;
  loading: boolean;
  response: string[];
}

const initialState: dataState = {
  valid: false,
  loading: false,
  response: [],
};

const slice = createSlice({
  name: 'suggestions',
  initialState,
  reducers: {
    suggestionsRequest: (state, action: PayloadAction<{ chatId: string, message: string }>) => {
      state.loading = true;
    },
    suggestionsSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.valid = true;
      state.response = action.payload.response;
    },
    suggestionsFailure: (state) => {
      state.loading = false;
      state.valid = false;
    },
  },
});

export const {
  suggestionsRequest,
  suggestionsSuccess,
  suggestionsFailure,
} = slice.actions;

export default slice.reducer;
