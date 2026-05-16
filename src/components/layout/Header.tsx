import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import CartDrawer from '../../features/cart/components/CartDrawer'

export default function Header() {
  const [isCartOpen, setCartOpen] = useState(false)
  const itemCount = useAppSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0))

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">
          LeClematis
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/nature">Nature</Link>
            </li>
            <li>
              <Link to="/vintage">Vintage</Link>
            </li>
            <li>
              <Link to="/photography">Photography</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <button type="button" className="cart-toggle" onClick={() => setCartOpen(true)}>
          Cart ({itemCount})
        </button>
      </div>
      <CartDrawer open={isCartOpen} onClose={() => setCartOpen(false)} />
    </header>
  )
}
