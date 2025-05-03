/* eslint-disable @typescript-eslint/no-unused-vars */
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
  name: 'accountAccess',
  initialState,
  reducers: {
    accountAccessRequest: (state, _action: PayloadAction<{ mail: string; pass: string }>) => {
      state.loading = true;
      state.error = null;
    },
    accountAccessSuccess: (state) => {
      state.loading = false;
      state.valid = true;
    },
    accountAccessFailure: (state, action: PayloadAction<{ error: string }>) => {
      state.loading = false;
      state.valid = false;
      state.error = action.payload.error;
    },
  },
});

export const { accountAccessRequest, accountAccessSuccess, accountAccessFailure } = slice.actions;
export default slice.reducer;
