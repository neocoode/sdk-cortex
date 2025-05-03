'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


import { ApiServiceServer } from '@/services/apiServiceServer';
import { RootState } from '@/store';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { validateSessionSuccess } from '../session/slice';
import {
  accountAccessRequest, 
  accountAccessFailure,
  accountAccessSuccess
} from './slice';

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

function* handleLogIn(action: ReturnType<typeof accountAccessRequest>): any {
  try {
    console.log('🔍 >>>>>>>>>>>>>>>>>>>>>>>> action');
    const { mail, pass } = action.payload;
    const sessionState: RootState['session'] = yield select((state: RootState) => state.session);
    const token = sessionState.token;

    const api = new ApiServiceServer(token);
    console.log('🔍 >>>>>>>>>>>>>>>>>>>>>>>> api');
    const response = yield call([api, api.accountAccess], mail, pass);
    console.log('🔍 >>>>>>>>>>>>>>>>>>>>>>>> response');
    
    if (response?.token) {
      yield put(validateSessionSuccess({
        logged: true,
        token: response.token,
        valid: true,
        dateCheck: new Date(),
      }));
      yield put(accountAccessSuccess());
    } else {
      console.log('❌ Login falhou - resposta incompleta');
      yield put(accountAccessFailure({ error: 'mail ou senha inválidos' }));
    }
  } catch (err: any) {
    console.error('💥 Erro ao realizar login:', err);
    yield put(accountAccessFailure({ error: err?.message || 'Erro desconhecido' }));
  }
}

export default function* accountSaga() {
  console.log('🚀 Iniciando saga de conta');
  yield takeLatest(accountAccessRequest.type, handleLogIn);
}
