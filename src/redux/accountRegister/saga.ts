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
import { redirectRoute } from '../routers/slice';

function* handleRegister(action: ReturnType<typeof accountRegisterRequest>): any {
  console.log('[saga:accountRegister] 🔍 handleRegister');

  try {
    console.log('[saga:accountRegister] 🔍 handleRegister', action.payload);
    const { name, mail, phone, pass } = action.payload;
    console.log('[saga:accountRegister] 🔍 handleRegister');
    console.log('[saga:accountRegister] 🔍 Nome:', name);
    console.log('[saga:accountRegister] 🔍 Email:', mail);
    console.log('[saga:accountRegister] 🔍 Telefone:', phone);
    console.log('[saga:accountRegister] 🔍 Senha:', pass);

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
    console.error('💥 Erro ao realizar login:', err);
    yield put(accountRegisterFailure({ error: err?.message || 'Erro desconhecido' }));
  }
}

export default function* accountRegisterSaga() {
  console.log('🚀 Iniciando saga de conta');
  yield takeLatest(accountRegisterRequest.type, handleRegister);
}
