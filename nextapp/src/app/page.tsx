'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CapsuleSection from '@/components/CapsuleSection';
import ProductsSection, { productData, CartItem } from '@/components/ProductsSection';
import FamilySection from '@/components/FamilySection';
import ReasonsSection from '@/components/ReasonsSection';
import RoutineSection from '@/components/RoutineSection';
import FindUsSection from '@/components/FindUsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 'bf-1000', name: 'BlueFin Omega-3 1000 MG', price: 990, strength: 'EPA 180mg | DHA 120mg', img: '/assets/product_1000mg_fullview.png', qty: 1 }
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const idx = prev.findIndex(c => c.id === item.id);
      if (idx > -1) { const n = [...prev]; n[idx].qty++; return n; }
      return [...prev, item];
    });
    showToast(`Added ${item.name} to your cart`);
    setCartOpen(true);
  };

  const changeQty = (id: string, delta: number) => {
    setCart(prev => prev.flatMap(c => {
      if (c.id !== id) return [c];
      const newQty = c.qty + delta;
      return newQty <= 0 ? [] : [{ ...c, qty: newQty }];
    }));
  };

  return (
    <>
      <Header cartCount={totalItems} />

      <main>
        <HeroSection />
        <CapsuleSection />
        <ProductsSection
          onAddToCart={addToCart}
          onViewProduct={(id) => setModalProduct(id)}
        />
        <FamilySection />
        <ReasonsSection />
        <RoutineSection />
        <FindUsSection />
        <FAQSection />
      </main>

      <Footer />

      {/* ===== CART DRAWER ===== */}
      <div className={`cart-drawer-backdrop ${cartOpen ? 'active' : ''}`} onClick={() => setCartOpen(false)} />
      <aside className={`cart-drawer ${cartOpen ? 'active' : ''}`} aria-label="Shopping Cart">
        <div className="cart-drawer-header">
          <div className="cart-title-wrap">
            <h3 className="cart-heading">Your Cart</h3>
            <span className="cart-item-count">({totalItems} item{totalItems !== 1 ? 's' : ''})</span>
          </div>
          <button className="cart-close-btn" onClick={() => setCartOpen(false)} aria-label="Close Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div className="cart-shipping-bar">
          <div className="shipping-bar-text">🎉 You&apos;ve unlocked <strong>Free Express Delivery</strong> across Kerala!</div>
          <div className="shipping-progress-track"><div className="shipping-progress-fill" style={{ width: '100%' }} /></div>
        </div>
        <div className="cart-items-container">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#5e7c94' }}>
              <p style={{ fontWeight: 500 }}>Your cart is empty.</p>
              <a href="#products" className="btn btn-navy-pill" style={{ marginTop: '1.5rem', fontSize: '0.78rem' }} onClick={() => setCartOpen(false)}>EXPLORE PRODUCTS</a>
            </div>
          ) : cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-thumb"><img src={item.img} alt={item.name} /></div>
              <div>
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-strength">{item.strength}</div>
                <div className="qty-control">
                  <button className="qty-btn" onClick={() => changeQty(item.id, -1)}>-</button>
                  <span className="qty-val">{item.qty}</span>
                  <button className="qty-btn" onClick={() => changeQty(item.id, 1)}>+</button>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="cart-item-price">₹{(item.price * item.qty).toLocaleString()}</div>
                <button style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '0.5rem', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => changeQty(item.id, -999)}>Remove</button>
              </div>
            </div>
          ))}
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
          <button className="cart-checkout-btn" onClick={() => showToast('Proceeding to Secure Checkout… Thank you for choosing BlueFin!')}>
            PROCEED TO CHECKOUT →
          </button>
        </div>
      </aside>

      {/* ===== PRODUCT QUICK VIEW MODAL ===== */}
      {modalProduct && (
        <>
          <div className="modal-backdrop active" onClick={() => setModalProduct(null)} />
          <div className="product-modal active">
            <div className="modal-header">
              <span />
              <button className="modal-close-btn" onClick={() => setModalProduct(null)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            {(() => {
              const p = productData[modalProduct];
              return (
                <div className="modal-content-grid" id="modalContentGrid">
                  <div className="modal-img-col"><img src={p.image} alt={p.title} /></div>
                  <div className="modal-info-col">
                    <span className={`product-badge ${modalProduct === '500' ? 'coral-badge' : ''}`}>{p.tag}</span>
                    <h3 className="modal-title">{p.title}</h3>
                    <div className="modal-potency">{p.potency}</div>
                    <p className="modal-desc">{p.desc}</p>
                    <div className="supp-facts-box">
                      <div className="supp-facts-title">Supplement Facts (60 Softgels / Bottle)</div>
                      {p.specs.map((s: { label: string, val: string }) => (
                        <div key={s.label} className="supp-row"><span>{s.label}</span><strong>{s.val}</strong></div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem' }}>
                      <div className="price-wrap">
                        <span className="currency">₹</span>
                        <span className="amount">{p.price}</span>
                        <span className="unit">/ 60 Softgels</span>
                      </div>
                      <button className="btn btn-navy-pill" onClick={() => {
                        addToCart({ id: `bf-${modalProduct}`, name: p.title, price: p.price, img: p.image, strength: p.potency, qty: 1 });
                        setModalProduct(null);
                      }}>ADD TO CART</button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </>
      )}

      {/* ===== TOAST ===== */}
      <div className="toast-container">
        {toast && (
          <div className="toast">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span>{toast}</span>
          </div>
        )}
      </div>
    </>
  );
}
