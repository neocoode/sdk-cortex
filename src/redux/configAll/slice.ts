/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/modules/configAll/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IConfigAllField, IConfigAllState } from './configAll.interface';

const nameState = 'configAll'
const stateInitial: IConfigAllState = {
  fields: {
    plan: 'bDVDyIOyqFH0B05KBrkikZgJhk',
    planName: 'PLUS',
  },  
};

const configAllSlice = createSlice({
  name: nameState,
  initialState: stateInitial,
  reducers: {
    configNameSet: (state: IConfigAllState, action: PayloadAction<{ name: string, value: IConfigAllField }>) => {
      if (action.payload) {
        const updatedFields = { ...state.fields };      
        updatedFields[action.payload.name] = action.payload.value;
        state.fields = updatedFields;
      }
    },
    configAllRemoveName: (state, action: PayloadAction<{ name: string }>) => {
      if (action.payload) {
        const updatedFields = { ...state.fields };      
        delete updatedFields[action.payload.name];
        state.fields = updatedFields;
      }
    },
    configAllClearAll: (state) => {
      state.fields = {};
    },
  },
});

export const {
  configNameSet,
  configAllRemoveName,
  configAllClearAll,
} = configAllSlice.actions;

export default configAllSlice.reducer;
