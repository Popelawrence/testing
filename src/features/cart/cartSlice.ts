import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { CartItem } from './cartTypes'
import type { Product } from '../catalog/types/catalogTypes'

export type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add a product to cart or increment its quantity
    addToCart(state, action: PayloadAction<Product>) {
      if (action.payload.sold) {
        return
      }

      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (existingItem) {
        existingItem.quantity += 1
        return
      }

      state.items.push({ ...action.payload, quantity: 1 })
    },
    // Remove a cart entry by product id
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    // Ensure quantities stay at least 1
    updateQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>,
    ) {
      const item = state.items.find((it) => it.id === action.payload.id)
      if (!item) {
        return
      }
      item.quantity = Math.max(1, action.payload.quantity)
    },
    // Empty the cart
    clearCart(state) {
      state.items = []
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
