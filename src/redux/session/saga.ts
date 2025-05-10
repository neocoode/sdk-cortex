'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ApiServiceServer } from '@/services/apiServiceServer';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { profileLogout, profileRequest } from '../accountProfile/slice';
import {
  forceLogout,
  validateSessionFailure,
  validateSessionRequest,
  validateSessionSuccess
} from './slice';
import { decodeToken } from '@/utils/jwts';
import { redirectRoute } from '../routers/slice';

const handleValidateSession = function* (request: any): any {
  try {
    const { token, dateCheck, SESSION_TIMEOUT_MINUTES } = request.payload;

    // try {
    //   const now = new Date();
    //   const diffInMinutes = Math.abs((now.getTime() - new Date(dateCheck).getTime()) / 60000);

    //   if (diffInMinutes <= SESSION_TIMEOUT_MINUTES) {
    //     const data = {
    //       valid: true,
    //       token,
    //       logged: false,
    //     }

    //     return yield put(validateSessionSuccess(data));
    //   }
    // } catch (error: any) {
    //   return yield put(validateSessionFailure());
    // }

    const api = new ApiServiceServer(token);
    const response = yield call([api, api.validateSession], dateCheck,);
    if (response?.status == 429) {
      yield put(redirectRoute({ route: '/splash' }));
      return yield put(validateSessionFailure());
    }

    if (!response?.data?.valid) {
      yield put(redirectRoute({ route: '/splash' }));
      return yield put(validateSessionFailure());
    }

    const tokenDecode = decodeToken(response.data.token);
    if (tokenDecode.logged) {
      yield put(profileRequest({ token: token, logged: response.data.logged }));
    }

    yield put(validateSessionSuccess({
      token: response.data.token,
      valid: true,
      dateCheck: new Date(),
      logged: tokenDecode?.logged,
      tokenDecode,
    }));
    
    return;
  } catch (err: any) {
    yield put(validateSessionFailure());
    return false;
  }
}

const handleForceLogout = function* (): any {
  yield put(profileLogout());
}

export default function* sessionSaga() {
  yield all([
    takeLatest(validateSessionRequest.type, handleValidateSession),
    takeLatest(forceLogout.type, handleForceLogout)
  ]);
}
