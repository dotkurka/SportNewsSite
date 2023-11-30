import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { IFileRequest, IFileResponse } from 'features/fileUpload/types';
import type { RootState } from 'redux/store';

export const fileUploadApi = createApi({
  reducerPath: 'fileUpload',
  tagTypes: ['File'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_FETCH_URL}/uploads`,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    fileUpload: build.mutation<IFileResponse, FormData | IFileRequest>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
      transformResponse: (result: IFileResponse) => {
        return result;
      },
    }),
  }),
});

export const { useFileUploadMutation } = fileUploadApi;
