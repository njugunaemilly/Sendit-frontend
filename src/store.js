import { configureStore } from '@reduxjs/toolkit'
import loggedInUserReducer from './slices/loggedInUserSlice'
import parcelsReducer from './slices/parcelsSlice'
import messagesReducer from './slices/messagesSlice'

export const store = configureStore({
  reducer: {
    loggedIn: loggedInUserReducer,
    parcels: parcelsReducer,
    messages: messagesReducer,
  },
})