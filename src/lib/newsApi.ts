import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { INews } from '../models/News';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getNews: builder.query<INews[], void>({
      query: () => 'news',
      transformResponse: (response: any) => response.data || [],
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
