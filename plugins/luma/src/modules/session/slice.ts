/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SessionState {
  valid: boolean;
  loading: boolean;
  user: any; // tipar melhor depois
}

const initialState: SessionState = {
  valid: false,
  loading: false,
  user: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    validateSessionRequest: (state) => {
      console.log('🔄 Iniciando validação da sessão...');
      state.loading = true;
    },
    validateSessionSuccess: (state, action: PayloadAction<any>) => {
      console.log('✅ Sessão validada com sucesso:', action.payload);
      state.loading = false;
      state.valid = true;
      state.user = action.payload;
    },
    validateSessionFailure: (state) => {
      console.log('❌ Falha na validação da sessão');
      state.loading = false;
      state.valid = false;
    },
  },
});

export const {
  validateSessionRequest,
  validateSessionSuccess,
  validateSessionFailure,
} = sessionSlice.actions;

export default sessionSlice.reducer;
