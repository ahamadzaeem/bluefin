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
import { useCart } from '@/context/CartContext';

export default function HomePage() {
  const { addToCart } = useCart();
  const [modalProduct, setModalProduct] = useState<string | null>(null);

  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <CapsuleSection />
        <ProductsSection
          onAddToCart={(item: CartItem) => addToCart(item)}
          onViewProduct={(id) => setModalProduct(id)}
        />
        <FamilySection />
        <ReasonsSection />
        <RoutineSection />
        <FindUsSection />
        <FAQSection />
      </main>

      <Footer />

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
              if (!p) return null;
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
                      {p.specs.map((s: { label: string; val: string }) => (
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
    </>
  );
}
