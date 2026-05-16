import { useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { removeFromCart, updateQuantity, clearCart } from '../cartSlice'
import Button from '../../../components/common/Button'

type CartDrawerProps = {
  open: boolean
  onClose: () => void
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const items = useAppSelector((state) => state.cart.items)
  const dispatch = useAppDispatch()

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  )

  if (!open) {
    return null
  }

  return (
    <div className="cart-overlay" role="dialog" aria-modal="true">
      <div className="cart-drawer">
        <header className="cart-header">
          <div>
            <p className="eyebrow">Your cart</p>
            <h3>{items.length ? 'Ready to checkout' : 'Cart is empty'}</h3>
          </div>
          <button className="cart-close" type="button" onClick={onClose}>
            Close
          </button>
        </header>

        <div className="cart-content">
          {items.length === 0 ? (
            <p className="cart-empty">Add items to your cart to see them here.</p>
          ) : (
            items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="cart-item-body">
                  <div className="cart-item-meta">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </div>
                  <div className="cart-item-controls">
                    <label>
                      Qty
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(event) =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: Number(event.target.value),
                            }),
                          )
                        }
                      />
                    </label>
                    <button
                      type="button"
                      className="button button-ghost"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <footer className="cart-footer">
          <div className="cart-total">
            <span>Total</span>
            <strong>${total}</strong>
          </div>
          <div className="cart-actions">
            <Button variant="secondary" type="button" onClick={() => dispatch(clearCart())}>
              Clear cart
            </Button>
            <Button variant="primary" type="button" onClick={onClose} disabled={!items.length}>
              Continue shopping
            </Button>
          </div>
        </footer>
      </div>
    </div>
  )
}
