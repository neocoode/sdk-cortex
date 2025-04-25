'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/saga.ts
import { ApiService } from '@/services/apiSercice';
import { RootState } from '@/store';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import { CoreMessageResponse } from '@/interface/chats';
import { chatSelectedMessageAdd } from '../chatSelected/slice';
import {
  sendMessageFailure,
  sendMessageRequest,
  sendMessageSuccess
} from './slice';

const handlesendMessage = function* ({ payload }: any): any {
  const token = yield select((state: RootState) => state.session.token);

  try {
    const api = new ApiService(token);
    const response = yield call([api, api.sendMessage], payload.chatId, payload.message);
    yield put(chatSelectedMessageAdd({ message: response as CoreMessageResponse }));
    yield put(sendMessageSuccess({
      response: response,
      valid: true,
    }));
    return;
  } catch (err: any) {
    yield put(sendMessageFailure());
    return;
  }
}


export default function* sessionSaga() {
  yield takeLatest<any>(
    sendMessageRequest.type,
    handlesendMessage
  );
}
