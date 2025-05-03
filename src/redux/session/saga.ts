'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/saga.ts
import { ApiServiceServer } from '@/services/apiServiceServer';
import { call, put, takeLatest } from 'redux-saga/effects';
import { profileRequest } from '../profile/slice';
import {
  validateSessionFailure,
  validateSessionRequest,
  validateSessionSuccess
} from './slice';

const handleValidateSession = function* (request: any): any {
  try {
    const { token, dateCheck, SESSION_TIMEOUT_MINUTES } = request.payload;

    try {
      const now = new Date();
      const diffInMinutes = Math.abs((now.getTime() - new Date(dateCheck).getTime()) / 60000);

      if (diffInMinutes <= SESSION_TIMEOUT_MINUTES) {
        const data = {
          valid: true,
          token,
          logged: false,
        }

        return yield put(validateSessionSuccess(data));
      }
    } catch (error: any) {
      return yield put(validateSessionFailure());
    }

    const api = new ApiServiceServer(token);
    const response = yield call([api, api.validateSession], dateCheck, SESSION_TIMEOUT_MINUTES);

    if (!response?.valid) {
      return yield put(validateSessionFailure());
    }

    if (!response.logged) {
      yield put(profileRequest({ token: token, logged: response.logged }));
    }

    yield put(validateSessionSuccess({
      logged: response.logged,
      token: response.token,
      valid: true,
      dateCheck: new Date(),
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
