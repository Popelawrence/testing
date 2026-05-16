import type { Product } from '../types/catalogTypes'
import mockProducts from '../../../data/mockProducts'

export function getAllProducts(): Product[] {
  return mockProducts
}

export function getFeaturedProducts(): Product[] {
  return mockProducts.slice(0, 4)
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return mockProducts.filter((product) => product.category === category)
}

export function findProductById(productId: string | undefined): Product | undefined {
  if (!productId) return undefined
  return mockProducts.find((product) => product.id === productId)
}
