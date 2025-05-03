// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import chatSelectedReducer from '@/redux/chatSelected/slice';
import configAllReducer from '@/redux/configAll/slice';
import modalsReducer from '@/redux/modals/slice';
import profileReducer from '@/redux/profile/slice';
import sendMessageReducer from '@/redux/sendMessage/slice';
import sessionReducer from '@/redux/session/slice';
import suggestionsReducer from '@/redux/suggestions/slice';
import toastReducer from '@/redux/toast/slice';
import accountAccessReducer from '@/redux/accountAccess/slice';
import accountRegisterReducer from '@/redux/accountRegister/slice';

const rootReducer = combineReducers({
  session: sessionReducer,
  profile: profileReducer,
  sendMessage: sendMessageReducer,
  chatSelected: chatSelectedReducer,
  toast: toastReducer,
  suggestions: suggestionsReducer,
  configAll: configAllReducer,
  modals: modalsReducer,
  accountAccess: accountAccessReducer,
  accountRegister: accountRegisterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['session', 'profile', 'configAll'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
