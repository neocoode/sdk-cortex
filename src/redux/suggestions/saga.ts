'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/saga.ts
import { RootState } from '@/store';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import {
  suggestionsFailure,
  suggestionsRequest,
  suggestionsSuccess
} from './slice';
import { ApiServiceServer } from '@/services/apiServiceServer';

const handleSuggestions = function* ({ payload }: any): any {
  const token = yield select((state: RootState) => state.session.token);

  try {
    const api = new ApiServiceServer(token);
    const response = yield call([api, api.getSuggestions], { chatId: payload.chatId, message: payload.message });
    yield put(suggestionsSuccess({
      response: response?.data as string[],
      valid: true,
    }));
    return;
  } catch (err: any) {
    yield put(suggestionsFailure());
    return;
  }
}

export default function* sessionSaga() {
  yield all([
    takeLatest<any>(
      suggestionsRequest.type,
      handleSuggestions
    )
  ]);
}
