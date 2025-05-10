'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


import { ApiServiceServer } from '@/services/apiServiceServer';
import { RootState } from '@/store';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { validateSessionSuccess } from '../session/slice';
import {
  accountRegisterRequest,
  accountRegisterFailure,
  accountRegisterSuccess
} from './slice';
import { redirectRoute } from '../routers/slice';

function* handleRegister(action: ReturnType<typeof accountRegisterRequest>): any {
  try {
    const { name, mail, phone, pass } = action.payload;
    const sessionState: RootState['session'] = yield select((state: RootState) => state.session);
    const token = sessionState.token;

    const api = new ApiServiceServer(token);
    const response = yield call([api, api.accountRegister], { name, mail, phone,  pass });
    
    if (response?.data?.token) {
      yield put(validateSessionSuccess({
        token: response.data.token,
        valid: true,
        logged: true,
        dateCheck: new Date(),
      }));
      yield put(accountRegisterSuccess());
      yield put(redirectRoute({ route: '/chat' }));
    } else {
      yield put(accountRegisterFailure({ error: 'Email ou senha inválidos' }));
    }
  } catch (err: any) {
    yield put(accountRegisterFailure({ error: err?.message || 'Erro desconhecido' }));
  }
}

export default function* accountRegisterSaga() {
  yield all([
    takeLatest(accountRegisterRequest.type, handleRegister)
  ]);
}
