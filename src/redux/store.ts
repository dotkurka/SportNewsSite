import { configureStore } from '@reduxjs/toolkit';

import { articleApi } from 'api/articleApi';
import { authApi } from 'api/authApi';
import auth from 'redux/authSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [articleApi.reducerPath]: articleApi.reducer,
    auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(articleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
