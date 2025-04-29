// src/store/rootSaga.ts
import { all } from 'redux-saga/effects';

import profileSaga from '@/redux/profile/saga';
import sendMessageSaga from '@/redux/sendMessage/saga';
import sessionSaga from '@/redux/session/saga';
import suggestionsSaga from '@/redux/suggestions/saga';

export default function* rootSaga() {
  yield all([sessionSaga(), profileSaga(), sendMessageSaga(), suggestionsSaga()]);
}
