/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RoutersState {
  route: string;
  loading: boolean;
}

const initialState: RoutersState = {
  route: '',
  loading: false,
};

const slice = createSlice({
  name: 'routers',
  initialState,
  reducers: {
    redirectRoute: (state, action: PayloadAction<{ route: string }>) => {
      state.route = action.payload.route;
      state.loading = true;
    },
    setRouteSuccess: (state) => {
      state.loading = false;
    },
  },
});

export const { redirectRoute, setRouteSuccess } = slice.actions;

export default slice.reducer;
