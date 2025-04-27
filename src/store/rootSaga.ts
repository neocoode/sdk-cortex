// src/store/rootSaga.ts
import { all } from 'redux-saga/effects';

import profileSaga from '@/modules/profile/saga';
import sendMessageSaga from '@/modules/sendMessage/saga';
import sessionSaga from '@/modules/session/saga';

export default function* rootSaga() {
  yield all([sessionSaga(), profileSaga(), sendMessageSaga()]);
}
