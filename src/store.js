import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { reservationApi } from './services/reservation'

export const store = configureStore({
  reducer: {
    [reservationApi.reducerPath]: reservationApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reservationApi.middleware),
})

setupListeners(store.dispatch)