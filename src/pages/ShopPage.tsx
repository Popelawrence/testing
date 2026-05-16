import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import Container from '../components/common/Container'
import ProductGrid from '../features/catalog/components/ProductGrid'
import { getAllProducts, getProductsByCategory } from '../features/catalog/utils/catalogUtils'
import type { Product } from '../features/catalog/types/catalogTypes'

const validCategories: Product['category'][] = ['Nature', 'Vintage', 'Photography']

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') as Product['category'] | null

  const products = useMemo(() => {
    return category && validCategories.includes(category)
      ? getProductsByCategory(category)
      : getAllProducts()
  }, [category])

  const heading = category && validCategories.includes(category) ? `${category} collection` : 'Featured collection'
  const intro = category && validCategories.includes(category)
    ? `Showing shop items for ${category}.`
    : 'Explore a curated collection of botanicals, vintage finds, and photographic gifts.'

  return (
    <Container>
      <section className="page-section">
        <h1>Shop</h1>
        <p>{intro}</p>
      </section>

      <section className="featured-products">
        <h2>{heading}</h2>
        <ProductGrid products={products} />
      </section>
    </Container>
  )
}
