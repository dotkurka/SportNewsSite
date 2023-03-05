import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ILoginRequest, ISignUpRequest, IUserResponse } from 'features/auth/types';
import type { RootState } from 'redux/store';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_FETCH_URL}/auth`,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;
      if (token) {
        headers.set('Authentication', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (build) => ({
    logIn: build.mutation<IUserResponse, ILoginRequest>({
      query: (body) => ({
        url: 'sign-in',
        method: 'POST',
        body,
      }),
    }),
    signUp: build.mutation<IUserResponse, ISignUpRequest>({
      query: (body) => ({
        url: 'sign-up',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLogInMutation, useSignUpMutation } = authApi;
