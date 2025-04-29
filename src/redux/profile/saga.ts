'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/saga.ts
import { ApiService } from '@/services/apiSercice';
import { RootState } from '@/store';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { chatSelectedSet } from '../chatSelected/slice';
import {
  profileFailure,
  profileRequest,
  profileSuccess
} from './slice';

const handleprofile = function* ({ payload }: any): any {
  let token = payload.token;
  if (!token) {
    token = yield select((state: RootState) => state.session.token);
  }

  try {
    const api = new ApiService(token);
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
