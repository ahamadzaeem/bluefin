'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, changeQty, removeFromCart, totalItems, subtotal, toast } = useCart();

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <div className="toast-container">
          <div className="toast-notification">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>{toast}</span>
          </div>
        </div>
      )}

      {/* Cart Drawer Backdrop */}
      <div
        className={`cart-drawer-backdrop ${cartOpen ? 'active' : ''}`}
        onClick={() => setCartOpen(false)}
      />

      {/* Cart Drawer */}
      <aside className={`cart-drawer ${cartOpen ? 'active' : ''}`} aria-label="Shopping Cart">
        <div className="cart-drawer-header">
          <div className="cart-title-wrap">
            <h3 className="cart-heading">Your Cart</h3>
            <span className="cart-item-count">
              ({totalItems} item{totalItems !== 1 ? 's' : ''})
            </span>
          </div>
          <button
            className="cart-close-btn"
            onClick={() => setCartOpen(false)}
            aria-label="Close Cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="cart-shipping-bar">
          <div className="shipping-bar-text" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13" rx="2" />
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            <span>You&apos;ve unlocked <strong>Free Express Delivery</strong> across Kerala!</span>
          </div>
          <div className="shipping-progress-track">
            <div className="shipping-progress-fill" style={{ width: '100%' }} />
          </div>
        </div>

        <div className="cart-items-container">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#5e7c94' }}>
              <p style={{ fontWeight: 500 }}>Your cart is empty.</p>
              <Link
                href="/shop"
                className="btn btn-navy-pill"
                style={{ marginTop: '1.5rem', fontSize: '0.78rem', display: 'inline-block' }}
                onClick={() => setCartOpen(false)}
              >
                EXPLORE PRODUCTS
              </Link>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-thumb">
                  <img src={item.img} alt={item.name} />
                </div>
                <div>
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-strength">{item.strength}</div>
                  <div className="qty-control">
                    <button className="qty-btn" onClick={() => changeQty(item.id, -1)}>
                      -
                    </button>
                    <span className="qty-val">{item.qty}</span>
                    <button className="qty-btn" onClick={() => changeQty(item.id, 1)}>
                      +
                    </button>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="cart-item-price">₹{(item.price * item.qty).toLocaleString()}</div>
                  <button
                    style={{
                      fontSize: '0.75rem',
                      color: '#dc2626',
                      marginTop: '0.5rem',
                      textDecoration: 'underline',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-subtotal-row">
            <span className="subtotal-label">Subtotal</span>
            <span className="subtotal-amount">₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="cart-total-row">
            <span className="total-label">Total</span>
            <span className="total-amount">₹{subtotal.toLocaleString()}</span>
          </div>
          <button
            className="cart-checkout-btn"
            onClick={() => alert(`Proceeding to checkout with ₹${subtotal.toLocaleString()}`)}
          >
            PROCEED TO CHECKOUT →
          </button>
        </div>
      </aside>
    </>
  );
}
