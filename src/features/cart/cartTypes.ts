import type { Product } from '../catalog/types/catalogTypes'

export type CartItem = Product & {
  quantity: number
}
