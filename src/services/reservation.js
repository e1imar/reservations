import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reservationApi = createApi({
  reducerPath: 'reservationApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Reserve'],
  endpoints: builder => ({
    checkLogin: builder.query({
      query: () => `login`,
      providesTags: ['Reserve'],
    }),
    login: builder.mutation({
      query: (payload) => ({
        url: 'login',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Reserve'],
    }),
    signin: builder.mutation({
      query: (payload) => ({
        url: 'signin',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Reserve'],
    }),
    getReservations: builder.query({
      query: () => ``,
      providesTags: ['Reserve'],
    }),
    deleteRes: builder.mutation({
      query: (payload) => ({
        url: '',
        method: 'DELETE',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Reserve'],
    }),
    getTables: builder.query({
      query: () => `reserve`,
      providesTags: ['Reserve']
    }),
    addRes: builder.mutation({
      query: (payload) => ({
        url: 'reserve',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Reserve'],
    }),
  }),
})

export const { useCheckLoginQuery, useGetReservationsQuery, useGetTablesQuery, useLoginMutation, useSigninMutation,  useAddResMutation, useDeleteResMutation } = reservationApi