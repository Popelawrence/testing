import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import Container from '../components/common/Container'
import ProductGrid from '../features/catalog/components/ProductGrid'
import { getAllProducts, getProductsByCategory } from '../features/catalog/utils/catalogUtils'
import type { Product } from '../features/catalog/types/catalogTypes'
import { useAppSelector } from '../store/hooks'
import formatCurrency from '../utils/formatCurrency'

const validCategories: Product['category'][] = ['Nature', 'Vintage', 'Photography']

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') as Product['category'] | null

  const products = useMemo(() => {
    return category && validCategories.includes(category)
      ? getProductsByCategory(category)
      : getAllProducts()
  }, [category])

  const cartItems = useAppSelector((state) => state.cart.items)

  const itemCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  )

  const heading = category && validCategories.includes(category) ? `${category} collection` : 'Featured collection'
  const intro = category && validCategories.includes(category)
    ? `Showing shop items for ${category}.`
    : 'Explore a curated collection of botanicals, vintage finds, and photographic gifts.'

  return (
    <Container>
      <div className="shop-page-header">
        <div>
          <section className="page-section">
            <h1>Shop</h1>
            <p>{intro}</p>
          </section>
        </div>

        <div className="cart-badge">
          <span>{itemCount ? `${itemCount} item${itemCount === 1 ? '' : 's'} in cart` : 'Cart is empty'}</span>
          {itemCount > 0 && <strong>{formatCurrency(cartTotal)}</strong>}
        </div>
      </div>

      <div className="shop-layout">
        <div className="shop-main">
          <section className="featured-products">
            <h2>{heading}</h2>
            <ProductGrid products={products} />
          </section>
        </div>

        <aside className="shop-sidebar">
          <section className="mini-cart">
            <div className="mini-cart-header">
              <p className="eyebrow">Mini cart</p>
              <h2>Shopping summary</h2>
            </div>

            {cartItems.length === 0 ? (
              <p className="mini-cart-empty">Your cart is empty. Add a piece to see it here.</p>
            ) : (
              <div className="mini-cart-items">
                {cartItems.map((item) => (
                  <div className="mini-cart-item" key={item.id}>
                    <div className="mini-cart-item-info">
                      <span>{item.name}</span>
                      <small>{item.quantity} × {formatCurrency(item.price)}</small>
                    </div>
                    <strong>{formatCurrency(item.price * item.quantity)}</strong>
                  </div>
                ))}
              </div>
            )}

            <div className="mini-cart-footer">
              <div className="mini-cart-total">
                <span>Total</span>
                <strong>{formatCurrency(cartTotal)}</strong>
              </div>
              <button type="button" className="button button-primary" disabled={!cartItems.length}>
                Checkout
              </button>
            </div>
          </section>
        </aside>
      </div>
    </Container>
  )
}
