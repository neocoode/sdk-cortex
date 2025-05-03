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
  name: 'accountRegister',
  initialState,
  reducers: {
    accountRegisterRequest: (state, _action: PayloadAction<{ name: string; mail: string; phone: string; pass: string }>) => {
      state.loading = true;
      state.error = null;
    },
    accountRegisterSuccess: (state) => {
      state.loading = false;
      state.valid = true;
    },
    accountRegisterFailure: (state, action: PayloadAction<{ error: string }>) => {
      state.loading = false;
      state.valid = false;
      state.error = action.payload.error;
    },
  },
});

export const { accountRegisterRequest, accountRegisterSuccess, accountRegisterFailure } = slice.actions;
export default slice.reducer;
