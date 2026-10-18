'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface FAQ {
  q: string;
  a: string;
  cat: string;
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'taste', label: 'Taste & Digestion' },
    { id: 'purity', label: 'Sourcing & Purity' },
    { id: 'dosage', label: 'Dosage & Routine' },
    { id: 'orders', label: 'Orders & Kerala Pharmacies' },
  ];

  const faqs: FAQ[] = [
    {
      cat: 'taste',
      q: 'Will BlueFin give me fishy burps or reflux?',
      a: 'No, absolutely not. Unlike standard fish oil capsules that burst in the stomach, BlueFin features a proprietary enteric casing. It remains intact throughout the stomach and only dissolves in the alkaline pH of the small intestine. This completely prevents fishy regurgitation, aftertaste, and reflux.'
    },
    {
      cat: 'taste',
      q: 'Does the softgel smell or taste fishy when swallowing?',
      a: 'No. BlueFin is molecularly deodorized and enriched with natural Vitamin E (d-alpha tocopherol) which shields the polyunsaturated fats from oxidation. The softgel casing is completely neutral in taste and odor.'
    },
    {
      cat: 'purity',
      q: 'Where do you catch the fish for BlueFin?',
      a: 'We harvest wild pelagic species (anchovies, sardines, and mackerels) from pristine, sub-zero cold-water oceanic currents. Because small pelagic fish occupy the lower tier of the food chain, they do not bio-accumulate mercury or environmental micro-toxins like large predator fish do.'
    },
    {
      cat: 'purity',
      q: 'Is BlueFin tested for mercury, lead, and heavy metals?',
      a: 'Yes. Every batch undergoes multi-stage vacuum molecular distillation and is certified by accredited third-party laboratories. Our certificates of analysis verify non-detectable levels of mercury, lead, arsenic, PCBs, and dioxins, far exceeding European Pharmacopoeia and WHO safety limits.'
    },
    {
      cat: 'dosage',
      q: 'Should I choose the 1000 MG or 500 MG formula?',
      a: 'BlueFin 1000 MG (with 180mg EPA & 120mg DHA) is our premier choice for working adults, individuals focused on cardiovascular wellness, mental clarity, and joint flexibility. BlueFin 500 MG is our gentle everyday formulation in a smaller capsule, ideal for teenagers (12+), seniors, or anyone starting their first Omega-3 regimen.'
    },
    {
      cat: 'dosage',
      q: 'What is the best time of day to take my softgel?',
      a: 'Take 1 softgel daily with water immediately after your primary morning meal or lunch. Omega-3s are fat-soluble lipids, so consuming them with dietary fats (like eggs, nuts, ghee, or milk) enhances intestinal bioavailability by up to 300%.'
    },
    {
      cat: 'dosage',
      q: 'Can pregnant or nursing mothers take BlueFin?',
      a: 'DHA is essential for fetal brain and retinal development. BlueFin is molecularly purified and safe, but we always advise pregnant or lactating mothers to consult their obstetrician regarding precise daily EPA/DHA targets.'
    },
    {
      cat: 'orders',
      q: 'Can I purchase BlueFin at a local medical store in Kerala?',
      a: 'Yes! BlueFin is stocked in over 500 registered community pharmacies and medical centers across Ernakulam, Kozhikode, Thrissur, Thiruvananthapuram, Kottayam, and other districts. Simply ask your neighborhood pharmacist for BlueFin Omega-3.'
    },
    {
      cat: 'orders',
      q: 'How long does delivery take when ordering online?',
      a: 'Online orders receive complimentary express shipping. Major Kerala cities receive doorstep delivery within 24–48 hours; all other pin codes in South India typically arrive within 2–3 business days with tracking updates via SMS.'
    },
  ];

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter(f => f.cat === activeCategory);

  return (
    <>
      <Header />

      <main>
        {/* HERO BANNER */}
        <section className="subpage-hero-wrapper" style={{ minHeight: '500px', textAlign: 'center' }}>
          <img
            src="/assets/hero_faq.jpg"
            alt="Tranquil deep ocean surface symbolizing serene clarity and medical trust"
            className="subpage-hero-bg"
          />
          <div className="subpage-hero-overlay overlay-faq" />

          <div className="subpage-hero-content" style={{ maxWidth: '920px' }}>
            <h1 className="subpage-title">
              Clear Answers. Zero Jargon.
            </h1>

            <p className="subpage-subtitle" style={{ margin: '0 auto 2rem', color: '#e2e8f0' }}>
              Everything you need to know about our sub-polar pelagic catch, enteric zero-burp guarantee, and 500+ Kerala pharmacy network.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.25rem',
                background: 'rgba(7, 33, 54, 0.75)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '999px',
                padding: '0.65rem 1.5rem',
                fontSize: '0.82rem',
                color: '#cbd5e1'
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                9 Common Questions Answered
              </span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <span style={{ color: '#38bdf8' }}>✓ Pharmacist Verified</span>
            </div>
          </div>
        </section>

        {/* FAQ CONTENT */}
        <section className="subpage-content" style={{ background: '#f8fafc', padding: '5.5rem 1.5rem 7rem' }}>
          <div className="subpage-container" style={{ maxWidth: '840px' }}>
            {/* Category Filter Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem',
                justifyContent: 'center',
                marginBottom: '3.5rem'
              }}
            >
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenIndex(null);
                  }}
                  style={{
                    padding: '0.65rem 1.35rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: '1px solid',
                    backgroundColor: activeCategory === cat.id ? '#072136' : '#ffffff',
                    color: activeCategory === cat.id ? '#ffffff' : '#475569',
                    borderColor: activeCategory === cat.id ? '#072136' : '#cbd5e1'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Accordion List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      border: '1px solid #e2e8f0',
                      boxShadow: isOpen ? '0 8px 25px rgba(0, 30, 60, 0.06)' : '0 2px 5px rgba(0, 30, 60, 0.02)',
                      transition: 'all 0.2s ease',
                      overflow: 'hidden'
                    }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1.5rem 1.75rem',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: '#072136',
                        cursor: 'pointer',
                        textAlign: 'left',
                        gap: '1rem',
                        background: 'none',
                        border: 'none',
                        fontFamily: 'var(--font-sans)'
                      }}
                    >
                      <span>{faq.q}</span>
                      <span
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          background: isOpen ? '#072136' : '#f1f5f9',
                          color: isOpen ? '#ffffff' : '#072136',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.1rem',
                          flexShrink: 0,
                          transform: isOpen ? 'rotate(45deg)' : 'none',
                          transition: 'transform 0.2s ease'
                        }}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div style={{ padding: '0 1.75rem 1.5rem', color: '#475569', fontSize: '0.95rem', lineHeight: 1.7 }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* PHARMACIST ASSISTANCE BOX */}
            <div
              style={{
                marginTop: '5rem',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '24px',
                padding: '3rem 2.5rem',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 30, 60, 0.05)'
              }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(2, 132, 199, 0.08)', border: '1px solid rgba(2, 132, 199, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: '#072136', marginBottom: '0.75rem' }}>
                Need personalized guidance?
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
                Our registered clinical pharmacist team is available to assist you with dosage recommendations and pharmacy availability.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919999999999?text=Hi%20BlueFin%20Team,%20I%20have%20a%20question%20about%20your%20Omega-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-navy-pill"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.75rem' }}
                >
                  CHAT ON WHATSAPP
                </a>
                <Link
                  href="/shop"
                  className="btn btn-pill-nav"
                  style={{ border: '1px solid #072136', color: '#072136', padding: '0.85rem 1.75rem' }}
                >
                  EXPLORE SHOP
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
