'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/saga.ts
import { ApiCortexServiceServer } from '@/services/apiCortexServiceServer';
import { RootState } from '@/store';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { CoreMessageResponse } from '@/interface/chats';
import { chatSelectedMessageAdd } from '../chatSelected/slice';
import {
  sendMessageFailure,
  sendMessageRequest,
  sendMessageSuccess
} from './slice';
import { ApiServiceServer } from '@/services/apiServiceServer';

const handlesendMessage = function* ({ payload }: any): any {
  const token = yield select((state: RootState) => state.session.token);

  try {
    const api = new ApiServiceServer(token);
    const response = yield call([api, api.sendMessage],  payload);
    console.log('[1/2][sendMessage route]: Resposta da API Cortex:', { status: response.status, data: response.data });
    yield put(chatSelectedMessageAdd({ message: response?.data as CoreMessageResponse }));
    yield put(sendMessageSuccess({
      response: response?.data,
      valid: true,
    }));
    return;
  } catch (err: any) {
    yield put(sendMessageFailure());
    return;
  }
}


export default function* sessionSaga() {
  yield all([
    takeLatest<any>(
      sendMessageRequest.type,
      handlesendMessage
    )
  ]);
}
