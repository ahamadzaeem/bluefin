'use client';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  strength: string;
  img: string;
  qty: number;
}

export const productData: Record<string, any> = {
  '1000': {
    title: 'BlueFin Omega-3 1000 MG', tag: 'HIGH POTENCY FORMULA', potency: 'EPA 180mg | DHA 120mg per Softgel', price: 990,
    image: '/assets/bottle_uploaded_1.png',
    desc: 'Expertly capsulated high-potency fish oil derived from cold-water pelagic fish. Molecularly distilled to eliminate all heavy metals, mercury, and environmental toxins.',
    specs: [
      { label: 'Total Fish Oil', val: '1000 mg' }, { label: 'EPA', val: '180 mg' },
      { label: 'DHA', val: '120 mg' }, { label: 'Other Omega-3', val: '60 mg' },
      { label: 'Vitamin E', val: '1.5 IU' }, { label: 'Serving Size', val: '1 Softgel Daily' },
      { label: 'Form', val: 'Odorless Softgel' },
    ],
  },
  '500': {
    title: 'BlueFin Omega-3 500 MG', tag: 'GENTLE EVERYDAY FORMULA', potency: 'EPA 90mg | DHA 60mg per Softgel', price: 590,
    image: '/assets/bottle_uploaded_2.png',
    desc: 'Formulated specifically for teenagers, elderly family members, and everyday gentle maintenance.',
    specs: [
      { label: 'Total Fish Oil', val: '500 mg' }, { label: 'EPA', val: '90 mg' },
      { label: 'DHA', val: '60 mg' }, { label: 'Other Omega-3', val: '30 mg' },
      { label: 'Vitamin E', val: '1.0 IU' }, { label: 'Serving Size', val: '1 Softgel Daily' },
      { label: 'Form', val: 'Compact Softgel' },
    ],
  },
};

export default function ProductsSection({ onAddToCart, onViewProduct }: {
  onAddToCart: (item: CartItem) => void;
  onViewProduct: (id: string) => void;
}) {
  return (
    <section className="products-section" id="products">
      <div className="products-bg-container">
        <img src="/assets/products_coastal_bg.jpg" alt="Coastal background" className="products-bg-img" />
      </div>
      
      <div className="products-container relative z-10">
        <div className="section-header text-center">
          <div className="section-eyebrow">OUR PRODUCTS</div>
          <h2 className="section-title">Omega-3. Made for everyday life.</h2>
          <p className="section-subtitle">Two strengths. The same trusted care.</p>
        </div>
        
        <div className="product-cards-grid">
          {/* 1000 MG Card */}
          <div className="product-card" id="card1000mg">
            <div className="product-card-inner">
              <div className="product-image-pane">
                <img src="/assets/bottle_1_transparent.png" alt="BlueFin Omega-3 1000 MG" className="product-bottle-img bottle-large" />
              </div>
              <div className="product-info-pane">
                <div className="product-brand">BLUEFIN</div>
                <h3 className="product-name">
                  OMEGA-3<br/>
                  <span className="text-teal">1000 MG</span>
                </h3>
                <div className="product-specs">
                  EPA 180mg<br/>
                  DHA 120mg
                </div>
                <ul className="product-benefits">
                  <li>
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                    Full body support
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                    Heart health
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                    Everyday wellness
                  </li>
                </ul>
                <button className="btn-view-product" onClick={() => onViewProduct('1000')}>
                  VIEW PRODUCT &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* 500 MG Card */}
          <div className="product-card" id="card500mg">
            <div className="product-card-inner">
              <div className="product-image-pane">
                <img src="/assets/bottle_2_transparent.png" alt="BlueFin Omega-3 500 MG" className="product-bottle-img bottle-small" />
              </div>
              <div className="product-info-pane">
                <div className="product-brand">BLUEFIN</div>
                <h3 className="product-name">
                  OMEGA-3<br/>
                  <span className="text-orange">500 MG</span>
                </h3>
                <div className="product-specs">
                  EPA 90mg<br/>
                  DHA 60mg
                </div>
                <ul className="product-benefits">
                  <li>
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                    Full body support
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                    Heart health
                  </li>
                  <li>
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                    Everyday wellness
                  </li>
                </ul>
                <button className="btn-view-product" onClick={() => onViewProduct('500')}>
                  VIEW PRODUCT &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
