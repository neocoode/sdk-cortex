'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


import { ApiServiceServer } from '@/services/apiServiceServer';
import { RootState } from '@/store';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { validateSessionSuccess } from '../session/slice';
import {
  accountRegisterRequest,
  accountRegisterFailure,
  accountRegisterSuccess
} from './slice';

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

function* handleLogIn(action: ReturnType<typeof accountRegisterRequest>): any {
  try {
    console.log('🔍 >>>>>>>>>>>>>>>>>>>>>>>> action');
    const { name, mail, phone, pass } = action.payload;
    const sessionState: RootState['session'] = yield select((state: RootState) => state.session);
    const token = sessionState.token;

    const api = new ApiServiceServer(token);
    console.log('🔍 >>>>>>>>>>>>>>>>>>>>>>>> api');
    const response = yield call([api, api.accountRegister], name, mail, phone, pass);
    console.log('🔍 >>>>>>>>>>>>>>>>>>>>>>>> response');
    
    if (response?.token) {
      yield put(validateSessionSuccess({
        logged: true,
        token: response.token,
        valid: true,
        dateCheck: new Date(),
      }));
      yield put(accountRegisterSuccess());
    } else {
      console.log('❌ Login falhou - resposta incompleta');
      yield put(accountRegisterFailure({ error: 'Email ou senha inválidos' }));
    }
  } catch (err: any) {
    console.error('💥 Erro ao realizar login:', err);
    yield put(accountRegisterFailure({ error: err?.message || 'Erro desconhecido' }));
  }
}

export default function* accountSaga() {
  console.log('🚀 Iniciando saga de conta');
  yield takeLatest(accountRegisterRequest.type, handleLogIn);
}
