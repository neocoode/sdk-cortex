'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/saga.ts
import { ApiCortexServiceServer } from '@/services/apiCortexServiceServer';
import { RootState } from '@/store';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import {
  suggestionsFailure,
  suggestionsRequest,
  suggestionsSuccess
} from './slice';

const handleSuggestions = function* ({ payload }: any): any {
  const token = yield select((state: RootState) => state.session.token);

  try {
    const api = new ApiCortexServiceServer(token);
    const response = yield call([api, api.getSuggestions], payload.chatId, payload.message);
    yield put(suggestionsSuccess({
      response: response as string[],
      valid: true,
    }));
    return;
  } catch (err: any) {
    yield put(suggestionsFailure());
    return;
  }
}


export default function* sessionSaga() {
  yield takeLatest<any>(
    suggestionsRequest.type,
    handleSuggestions
  );
}
