import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reservationApi = createApi({
  reducerPath: 'reservationApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({
    getReservations: builder.query({
      query: () => ``,
    }),
    getTables: builder.query({
      query: () => `reserve`,
    }),
  }),
})

export const { useGetReservationsQuery, useGetTablesQuery } = reservationApi