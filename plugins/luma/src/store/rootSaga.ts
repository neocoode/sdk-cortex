// src/store/rootSaga.ts
import { all } from 'redux-saga/effects';
import sessionSaga from '@/modules/session/saga';

export default function* rootSaga() {
  yield all([sessionSaga()]);
}
