'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


import { ApiServiceServer } from '@/services/apiServiceServer';
import { RootState } from '@/store';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { validateSessionFailure, validateSessionSuccess } from '../session/slice';
import {
  accountAccessRequest,
  accountAccessFailure,
  accountAccessSuccess
} from './slice';
import { decodeToken } from '@/utils/jwts';
import { redirectRoute } from '../routers/slice';

function* handleAccess(action: ReturnType<typeof accountAccessRequest>): any {
  try {
    const { mail, pass } = action.payload;
    const sessionState: RootState['session'] = yield select((state: RootState) => state.session);
    const token = sessionState.token;

    const api = new ApiServiceServer(token);
    const response = yield call([api, api.accountAccess], { mail, pass });

    if (response?.data?.token) {
      const decodedToken = decodeToken(response.data.token);
      yield put(validateSessionSuccess({
        token: response.data.token,
        valid: true,  
        logged: decodedToken?.logged || false,
        dateCheck: new Date(),
        tokenDecode: decodedToken,
      }));
      yield put(accountAccessSuccess());
      yield put(redirectRoute({ route: '/chat' }));
    } else {
      yield put(accountAccessFailure({ error: 'mail ou senha inválidos' }));
      return yield put(validateSessionFailure());
    }
  } catch (err: any) {
    yield put(accountAccessFailure({ error: err?.message || 'Erro desconhecido' }));
  }
}

export default function* accountAccessSaga() {
  yield all([
    takeLatest(accountAccessRequest.type, handleAccess)
  ]);
}
