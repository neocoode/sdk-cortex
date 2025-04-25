/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/saga.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import { ApiService } from '@/services/apiSercice';
import {
  validateSessionRequest,
  validateSessionSuccess,
  validateSessionFailure,
} from './slice';

const handleValidateSession = function* (): any {
  console.log('🔄 Iniciando validação da sessão no saga...');
  try {
    const api = new ApiService(); 
    console.log('📡 Chamando ApiService.validateSession()...');
    const result: { valid: boolean } = yield call([api, api.validateSession]);
    console.log('📥 Resultado da validação:', result);

    if (result.valid !== false) {
      console.log('✅ Sessão válida, buscando perfil do usuário...');
      const profile = yield call([api, api.getUserProfile]);
      console.log('👤 Perfil do usuário obtido:', profile);
      yield put(validateSessionSuccess(profile));
    } else {
      console.log('❌ Sessão inválida');
      yield put(validateSessionFailure());
    }
  } catch (err: any) {
    console.error('💥 Erro ao validar sessão:', err);
    yield put(validateSessionFailure());
  }
}


export default function* sessionSaga() {
  console.log('🚀 Inicializando saga de sessão');
  yield takeLatest(validateSessionRequest.type, handleValidateSession);
}
