'use client';
import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! ${email} has been subscribed to BlueFin updates.`);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main-row">
          <div className="footer-col-brand">
            <Link href="/" className="footer-brand-logo" style={{ textDecoration: 'none' }}>
              <Logo className="text-white" />
            </Link>
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
              <li><Link href="/shop#card1000mg">Omega-3 1000mg</Link></li>
              <li><Link href="/shop#card500mg">Omega-3 500mg</Link></li>
              <li><Link href="/shop">All Products</Link></li>
              <li><Link href="/wellness">Everyday Wellness Routine</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Learn</h4>
            <ul className="footer-links">
              <li><Link href="/why-bluefin">Why BlueFin</Link></li>
              <li><Link href="/our-story">Our Story</Link></li>
              <li><Link href="/why-bluefin#purity">Purity &amp; Sourcing</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><Link href="/#where-to-find">Pharmacy Locator</Link></li>
              <li><Link href="/faq">Help &amp; Shipping</Link></li>
              <li><Link href="/faq">Quality Guarantee</Link></li>
              <li><a href="mailto:support@bluefinwellness.com">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col-newsletter">
            <h4 className="footer-heading">Join Our Newsletter</h4>
            <p className="newsletter-sub">Get wellness tips, dosage guides, and subscriber-only offers.</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="input-wrap">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </form>
            <p className="privacy-note">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="copyright-text">© 2026 BlueFin. All rights reserved.</div>
          <div className="legal-links">
            <Link href="/faq">Privacy Policy</Link>
            <span className="sep">•</span>
            <Link href="/faq">Terms of Service</Link>
            <span className="sep">•</span>
            <Link href="/faq">Regulatory Info</Link>
          </div>
          <div className="social-links">
            <a href="mailto:care@bluefin.in" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
