import { useParams } from 'react-router-dom'
import Container from '../components/common/Container'
import { findProductById } from '../features/catalog/utils/catalogUtils'
import formatCurrency from '../utils/formatCurrency'
import { useAppDispatch } from '../store/hooks'
import { addToCart } from '../features/cart/cartSlice'
import Button from '../components/common/Button'

export default function ProductDetailsPage() {
  const { productId } = useParams<{ productId: string }>()
  const product = findProductById(productId)
  const dispatch = useAppDispatch()

  if (!product) {
    return (
      <Container>
        <section className="page-section">
          <h1>Product not found</h1>
          <p>The item you requested could not be found. Please return to the shop and choose another piece.</p>
        </section>
      </Container>
    )
  }

  return (
    <Container>
      <section className="product-details">
        <div className="details-grid">
          <div className="details-image" style={{ backgroundImage: `url(${product.image})` }} />
          <div>
            <span className="details-category">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="details-price">{formatCurrency(product.price)}</p>
            <p>{product.description}</p>
            <Button
              variant="primary"
              type="button"
              onClick={() => dispatch(addToCart(product))}
              disabled={product.sold}
            >
              {product.sold ? 'Sold out' : 'Add to cart'}
            </Button>
            {product.sold && <p className="sold-note">This product has already been sold.</p>}
          </div>
        </div>
      </section>
    </Container>
  )
}
