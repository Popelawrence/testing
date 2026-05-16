import Container from '../components/common/Container'
import ProductGrid from '../features/catalog/components/ProductGrid'
import { getProductsByCategory } from '../features/catalog/utils/catalogUtils'

export default function PhotographyPage() {
  const products = getProductsByCategory('Photography')

  return (
    <Container>
      <section className="page-section">
        <h1>Photography</h1>
        <p>
          A photography portfolio for woven visual stories, prints, and creative session offerings. The
          gallery experience is coming soon.
        </p>
      </section>

      <section className="featured-products">
        <h2>Photography collection</h2>
        <ProductGrid products={products} />
      </section>
    </Container>
  )
}
