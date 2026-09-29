'use client';
import { useState } from 'react';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! ${email} has been subscribed.`);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main-row">
          <div className="footer-col-brand">
            <a href="#" className="footer-brand-logo" style={{ textDecoration: 'none' }}>
              <Logo className="text-white" />
            </a>
            <p className="footer-tagline">Better Omega-3.<br />Brighter Tomorrows.</p>
            <div className="footer-purity-badges">
              {['GMP Certified', 'Molecularly Distilled', 'Third-Party Tested'].map(b => (
                <span key={b} className="badge-mini">{b}</span>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-links">
              <li><a href="#card1000mg">Omega-3 1000mg</a></li>
              <li><a href="#card500mg">Omega-3 500mg</a></li>
              <li><a href="#products">All Products</a></li>
              <li><a href="#routine">Everyday Wellness Routine</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Learn</h4>
            <ul className="footer-links">
              <li><a href="#why-bluefin">Why BlueFin</a></li>
              <li><a href="#family">Our Story</a></li>
              <li><a href="#difference">Purity & Sourcing</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><a href="#where-to-find">Pharmacy Locator</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col-newsletter">
            <h4 className="footer-heading">Join Our Newsletter</h4>
            <p className="newsletter-sub">Get wellness tips and updates.</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="input-wrap">
                <input type="email" placeholder="Your email address" required value={email} onChange={e => setEmail(e.target.value)} aria-label="Email for newsletter" />
                <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            </form>
            <p className="privacy-note">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="copyright-text">&copy; 2026 BlueFin. All rights reserved.</div>
          <div className="legal-links">
            <a href="#">Privacy Policy</a><span className="sep">&bull;</span>
            <a href="#">Terms of Service</a><span className="sep">&bull;</span>
            <a href="#">Regulatory Info</a>
          </div>
          <div className="social-links">
            {[
              { label: 'Email', path: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' },
            ].map(s => (
              <a key={s.label} href="#" aria-label={s.label}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={s.path}/>
                  {s.label === 'Email' && <polyline points="22,6 12,13 2,6"/>}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
