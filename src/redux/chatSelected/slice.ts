/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/slice.ts
import { CoreMessageResponse } from '@/interface/chats';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SessionState {
  valid: boolean;
  loading: boolean;
  chatId: string | null;
  messages: CoreMessageResponse[];
}

const initialState: SessionState = {
  valid: false,
  loading: false,
  chatId: null,
  messages: [],
};

const slice = createSlice({
  name: 'chatSelected',
  initialState,
  reducers: {
    chatSelectedSet: (state, action: PayloadAction<{ chatId: string }>) => {
      state.loading = true;
      state.chatId = action.payload.chatId;
    },
    chatSelectedMessage: (state, action: PayloadAction<{ message: CoreMessageResponse }>) => {
      state.messages = [];
      state.messages.push(action.payload.message);
    },
    chatSelectedMessageAdd: (state, action: PayloadAction<{ message: CoreMessageResponse }>) => {
      const newMessages = [...state.messages || []];
      newMessages.push(action.payload.message);
      state.messages = newMessages;
    },
    chatSelectedMessageClear: (state) => {
      state.messages = [];
    },
  },
});

export const {
  chatSelectedSet,
  chatSelectedMessage,
  chatSelectedMessageAdd,
  chatSelectedMessageClear,
} = slice.actions;

export default slice.reducer;
