/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SessionState {
  valid: boolean;
  loading: boolean;
  chatId: string | null;
  name: string | null;
}

const initialState: SessionState = {
  valid: false,
  loading: false,
  chatId: null,
  name: null,
};

const sessionSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profileRequest: (state, action: PayloadAction<{ token: string }>) => {
      state.loading = true;
    },
    profileSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.valid = true;
      state.chatId = action.payload.chatId; 
      state.name = action.payload.name;
    },
    profileFailure: (state) => {
      state.loading = false;
      state.valid = false;
    },
  },
});

export const {
  profileRequest,
  profileSuccess,
  profileFailure,
} = sessionSlice.actions;

export default sessionSlice.reducer;
