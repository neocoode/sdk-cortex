'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/saga.ts
import { ApiService } from '@/services/apiSercice';
import { call, put, takeLatest } from 'redux-saga/effects';
import { profileRequest } from '../profile/slice';
import {
  validateSessionFailure,
  validateSessionRequest,
  validateSessionSuccess
} from './slice';

const handleValidateSession = function* (request: any): any {
  const { token, dateCheck, SESSION_TIMEOUT_MINUTES } = request.payload;
  console.log('view > session > token', token);

  try {
    console.log('[1] Iniciando validação de sessão...');
    console.log('[2] Token atual:', token ? 'Presente' : 'Ausente');

    const api = new ApiService(token);
    console.log('[4] ApiService inicializado');

    if (!token) {
      console.log('[4] Token não encontrado, iniciando nova sessão...');
      const response = yield call([api, api.startSession]);
      console.log('[5] Resposta startSession:', response);
      
      api.setToken(response.token);
      console.log('[6] Token definido na API');

      console.log('[7] Revalidando sessão após iniciar...');
      const recheck = yield call([api, api.validateSession]);
      console.log('[8] Resposta revalidação:', recheck);

      if (!recheck.valid) {
        console.log('[9] Revalidação falhou');
        return yield put(validateSessionFailure());
      }

      if (!response.logged) {
        console.log('[10] Usuário não logado, solicitando perfil...');
        yield put(profileRequest({ token: response.token, logged: response.logged }));
      }

      console.log('[11] Sessão validada com sucesso');
      yield put(validateSessionSuccess({
        logged: response.logged,
        token: response.token,
        valid: true,
        dateCheck: new Date(),
      }));
      return;
    }
    
    // trecho a baixo quento o token existe
    // Verifica se a sessão ainda é válida
    
    try {
      const now = new Date();
      console.log('[12] Token existente encontrado, verificando tempo de sessão...');
      console.log('[13] DateCheck:', dateCheck ? new Date(dateCheck).toLocaleString('pt-BR') : 'não definido');
    
      const diffInMinutes = Math.abs((now.getTime() - new Date(dateCheck).getTime()) / 60000); // diferença real em minutos
    
      console.log('[13] Tempo desde última verificação:', diffInMinutes.toFixed(2), 'minutos');
    
      if (diffInMinutes <= SESSION_TIMEOUT_MINUTES) {
        console.log(`[14] Sessão ainda válida (menos de ${SESSION_TIMEOUT_MINUTES} minutos)`);
        return yield put(validateSessionSuccess({
          valid: true,
          token,
          logged: false,
        }));
      }
    } catch (error) {
      console.error('[15] Erro na validação de sessão:', error);
      return yield put(validateSessionFailure());
    }
    
    
    console.log('[15] Revalidando sessão existente...');
    const recheck = yield call([api, api.validateSession]);
    console.log('[16] Resposta revalidação:', recheck);

    if (!recheck.valid) {
      console.log('[17] Revalidação falhou');
      return yield put(validateSessionFailure());
    }

    if (!recheck.logged) {
      console.log('[18] Usuário não logado, solicitando perfil...');
      yield put(profileRequest({ token: token, logged: recheck.logged }));
    }

    console.log('[19] Sessão revalidada com sucesso');
    yield put(validateSessionSuccess({
      logged: recheck.logged,
      token: token,
      valid: true,
      dateCheck: new Date(),
    }));
    return;

  } catch (err: any) {
    console.error('[20] Erro na validação de sessão:', err);
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
