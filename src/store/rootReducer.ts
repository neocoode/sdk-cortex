// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

import chatSelectedReducer from '@/redux/chatSelected/slice';
import configAllReducer from '@/redux/configAll/slice';
import profileReducer from '@/redux/profile/slice';
import sendMessageReducer from '@/redux/sendMessage/slice';
import sessionReducer from '@/redux/session/slice';
import suggestionsReducer from '@/redux/suggestions/slice';
import toastReducer from '@/redux/toast/slice';

export const rootReducer = combineReducers({
  session: sessionReducer,
  profile: profileReducer,
  sendMessage: sendMessageReducer,
  chatSelected: chatSelectedReducer,
  toast: toastReducer,
  suggestions: suggestionsReducer,
  configAll: configAllReducer,
});
