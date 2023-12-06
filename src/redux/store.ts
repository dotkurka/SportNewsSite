import { configureStore } from '@reduxjs/toolkit';

import { articlesApi } from 'api/articlesApi';
import { authApi } from 'api/authApi';
import { categoryApi } from 'api/categoryApi';
import { fileUploadApi } from 'api/fileUploadApi';
import auth from 'redux/authSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [fileUploadApi.reducerPath]: fileUploadApi.reducer,
    [articlesApi.reducerPath]: articlesApi.reducer,
    auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(categoryApi.middleware)
      .concat(fileUploadApi.middleware)
      .concat(articlesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
