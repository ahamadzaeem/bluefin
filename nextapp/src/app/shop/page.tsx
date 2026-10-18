'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { productData } from '@/components/ProductsSection';

export default function ShopPage() {
  const { addToCart } = useCart();
  const [modalProduct, setModalProduct] = useState<string | null>(null);
  const [selectedQty, setSelectedQty] = useState<{ [key: string]: number }>({ '1000': 1, '500': 1 });

  const handleQtyChange = (key: string, delta: number) => {
    setSelectedQty(prev => ({
      ...prev,
      [key]: Math.max(1, (prev[key] || 1) + delta)
    }));
  };

  const productsList = [
    {
      id: 'bf-1000',
      key: '1000',
      name: 'BlueFin Omega-3 1000 MG',
      tag: 'HIGH POTENCY FORMULA',
      strength: 'EPA 180mg | DHA 120mg per Softgel',
      price: 990,
      image: '/assets/bottle_1_transparent.png',
      badge: 'BESTSELLER',
      idealFor: 'Active adults, cardiovascular support, intensive cognitive focus & joint flexibility.',
      features: [
        '1000mg Pelagic Deep-Sea Fish Oil per softgel',
        'Enteric coated — 100% zero fishy burps',
        'Triple molecular distillation for 0% heavy metals',
        'Natural Vitamin E antioxidant preservation',
        '60 Enteric Coated Softgels (2-month supply)'
      ]
    },
    {
      id: 'bf-500',
      key: '500',
      name: 'BlueFin Omega-3 500 MG',
      tag: 'GENTLE EVERYDAY FORMULA',
      strength: 'EPA 90mg | DHA 60mg per Softgel',
      price: 590,
      image: '/assets/bottle_2_transparent.png',
      badge: 'FAMILY FAVORITE',
      idealFor: 'Seniors, teenagers (12+), first-time fish oil users, and gentle daily baseline health.',
      features: [
        '500mg Gentle Fish Oil in compact mini-capsules',
        'Ultra-easy to swallow, smooth gelatin casing',
        'Optimal daily baseline for immunity & cellular health',
        'Purified to strict European Pharmacopoeia standards',
        '60 Mini Softgels (2-month supply)'
      ]
    }
  ];

  return (
    <>
      <Header />

      <main>
        {/* HERO BANNER */}
        <section className="subpage-hero-wrapper">
          <img
            src="/assets/hero_shop.jpg"
            alt="Deep ocean water with golden sunlight caustics"
            className="subpage-hero-bg"
          />
          <div className="subpage-hero-overlay overlay-shop" />

          <div className="subpage-hero-content" style={{ maxWidth: '920px', textAlign: 'center', margin: '0 auto' }}>
            <div className="subpage-breadcrumb" style={{ justifyContent: 'center' }}>
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Shop Formulations</span>
            </div>

            <h1 className="subpage-title">
              Pure Omega-3. Made for Everyday Life.
            </h1>

            <p className="subpage-subtitle" style={{ margin: '0 auto 2rem', color: '#e2e8f0' }}>
              Sustainably caught pelagic fish oil, molecularly purified, and enteric-coated for maximum bio-absorption without fishy aftertaste. Delivered directly to your doorstep.
            </p>

            {/* Hero Feature Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.15)', padding: '0.5rem 1.1rem', borderRadius: '999px', fontSize: '0.82rem', color: '#e2e8f0' }}>
                <span style={{ color: '#38bdf8' }}>✓</span> Zero Fishy Burps
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.15)', padding: '0.5rem 1.1rem', borderRadius: '999px', fontSize: '0.82rem', color: '#e2e8f0' }}>
                <span style={{ color: '#38bdf8' }}>✓</span> Cold Molecular Distillation
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.15)', padding: '0.5rem 1.1rem', borderRadius: '999px', fontSize: '0.82rem', color: '#e2e8f0' }}>
                <span style={{ color: '#38bdf8' }}>✓</span> Free Kerala Express Shipping
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
              <a
                href="#card1000mg"
                className="btn btn-pill-nav"
                style={{ padding: '0.85rem 2rem', fontSize: '0.85rem' }}
              >
                SHOP 1000 MG →
              </a>
              <a
                href="#card500mg"
                className="btn"
                style={{
                  padding: '0.85rem 1.8rem',
                  fontSize: '0.85rem',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: '#ffffff',
                  borderRadius: '999px',
                  textDecoration: 'none'
                }}
              >
                SHOP 500 MG
              </a>
            </div>
          </div>
        </section>

        {/* PRODUCTS LISTING */}
        <section className="subpage-content" style={{ background: '#f8fafc', paddingBottom: '7rem' }}>
          <div className="subpage-container">
            {/* Trust Highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.5rem',
                marginBottom: '4rem',
                background: '#ffffff',
                padding: '1.75rem 2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 30, 60, 0.05)',
                border: '1px solid rgba(226, 232, 240, 0.8)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🌊</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#072136' }}>Wild Pelagic Source</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Sub-zero Arctic fisheries</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <span style={{ fontSize: '1.5rem' }}>✨</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#072136' }}>Zero Fishy Burps</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Delayed-release enteric casing</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🚚</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#072136' }}>Free Express Delivery</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Across all 14 Kerala districts</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🔬</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#072136' }}>GMP Certified</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Third-party lab tested</div>
                </div>
              </div>
            </div>

            {/* Product Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '2.5rem'
              }}
            >
              {productsList.map(prod => (
                <div
                  key={prod.id}
                  style={{
                    background: '#ffffff',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 10px 30px rgba(7, 33, 54, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                >
                  {/* Top Badge & Image Header */}
                  <div
                    style={{
                      background: 'radial-gradient(circle at 50% 30%, #e0f2fe 0%, #f0fdf4 100%)',
                      padding: '3rem 2rem 2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      position: 'relative'
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        top: '1.25rem',
                        left: '1.5rem',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '999px',
                        background: prod.key === '1000' ? '#072136' : '#0284c7',
                        color: '#ffffff'
                      }}
                    >
                      {prod.badge}
                    </span>

                    <img
                      src={prod.image}
                      alt={prod.name}
                      style={{
                        height: '280px',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 15px 25px rgba(7, 33, 54, 0.2))'
                      }}
                    />
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '2.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: '#0284c7',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {prod.tag}
                    </div>

                    <h2
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.75rem',
                        color: '#072136',
                        lineHeight: 1.25,
                        marginBottom: '0.5rem'
                      }}
                    >
                      {prod.name}
                    </h2>

                    <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 500, marginBottom: '1.25rem' }}>
                      {prod.strength}
                    </div>

                    <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {prod.idealFor}
                    </p>

                    <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem', marginBottom: '1.75rem' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#072136', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Key Highlights:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {prod.features.map((feat, idx) => (
                          <li key={idx} style={{ fontSize: '0.85rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: '#0284c7', fontWeight: 'bold' }}>✓</span> {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price & Actions */}
                    <div style={{ marginTop: 'auto', borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                        <div>
                          <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#072136' }}>₹</span>
                          <span style={{ fontSize: '2rem', fontWeight: 700, color: '#072136', fontFamily: 'var(--font-serif)' }}>
                            {prod.price}
                          </span>
                          <span style={{ fontSize: '0.85rem', color: '#94a3b8', marginLeft: '0.35rem' }}>/ 60 Softgels</span>
                        </div>
                        <button
                          onClick={() => setModalProduct(prod.key)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#0284c7',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textDecoration: 'underline'
                          }}
                        >
                          View Supplement Facts
                        </button>
                      </div>

                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        {/* Qty Selector */}
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            border: '1px solid #cbd5e1',
                            borderRadius: '999px',
                            background: '#f8fafc',
                            padding: '0.2rem'
                          }}
                        >
                          <button
                            onClick={() => handleQtyChange(prod.key, -1)}
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              border: 'none',
                              background: '#ffffff',
                              cursor: 'pointer',
                              fontWeight: 700,
                              color: '#072136'
                            }}
                          >
                            -
                          </button>
                          <span style={{ padding: '0 0.85rem', fontWeight: 600, fontSize: '0.9rem', color: '#072136' }}>
                            {selectedQty[prod.key] || 1}
                          </span>
                          <button
                            onClick={() => handleQtyChange(prod.key, 1)}
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              border: 'none',
                              background: '#ffffff',
                              cursor: 'pointer',
                              fontWeight: 700,
                              color: '#072136'
                            }}
                          >
                            +
                          </button>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                          className="btn btn-navy-pill"
                          style={{ flex: 1, padding: '0.85rem 1.25rem', fontSize: '0.85rem', letterSpacing: '0.08em' }}
                          onClick={() => {
                            addToCart({
                              id: prod.id,
                              name: prod.name,
                              price: prod.price,
                              strength: prod.strength,
                              img: prod.image,
                              qty: selectedQty[prod.key] || 1
                            });
                          }}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Offline Kerala Pharmacy Availability Callout */}
            <div
              style={{
                marginTop: '5rem',
                background: 'linear-gradient(135deg, #072136 0%, #0a3556 100%)',
                color: 'white',
                padding: '3rem',
                borderRadius: '24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                alignItems: 'center',
                gap: '2rem'
              }}
            >
              <div>
                <div style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Prefer Buying Locally?
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', marginBottom: '1rem', fontWeight: 400 }}>
                  Available in 500+ Registered Pharmacies
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '520px' }}>
                  Ask your neighborhood pharmacist in Ernakulam, Kozhikode, Thiruvananthapuram, Thrissur, and across Kerala for BlueFin Omega-3.
                </p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <Link href="/faq" className="btn btn-pill-nav" style={{ padding: '0.9rem 1.8rem', display: 'inline-block' }}>
                  FIND NEAREST PHARMACY
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SUPPLEMENT FACTS MODAL */}
      {modalProduct && (
        <>
          <div className="product-modal-backdrop active" onClick={() => setModalProduct(null)} />
          <div className="product-modal active">
            <button className="modal-close-btn" onClick={() => setModalProduct(null)} aria-label="Close dialog">
              ✕
            </button>
            {(() => {
              const p = productData[modalProduct];
              if (!p) return null;
              return (
                <div className="modal-content-grid">
                  <div className="modal-img-col">
                    <img src={p.image} alt={p.title} className="modal-bottle-img" />
                  </div>
                  <div className="modal-info-col">
                    <div className="card-badge" style={{ display: 'inline-block', marginBottom: '0.5rem' }}>{p.tag}</div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-navy-deep)' }}>{p.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: '#64748b', margin: '0.75rem 0 1.25rem' }}>{p.desc}</p>
                    <div className="supp-facts-box">
                      <div className="supp-facts-title">Supplement Facts (60 Softgels / Bottle)</div>
                      {p.specs.map((s: { label: string; val: string }) => (
                        <div key={s.label} className="supp-row">
                          <span>{s.label}</span>
                          <strong>{s.val}</strong>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                      <div className="price-wrap">
                        <span className="currency">₹</span>
                        <span className="amount">{p.price}</span>
                        <span className="unit">/ 60 Softgels</span>
                      </div>
                      <button
                        className="btn btn-navy-pill"
                        onClick={() => {
                          addToCart({
                            id: `bf-${modalProduct}`,
                            name: p.title,
                            price: p.price,
                            img: p.image,
                            strength: p.potency,
                            qty: selectedQty[modalProduct] || 1
                          });
                          setModalProduct(null);
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </>
      )}

      <Footer />
    </>
  );
}
