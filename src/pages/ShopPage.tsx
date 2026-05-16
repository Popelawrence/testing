import Container from '../components/common/Container'
import ProductGrid from '../features/catalog/components/ProductGrid'
import { getAllProducts } from '../features/catalog/utils/catalogUtils'

export default function ShopPage() {
  const products = getAllProducts()

  return (
    <Container>
      <section className="page-section">
        <h1>Shop</h1>
        <p>Explore a curated collection of botanicals, vintage finds, and photographic gifts.</p>
      </section>

      <section className="featured-products">
        <h2>Featured collection</h2>
        <ProductGrid products={products} />
      </section>
    </Container>
  )
}
