import { createSlice } from '@reduxjs/toolkit';

import { saveInLocal } from 'utils/saveTokenInLocal';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IUserResponse, IUser } from 'features/auth/types';
import type { RootState } from 'redux/store';

const initial: IUserResponse = {
  user: {
    firstName: '',
    lastName: '',
  },
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initial,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: IUser; token: string }>,
    ) => {
      state.user = user;
      state.token = token;
      saveInLocal({ name: 'token', value: token });
    },
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const selectCurrentToken = (state: RootState) => state.auth.token;
