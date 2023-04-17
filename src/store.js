import { configureStore } from '@reduxjs/toolkit'
import loggedInUserReducer from './slices/loggedInUserSlice'
import parcelsReducer from './slices/parcelsSlice'

export const store = configureStore({
  reducer: {
    loggedIn: loggedInUserReducer,
    parcels: parcelsReducer,
  },
})