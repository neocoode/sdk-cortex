'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


import { ApiServiceServer } from '@/services/apiServiceServer';
import { RootState } from '@/store';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { validateSessionSuccess } from '../session/slice';
import {
  LogIn,
  LogInFailure,
  LogInSuccess
} from './slice';

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

function* handleLogIn(action: ReturnType<typeof LogIn>): any {
  try {
    const { email, password } = action.payload;
    const sessionState: RootState['session'] = yield select((state: RootState) => state.session);
    const token = sessionState.token;

    const api = new ApiServiceServer(token);
    const response = yield call([api, api.accountAccess], email, password);
    
    if (response?.token) {
      yield put(validateSessionSuccess({
        logged: true,
        token: response.token,
        valid: true,
        dateCheck: new Date(),
      }));
      yield put(LogInSuccess());
    } else {
      console.log('❌ Login falhou - resposta incompleta');
      yield put(LogInFailure({ error: 'Email ou senha inválidos' }));
    }
  } catch (err: any) {
    console.error('💥 Erro ao realizar login:', err);
    yield put(LogInFailure({ error: err?.message || 'Erro desconhecido' }));
  }
}

export default function* accountSaga() {
  console.log('🚀 Iniciando saga de conta');
  yield takeLatest(LogIn.type, handleLogIn);
}
