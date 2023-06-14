import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reservationApi = createApi({
  reducerPath: 'reservationApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Reserve'],
  endpoints: builder => ({
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
      query: () => `Reserve`,
      providesTags: ['Reserve']
    }),
    addRes: builder.mutation({
      query: (payload) => ({
        url: 'Reserve',
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

export const { useGetReservationsQuery, useGetTablesQuery, useAddResMutation, useDeleteResMutation } = reservationApi