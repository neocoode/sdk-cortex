/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SessionState {
  valid: boolean;
  loading: boolean;
  id: string | null;
  chatId: string | null;
  name: string | null;
  email: string | null;
  avatar: string | null;
}

const initialState: SessionState = {
  valid: false,
  loading: false,
  id: null,
  chatId: null,
  name: null,
  email: null,
  avatar: null,
};

const sessionSlice = createSlice({
  name: 'accountProfile',
  initialState,
  reducers: {
    profileRequest: (state, _action: PayloadAction<{ token: string, logged: boolean }>) => {
      state.loading = true;
    },
    profileSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.valid = true;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.chatId = action.payload.chatId; 
    },
    profileFailure: (state) => {
      state.loading = false;
      state.valid = false;
    },
    profileLogout: (state) => {
      state.loading = false;
      state.valid = false;
      state.id = null;
      state.name = null;
      state.email = null;
    },
  },
});

export const {
  profileRequest,
  profileSuccess,
  profileFailure,
  profileLogout,
} = sessionSlice.actions;

export default sessionSlice.reducer;
