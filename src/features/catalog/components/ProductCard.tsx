import { Link } from 'react-router-dom'
import type { Product } from '../types/catalogTypes'
import formatCurrency from '../../../utils/formatCurrency'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
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
        <Link to={`/products/${product.id}`} className="product-link">
          View details
        </Link>
      </div>
    </article>
  )
}
