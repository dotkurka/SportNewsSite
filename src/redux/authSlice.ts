import { createSlice } from '@reduxjs/toolkit';

import { UserRole } from 'features/auth/enums';
import { removeInLocal, saveInLocal } from 'utils/localStorage';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IUserResponse, IUser } from 'features/auth/types';
import type { RootState } from 'redux/store';

const initialVlues: IUserResponse = {
  user: {
    id: '',
    role: UserRole.User,
    firstName: '',
    lastName: '',
    email: '',
  },
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialVlues,
  reducers: {
    setUser: (state, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    },
    setToken: (state, { payload: { token } }: PayloadAction<{ token: string }>) => {
      state.token = token;
      saveInLocal({ name: 'token', value: token });
    },
    logOut: (state) => {
      state.token = '';
      state.user = initialVlues.user;
      removeInLocal('token');
    },
  },
});

export default authSlice.reducer;

export const { setUser, setToken, logOut } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const selectCurrentToken = (state: RootState) => state.auth.token;
