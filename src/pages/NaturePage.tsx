import Container from '../components/common/Container'
import ProductGrid from '../features/catalog/components/ProductGrid'
import { getProductsByCategory } from '../features/catalog/utils/catalogUtils'

export default function NaturePage() {
  const products = getProductsByCategory('Nature')

  return (
    <Container>
      <section className="page-section">
        <h1>Nature</h1>
        <p>
          Nature is the emotional foundation of LeClematis. Expect storytelling, botanical details, and
          visual moments inspired by the outdoors.
        </p>
      </section>

      <section className="featured-products">
        <h2>Nature collection</h2>
        <ProductGrid products={products} />
      </section>
    </Container>
  )
}
