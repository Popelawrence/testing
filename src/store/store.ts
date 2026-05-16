import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'

// Create the Redux store and register reducers here
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
