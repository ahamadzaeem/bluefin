'use client';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header({ cartCount }: { cartCount: number }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="siteHeader">
      <div className="nav-container">
        <a href="#" className="brand-logo" aria-label="BlueFin Home" style={{ textDecoration: 'none' }}>
          <Logo className="text-white" invert={scrolled} />
        </a>

        <nav className="nav-menu" id="navMenu">
          <a href="#products" className="nav-link">Shop</a>
          <a href="#why-bluefin" className="nav-link">Why BlueFin</a>
          <a href="#family" className="nav-link">Our Story</a>
          <a href="#routine" className="nav-link">Wellness</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        <div className="nav-actions">
          <button className="nav-icon-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <button className="nav-icon-btn" aria-label="Account">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
          <button className="nav-icon-btn cart-btn" id="cartTrigger" aria-label="View Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span className="cart-badge">{cartCount}</span>
          </button>
          <a href="#products" className="btn btn-pill-nav">
            SHOP NOW
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Navigation">
            <span/><span/><span/>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div style={{background:'rgba(7,33,54,0.98)',backdropFilter:'blur(16px)',padding:'2rem',display:'flex',flexDirection:'column',gap:'1.5rem'}}>
          {['#products','#why-bluefin','#family','#routine','#faq'].map((href,i) => (
            <a key={i} href={href} className="nav-link" onClick={() => setMobileOpen(false)}>
              {['Shop','Why BlueFin','Our Story','Wellness','FAQ'][i]}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
