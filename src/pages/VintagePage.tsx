import Container from '../components/common/Container'
import ProductGrid from '../features/catalog/components/ProductGrid'
import { getProductsByCategory } from '../features/catalog/utils/catalogUtils'

export default function VintagePage() {
  const products = getProductsByCategory('Vintage')

  return (
    <Container>
      <section className="page-section">
        <h1>Vintage</h1>
        <p>
          Curated vintage resale and one-of-one finds. The catalog highlights pieces with character,
          craftsmanship, and a sense of story.
        </p>
      </section>

      <section className="featured-products">
        <h2>Vintage collection</h2>
        <ProductGrid products={products} />
      </section>
    </Container>
  )
}
