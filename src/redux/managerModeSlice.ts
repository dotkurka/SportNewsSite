import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from 'redux/store';

const initialState = {
  managerMode: false,
};

const managerModeSlice = createSlice({
  name: 'managerMod',
  initialState,
  reducers: {
    managerEnabled: (state) => {
      state.managerMode = true;
    },
    managerDisabled: (state) => {
      state.managerMode = false;
    },
  },
});

export default managerModeSlice.reducer;

export const { managerEnabled, managerDisabled } = managerModeSlice.actions;

export const managerMode = (state: RootState) => state.managerMode.managerMode;
