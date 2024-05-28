import { configureStore } from '@reduxjs/toolkit';

import { articlesApi } from 'api/articlesApi';
import { authApi } from 'api/authApi';
import { categoryApi } from 'api/categoryApi';
import { fileUploadApi } from 'api/fileUploadApi';
import { homeAPI } from 'api/homeApi';
import { usersApi } from 'api/usersApi';
import auth from 'redux/authSlice';
import managerMode from 'redux/managerModeSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [fileUploadApi.reducerPath]: fileUploadApi.reducer,
    [articlesApi.reducerPath]: articlesApi.reducer,
    [homeAPI.reducerPath]: homeAPI.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    auth,
    managerMode,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(categoryApi.middleware)
      .concat(fileUploadApi.middleware)
      .concat(articlesApi.middleware)
      .concat(homeAPI.middleware)
      .concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
