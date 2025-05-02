// src/store/modules/session/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface dataState {
  valid: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: dataState = {
  valid: false,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    LogIn: (state, _action: PayloadAction<{ email: string; password: string }>) => {
      state.loading = true;
      state.error = null;
    },
    LogInSuccess: (state) => {
      state.loading = false;
      state.valid = true;
    },
    LogInFailure: (state, action: PayloadAction<{ error: string }>) => {
      state.loading = false;
      state.valid = false;
      state.error = action.payload.error;
    },
  },
});

export const { LogIn, LogInSuccess, LogInFailure } = slice.actions;
export default slice.reducer;
