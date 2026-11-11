'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { getShopifyProducts, getShopifyProductByHandle } from '@/lib/shopify';

// Static clinical specs fallback for each strength
const CLINICAL_SPECS: Record<string, {
  name: string;
  tag: string;
  strength: string;
  defaultPrice: number;
  shortDesc: string;
  fullDesc: string;
  specs: { label: string; val: string }[];
  clinicalHighlights: { title: string; desc: string }[];
  directions: string[];
  fallbackImages: string[];
}> = {
  '1000': {
    name: 'BlueFin Omega-3 1000 MG',
    tag: 'HIGH POTENCY CARDIO & COGNITIVE FORMULA',
    strength: 'EPA 180mg | DHA 120mg per Softgel (18/12 Gold Grade)',
    defaultPrice: 990,
    shortDesc: 'Cold-molecularly distilled coastal pelagic fish oil with advanced MAAC enteric coating. Formulated for cardiovascular arterial elasticity, intensive cognitive sharpness, and daily cellular vitality.',
    fullDesc: 'BlueFin 1000 MG delivers foundational essential fatty acids in their bio-identical re-esterified triglyceride (rTG) form. Sourced from wild tropical pelagic sardines and mackerel caught in Indian coastal waters, each batch undergoes triple molecular distillation under high vacuum to eliminate all environmental pollutants, heavy metals, and fishy odors.',
    specs: [
      { label: 'Total Fish Oil', val: '1000 mg' },
      { label: 'EPA (Eicosapentaenoic Acid)', val: '180 mg' },
      { label: 'DHA (Docosahexaenoic Acid)', val: '120 mg' },
      { label: 'Other Omega-3 Fatty Acids', val: '60 mg' },
      { label: 'Natural Vitamin E (D-Alpha Tocopherol)', val: '1.5 IU' },
      { label: 'Serving Size', val: '1 Softgel Daily' },
      { label: 'Capsules Per Bottle', val: '60 Softgels (2-Month Supply)' },
      { label: 'Coating Technology', val: 'MAAC Delayed-Release Enteric' },
      { label: 'Fish Source', val: 'Wild Indian Pelagic Catch' }
    ],
    clinicalHighlights: [
      { title: '18/12 Clinical Ratio', desc: 'Exact gold-standard pharmacopeia proportion of EPA to DHA for optimal arterial and brain cellular incorporation.' },
      { title: 'MAAC Enteric Shield', desc: 'Resists stomach acid and dissolves only in the neutral pH of the small intestine for 100% zero fishy burps or reflux.' },
      { title: 'Purity Benchmark', desc: 'Tested to strict limits (<0.001 PPM) for lead, cadmium, mercury, and PCBs in certified GMP facilities.' }
    ],
    directions: [
      'Take 1 softgel daily, preferably with a nutrient-rich breakfast or lunch.',
      'Swallow whole with a full glass of water. Do not chew or crush the enteric-coated softgel.',
      'Store in a cool, dry place away from direct sunlight.'
    ],
    fallbackImages: [
      '/assets/bottle_1_transparent.png',
      '/assets/bottle_uploaded_1.png',
      '/assets/product_1000mg_fullview.png'
    ]
  },
  '500': {
    name: 'BlueFin Omega-3 500 MG',
    tag: 'GENTLE EVERYDAY & FAMILY FORMULA',
    strength: 'EPA 90mg | DHA 60mg per Mini Softgel',
    defaultPrice: 590,
    shortDesc: 'Compact mini-softgels designed for teenagers, seniors, and everyday gentle maintenance. Easy to swallow with zero gastric reflux.',
    fullDesc: 'BlueFin 500 MG offers calibrated daily Omega-3 nourishment in an ultra-compact, easy-to-swallow mini softgel. Ideal for younger family members (12+) and seniors needing gentle circulatory and cognitive support without stomach irritation.',
    specs: [
      { label: 'Total Fish Oil', val: '500 mg' },
      { label: 'EPA (Eicosapentaenoic Acid)', val: '90 mg' },
      { label: 'DHA (Docosahexaenoic Acid)', val: '60 mg' },
      { label: 'Other Omega-3 Fatty Acids', val: '30 mg' },
      { label: 'Natural Vitamin E', val: '1.0 IU' },
      { label: 'Serving Size', val: '1 Mini Softgel Daily' },
      { label: 'Capsules Per Bottle', val: '60 Softgels (2-Month Supply)' },
      { label: 'Coating Technology', val: 'MAAC Delayed-Release Enteric' },
      { label: 'Form', val: 'Compact Easy-Swallow Softgel' }
    ],
    clinicalHighlights: [
      { title: 'Compact Ergonomic Size', desc: '50% smaller profile than conventional fish oil capsules, making it effortless to swallow daily.' },
      { title: 'Gentle on Sensitive Stomachs', desc: 'Enteric barrier ensures digestion occurs smoothly in the duodenum without unpleasant aftertaste.' },
      { title: 'Foundational DHA', desc: 'Sustains academic focus, cognitive resilience, and natural ocular tear film lubrication.' }
    ],
    directions: [
      'Take 1 mini-softgel daily with breakfast or evening meal.',
      'Swallow with water or milk. Suitable for adults, elderly, and teenagers aged 12+.',
      'Store tightly sealed in a cool, dry environment.'
    ],
    fallbackImages: [
      '/assets/bottle_2_transparent.png',
      '/assets/bottle_uploaded_2.png',
      '/assets/product_1000mg_fullview.png'
    ]
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || '';
  const { addToCart } = useCart();

  // Determine which product variant (1000 or 500)
  const is1000 = slug.includes('1000');
  const is500 = slug.includes('500');
  const productKey = is500 ? '500' : '1000';
  const info = CLINICAL_SPECS[productKey];

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const [shopifyData, setShopifyData] = useState<{
    images: string[];
    variantId?: string;
    price?: number;
    title?: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch product and all media images from Shopify
  useEffect(() => {
    async function loadShopifyMedia() {
      try {
        setIsLoading(true);
        // Try fetching by exact handle first, or find by handle pattern
        const handle = is500 ? 'bluefin-omega-3-500-mg' : 'bluefin-omega-3-1000-mg';
        const single = await getShopifyProductByHandle(handle);

        if (single && single.images.length > 0) {
          setShopifyData({
            images: single.images,
            variantId: single.variantId,
            price: single.price,
            title: single.title
          });
        } else {
          // Fallback: search all products from Shopify
          const all = await getShopifyProducts();
          const match = all.find(p => p.handle.includes(productKey) || p.title.includes(productKey));
          if (match && match.images && match.images.length > 0) {
            setShopifyData({
              images: match.images,
              variantId: match.variantId,
              price: match.price,
              title: match.title
            });
          }
        }
      } catch (err) {
        console.warn('Failed to fetch Shopify product media:', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadShopifyMedia();
  }, [productKey, is500]);

  // Combine images: Shopify uploaded photos first, followed by fallbacks if needed
  const displayImages = shopifyData?.images && shopifyData.images.length > 0
    ? shopifyData.images
    : info.fallbackImages;

  const currentPrice = shopifyData?.price || info.defaultPrice;
  const currentVariantId = shopifyData?.variantId;

  const handleAddToCart = () => {
    addToCart({
      id: `bf-${productKey}`,
      variantId: currentVariantId,
      name: info.name,
      price: currentPrice,
      strength: info.strength,
      img: displayImages[0] || info.fallbackImages[0],
      qty
    });
  };

  return (
    <>
      <Header />

      <main style={{ background: '#f8fafc', minHeight: '100vh', paddingTop: '6rem', paddingBottom: '8rem' }}>
        {/* Breadcrumb Navigation */}
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '1.5rem 1.5rem 0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.82rem', color: '#64748b' }}>
            <Link href="/" style={{ color: '#0284c7', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/shop" style={{ color: '#0284c7', textDecoration: 'none' }}>Shop</Link>
            <span>/</span>
            <span style={{ color: '#072136', fontWeight: 600 }}>{info.name}</span>
          </div>
        </div>

        {/* PDP Main Showcase Container */}
        <div style={{ maxWidth: '1240px', margin: '1.5rem auto 0', padding: '0 1.5rem' }}>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '28px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 12px 40px rgba(7, 33, 54, 0.05)',
              padding: '2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '3.5rem',
              alignItems: 'start'
            }}
          >
            {/* LEFT COLUMN: INTERACTIVE MEDIA GALLERY */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Primary Active Image Display */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '3rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '440px',
                  border: '1px solid #e2e8f0',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.5rem',
                    background: '#072136',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    padding: '0.4rem 0.95rem',
                    borderRadius: '999px'
                  }}
                >
                  {productKey === '1000' ? 'BESTSELLER' : 'FAMILY FAVORITE'}
                </span>

                <img
                  src={displayImages[activeImgIndex] || displayImages[0]}
                  alt={`${info.name} - View ${activeImgIndex + 1}`}
                  style={{
                    maxHeight: '380px',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 15px 30px rgba(7, 33, 54, 0.12))',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>

              {/* Thumbnail Strip for Multi-Image PDP Browsing */}
              {displayImages.length > 1 && (
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600, marginBottom: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Product Media & Packshots ({displayImages.length} Photos):
                  </div>
                  <div style={{ display: 'flex', gap: '0.85rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                    {displayImages.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImgIndex(idx)}
                        style={{
                          width: '84px',
                          height: '84px',
                          borderRadius: '12px',
                          border: activeImgIndex === idx ? '2px solid #0284c7' : '1px solid #cbd5e1',
                          background: '#ffffff',
                          padding: '0.4rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: activeImgIndex === idx ? '0 4px 12px rgba(2, 132, 199, 0.2)' : 'none',
                          transition: 'all 0.2s ease',
                          flexShrink: 0
                        }}
                      >
                        <img
                          src={imgUrl}
                          alt={`Thumbnail ${idx + 1}`}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            mixBlendMode: 'multiply'
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Trust Badges Strip under gallery */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.75rem',
                  padding: '1.25rem 0.5rem 0',
                  borderTop: '1px solid #f1f5f9',
                  textAlign: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#072136' }}>100% Zero Burps</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b' }}>MAAC Enteric Coating</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#072136' }}>Indian Pelagic</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Ocean-Fresh Catch</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#072136' }}>Express Shipping</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Across all Kerala</div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: PRODUCT INFO & ORDER PROTOCOL */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0284c7', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                {info.tag}
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                  color: '#072136',
                  lineHeight: 1.2,
                  marginBottom: '0.65rem'
                }}
              >
                {info.name}
              </h1>

              <div style={{ fontSize: '1rem', color: '#0284c7', fontWeight: 600, marginBottom: '1.25rem' }}>
                {info.strength}
              </div>

              {/* Price Banner */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.75rem',
                  padding: '1.25rem 1.5rem',
                  background: '#f8fafc',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  marginBottom: '1.75rem'
                }}
              >
                <span style={{ fontSize: '1.25rem', fontWeight: 600, color: '#072136' }}>₹</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 700, color: '#072136', lineHeight: 1 }}>
                  {currentPrice}
                </span>
                <span style={{ fontSize: '0.9rem', color: '#64748b' }}>/ 60 Softgels (Incl. of all taxes)</span>
                <span
                  style={{
                    marginLeft: 'auto',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#059669',
                    background: '#d1fae5',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '999px'
                  }}
                >
                  IN STOCK & READY TO SHIP
                </span>
              </div>

              <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                {info.shortDesc}
              </p>

              {/* Purchase Controls */}
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '2.25rem', flexWrap: 'wrap' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    border: '1.5px solid #cbd5e1',
                    borderRadius: '999px',
                    background: '#f8fafc',
                    padding: '0.35rem'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setQty(q => Math.max(1, q - 1))}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: 'none',
                      background: '#ffffff',
                      color: '#072136',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}
                  >
                    -
                  </button>
                  <span style={{ minWidth: '40px', textAlign: 'center', fontWeight: 700, color: '#072136', fontSize: '1rem' }}>
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty(q => q + 1)}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: 'none',
                      background: '#ffffff',
                      color: '#072136',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="btn btn-navy-pill"
                  style={{
                    flex: 1,
                    minWidth: '220px',
                    padding: '1.1rem 2rem',
                    fontSize: '0.92rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.65rem'
                  }}
                >
                  ADD TO CART • ₹{(currentPrice * qty).toLocaleString()} →
                </button>
              </div>

              {/* Clinical Specs Table */}
              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.75rem' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#072136', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
                  Composition & Supplement Facts
                </h3>
                <div style={{ background: '#f8fafc', borderRadius: '14px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                  {info.specs.map((s, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '0.75rem 1.25rem',
                        borderBottom: i < info.specs.length - 1 ? '1px solid #e2e8f0' : 'none',
                        fontSize: '0.86rem'
                      }}
                    >
                      <span style={{ color: '#475569' }}>{s.label}</span>
                      <strong style={{ color: '#072136' }}>{s.val}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* LOWER SECTION: SCIENCE, MECHANISM & USAGE DIRECTIONS */}
          <div
            style={{
              marginTop: '3.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {/* Clinical Evidence Card */}
            <div style={{ background: '#ffffff', borderRadius: '24px', padding: '2.5rem', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                SCIENTIFIC RATIONALE
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#072136', marginBottom: '1.25rem' }}>
                Why this formulation works
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {info.fullDesc}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {info.clinicalHighlights.map((h, i) => (
                  <div key={i} style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#072136', marginBottom: '0.3rem' }}>
                      {h.title}
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5 }}>
                      {h.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Usage & Storage */}
            <div style={{ background: '#ffffff', borderRadius: '24px', padding: '2.5rem', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                DAILY PROTOCOL
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#072136', marginBottom: '1.25rem' }}>
                Dosage & Administration
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {info.directions.map((dir, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#e0f2fe', color: '#0369a1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.82rem', fontWeight: 700, flexShrink: 0 }}>
                      {i + 1}
                    </span>
                    <span style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>{dir}</span>
                  </div>
                ))}
              </div>

              {/* Pharmacist Consultation Pill */}
              <div style={{ padding: '1.5rem', background: 'rgba(2, 132, 199, 0.06)', borderRadius: '16px', border: '1px solid rgba(2, 132, 199, 0.15)' }}>
                <div style={{ fontWeight: 700, color: '#072136', fontSize: '0.92rem', marginBottom: '0.4rem' }}>
                  Have questions about this formulation?
                </div>
                <div style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5, marginBottom: '1rem' }}>
                  Chat directly with our registered pharmacist team for personalized dosage guidance.
                </div>
                <a
                  href="https://wa.me/919999999999?text=Hi%20BlueFin%20Team,%20I%20have%20a%20question%20about%20BlueFin%20Omega-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#0284c7',
                    textDecoration: 'none'
                  }}
                >
                  Consult on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

