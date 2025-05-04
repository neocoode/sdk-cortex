/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/session/slice.ts
import { ITokenPayload } from '@/utils/jwts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SessionState {
  valid: boolean;
  loading: boolean;
  token?: string | null;
  chatId?: string | null;
  logged?: boolean;
  tokenDecode?: ITokenPayload | null;
  dateCheck?: Date | null;
}

const initialState: SessionState = {
  // userId: '67cfa19fbca330b02331873d',
  valid: false,
  loading: false,
};

const slice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    validateSessionRequest: (state, action: PayloadAction<{ token: string | null, dateCheck: Date }>) => {
      console.log('>>>>> validateSessionRequest', action.payload);
      state.loading = true;
    },
    validateSessionSuccess: (state, action: PayloadAction<any>) => {
      console.log('>>>>> validateSessionSuccess', action.payload);
      state.loading = false;
      state.valid = true;
      state.logged = action.payload.logged;
      
      if (action.payload.dateCheck) {
        state.dateCheck = action.payload.dateCheck;
      }

      if (action.payload.token) {
        state.token = action.payload.token;
      }

      if (action.payload.tokenDecode) {
        state.tokenDecode = action.payload.tokenDecode;
      }
    },
    validateSessionFailure: (state) => {
      console.log('>>>>> validateSessionFailure');
      state.loading = false;
      state.valid = false;
    },

    forceLogout: (state) => {
      state.loading = false;
      state.valid = false;
      state.token = undefined;
      state.tokenDecode = undefined;
      state.dateCheck = undefined;
      state.logged = false;
    },
  },
});

export const {
  validateSessionRequest,
  validateSessionSuccess,
  validateSessionFailure,
  forceLogout,
} = slice.actions;

export default slice.reducer;
