// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import sessionReducer from '@/modules/session/slice';

export const rootReducer = combineReducers({
  session: sessionReducer,
});
