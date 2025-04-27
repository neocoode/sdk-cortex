// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

import chatSelectedReducer from '@/modules/chatSelected/slice';
import profileReducer from '@/modules/profile/slice';
import sendMessageReducer from '@/modules/sendMessage/slice';
import sessionReducer from '@/modules/session/slice';
import toastReducer from '@/modules/toast/slice';

export const rootReducer = combineReducers({
  session: sessionReducer,
  profile: profileReducer,
  sendMessage: sendMessageReducer,
  chatSelected: chatSelectedReducer,
  toast: toastReducer,
});
