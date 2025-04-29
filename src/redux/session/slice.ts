/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SessionState {
  valid: boolean;
  loading: boolean;
  userId: string | null;
  token: string | null;
  chatId: string | null;
}

const initialState: SessionState = {
  valid: false,
  loading: false,
  userId: '67cfa19fbca330b02331873d',
  token: null,
  chatId: null,
};

const slice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    validateSessionRequest: (state) => {
      state.loading = true;
    },
    validateSessionSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.valid = true;
      
      if (action.payload.userId) {
        state.userId = action.payload.userId;
      }

      if (action.payload.token) {
        state.token = action.payload.token;
      }
    },
    validateSessionFailure: (state) => {
      state.loading = false;
      state.valid = false;
    },
  },
});

export const {
  validateSessionRequest,
  validateSessionSuccess,
  validateSessionFailure,
} = slice.actions;

export default slice.reducer;
