import { configureStore } from '@reduxjs/toolkit'
import loggedInUserReducer from './slices/loggedInUserSlice'

export const store = configureStore({
  reducer: {
    loggedIn: loggedInUserReducer,
  },
})