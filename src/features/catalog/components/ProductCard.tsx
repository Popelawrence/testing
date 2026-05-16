import { Link } from 'react-router-dom'
import type { Product } from '../types/catalogTypes'
import formatCurrency from '../../../utils/formatCurrency'
import { useAppDispatch } from '../../../store/hooks'
import { addToCart } from '../../cart/cartSlice'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch()

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-link">
        <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
          {product.sold && <span className="product-badge">Sold</span>}
        </div>
      </Link>
      <div className="product-card-body">
        <div className="product-meta">
          <span>{product.category}</span>
          <span>{formatCurrency(product.price)}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card-actions">
          <Link to={`/products/${product.id}`} className="product-link">
            View details
          </Link>
          <button
            type="button"
            className="button button-secondary product-add-button"
            onClick={() => dispatch(addToCart(product))}
            disabled={product.sold}
          >
            {product.sold ? 'Sold out' : 'Add to cart'}
          </button>
        </div>
      </div>
    </article>
  )
}
