import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Container from '../components/common/Container'
import ProductGrid from '../features/catalog/components/ProductGrid'
import { getAllProducts, getProductsByCategory } from '../features/catalog/utils/catalogUtils'
import type { Product } from '../features/catalog/types/catalogTypes'
import { useAppSelector } from '../store/hooks'
import formatCurrency from '../utils/formatCurrency'

const validCategories: Product['category'][] = ['Nature', 'Vintage', 'Photography']
const filterOptions = ['All', ...validCategories] as const

type FilterOption = (typeof filterOptions)[number]

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') as Product['category'] | null

  const activeFilter: FilterOption = category && validCategories.includes(category) ? category : 'All'

  // Filter products by query category when provided
  const products = useMemo(() => {
    return category && validCategories.includes(category)
      ? getProductsByCategory(category)
      : getAllProducts()
  }, [category])

  // Pull cart contents from Redux state for the header badge
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

      <div className="shop-filters">
        <div className="shop-filter-list" role="tablist" aria-label="Shop categories">
          {filterOptions.map((option: FilterOption) => {
            const optionCategory = option === 'All' ? null : option
            const to = optionCategory ? `/shop?category=${encodeURIComponent(optionCategory)}` : '/shop'

            return (
              <Link
                key={option}
                to={to}
                className={`shop-filter-button ${activeFilter === option ? 'active' : ''}`}
                role="tab"
                aria-selected={activeFilter === option}
              >
                {option}
              </Link>
            )
          })}
        </div>
      </div>

      <div className="shop-layout">
        <div className="shop-main">
          <section className="featured-products">
            <h2>{heading}</h2>
            <ProductGrid products={products} />
          </section>
        </div>
      </div>
    </Container>
  )
}
