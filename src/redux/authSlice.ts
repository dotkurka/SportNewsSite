import { createSlice } from '@reduxjs/toolkit';

import { removeInLocal, saveInLocal } from 'utils/saveTokenInLocal';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IUserResponse, IUser } from 'features/auth/types';
import type { RootState } from 'redux/store';

const initial: IUserResponse = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
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
    setToken: (state, { payload: { token } }: PayloadAction<{ token: string }>) => {
      state.token = token;
    },
    logOut: (state) => {
      state.token = '';
      state.user = initial.user;
      removeInLocal('token');
    },
  },
});

export default authSlice.reducer;

export const { setCredentials, setToken, logOut } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const selectCurrentToken = (state: RootState) => state.auth.token;
