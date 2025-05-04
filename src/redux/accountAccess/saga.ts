'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


import { ApiServiceServer } from '@/services/apiServiceServer';
import { RootState } from '@/store';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { validateSessionFailure, validateSessionSuccess } from '../session/slice';
import {
  accountAccessRequest,
  accountAccessFailure,
  accountAccessSuccess
} from './slice';
import { decodeToken } from '@/utils/jwts';
import { redirectRoute } from '../routers/slice';

function* handleAccess(action: ReturnType<typeof accountAccessRequest>): any {
  console.log('[handleAccess] 🔍 Iniciando handleAccess');
  try {
    console.log('[handleAccess] 🔍 Action payload:', action.payload);
    const { mail, pass } = action.payload;
    const sessionState: RootState['session'] = yield select((state: RootState) => state.session);
    const token = sessionState.token;

    const api = new ApiServiceServer(token);
    const response = yield call([api, api.accountAccess], { mail, pass });
    console.log('[handleAccess] 🔍 Resposta da API:', response.data);

    if (response?.data?.token) {
      console.log('[handleAccess] 🔍 Token recebido com sucesso');
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
      console.log('[handleAccess] ❌ Token não recebido');
      yield put(accountAccessFailure({ error: 'mail ou senha inválidos' }));
      return yield put(validateSessionFailure());
    }
  } catch (err: any) {
    console.error('[handleAccess] 💥 Erro ao realizar login:', err);
    yield put(accountAccessFailure({ error: err?.message || 'Erro desconhecido' }));
  }
}

export default function* accountAccessSaga() {
  console.log('[accountAccessSaga] 🚀 Iniciando saga de conta');
  yield takeLatest(accountAccessRequest.type, handleAccess);
}
