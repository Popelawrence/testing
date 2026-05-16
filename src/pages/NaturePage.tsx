import Container from '../components/common/Container'
import ProductGrid from '../features/catalog/components/ProductGrid'
import { getProductsByCategory } from '../features/catalog/utils/catalogUtils'

export default function NaturePage() {
  const products = getProductsByCategory('Nature')

  return (
    <Container>
      <section className="page-section">
        <h1>Natural plant products</h1>
        <p>
          Natural plant products are the emotional foundation of LeClematis. Expect storytelling,
          botanical details, and visual moments inspired by the outdoors.
        </p>
      </section>

      <section className="featured-products">
        <h2>Natural plant products collection</h2>
        <ProductGrid products={products} />
      </section>
    </Container>
  )
}
