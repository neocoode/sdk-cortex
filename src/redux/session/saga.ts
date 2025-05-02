'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/saga.ts
import { ApiService } from '@/services/apiSercice';
import { call, put, takeLatest } from 'redux-saga/effects';
import { profileRequest } from '../profile/slice';
import {
  validateSessionFailure,
  validateSessionRequest,
  validateSessionSuccess
} from './slice';

const handleValidateSession = function* ({ token }: { token: string }): any {
  try {
    const api = new ApiService(token);

    if (!token) {
      const response = yield call([api, api.startSession]);
      api.setToken(response.token);

      // Revalida a sessão após iniciar      
      const recheck = yield call([api, api.validateSession]);
      if (!recheck.valid) {
        return yield put(validateSessionFailure());
      }

      yield put(profileRequest({ token: response.token }));
      yield put(validateSessionSuccess({
        token: response.token,
        valid: true,
      }));
      return;
    }

    // Revalida a sessão após iniciar      
    const recheck = yield call([api, api.validateSession]);
    if (!recheck.valid) {
      return yield put(validateSessionFailure());
    }

    yield put(profileRequest({ token: token }));
    yield put(validateSessionSuccess({
      valid: true,
    }));
    return;

  } catch (err: any) {
    yield put(validateSessionFailure());
    return false;
  }
}

export default function* sessionSaga() {
  yield takeLatest<any>(
    validateSessionRequest.type,
    handleValidateSession
  );
}
