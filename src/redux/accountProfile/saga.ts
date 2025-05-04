'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/saga.ts
import { ApiCortexServiceServer } from '@/services/apiCortexServiceServer';
import { RootState } from '@/store';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { chatSelectedSet } from '../chatSelected/slice';
import {
  profileFailure,
  profileRequest,
  profileSuccess
} from './slice';
import { ApiServiceServer } from '@/services/apiServiceServer';

const handleprofile = function* ({ payload }: any): any {
  
  try {
    let token = payload.token;
    let logged = payload.logged;

    if (!token) {
      const sessionState = yield select((state: RootState) => state.session);
      token = sessionState.token;
      logged = sessionState.logged;
    }

    if (!logged) {
      yield put(profileSuccess({
        chatId: null,
        name: null,
        valid: false,
      }));
      return;
    }

    const api = new ApiServiceServer(token);
    const response = yield call([api, api.getUserProfile]);
    const data = response?.data;
    
    yield put(chatSelectedSet({ chatId: data?.chatId }));
    yield put(profileSuccess({
      chatId: data?.chatId,
      name: data?.name,
      valid: true,
    }));
    return;
  } catch (err: any) {
    console.error('💥 Erro ao validar sessão:', err);
    yield put(profileFailure());
    return;
  }
}


export default function* sessionSaga() {
  yield takeLatest<any>(
    profileRequest.type,
    handleprofile
  );
}
