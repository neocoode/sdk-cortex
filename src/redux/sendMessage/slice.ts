/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/slice.ts
import { CoreMessageResponse } from '@/interface/chats';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SessionState {
  valid: boolean;
  loading: boolean;
  response: CoreMessageResponse | null;
}

const initialState: SessionState = {
  valid: false,
  loading: false,
  response: null,
};

const slice = createSlice({
  name: 'sendMessage',
  initialState,
  reducers: {
    sendMessageRequest: (state, action: PayloadAction<{ chatId: string, message: string }>) => {
      state.loading = true;
    },
    sendMessageSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.valid = true;
      state.response = action.payload.response;
    },
    sendMessageFailure: (state) => {
      state.loading = false;
      state.valid = false;
    },
  },
});

export const {
  sendMessageRequest,
  sendMessageSuccess,
  sendMessageFailure,
} = slice.actions;

export default slice.reducer;
