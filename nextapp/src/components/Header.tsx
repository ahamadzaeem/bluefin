'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Logo from './Logo';

export default function Header({ cartCount: explicitCartCount }: { cartCount?: number }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, setCartOpen } = useCart();
  const cartCount = explicitCartCount !== undefined ? explicitCartCount : totalItems;
  const isSubpage = pathname !== '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Shop', href: '/shop' },
    { label: 'Why BlueFin', href: '/why-bluefin' },
    { label: 'Our Story', href: '/our-story' },
    { label: 'Wellness', href: '/wellness' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header
      className={`site-header ${scrolled ? 'scrolled' : ''} ${isSubpage ? 'subpage-header' : ''}`}
      id="siteHeader"
    >
      <div className="nav-container">
        <Link href="/" className="brand-logo" aria-label="BlueFin Home" style={{ textDecoration: 'none' }}>
          <Logo className="text-white" invert={false} />
        </Link>

        <nav className="nav-menu" id="navMenu">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                style={isActive ? { color: '#38bdf8', fontWeight: 600 } : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <button className="nav-icon-btn" aria-label="Search" onClick={() => alert('Search BlueFin products...')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button className="nav-icon-btn" aria-label="Account" onClick={() => alert('Customer account portal coming soon')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          <button
            className="nav-icon-btn cart-btn"
            id="cartTrigger"
            aria-label="View Cart"
            onClick={() => setCartOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="cart-badge">{cartCount}</span>
          </button>
          <Link href="/shop" className="btn btn-pill-nav">
            SHOP NOW
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Navigation">
            <span /><span /><span />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div style={{ background: 'rgba(7,33,54,0.98)', backdropFilter: 'blur(16px)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
              style={pathname === item.href ? { color: '#38bdf8', fontWeight: 600 } : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
