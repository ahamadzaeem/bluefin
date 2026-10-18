'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FamilySection from '@/components/FamilySection';

export default function OurStoryPage() {
  const milestones = [
    {
      year: '2021',
      title: 'The Problem in Kerala',
      desc: 'Despite living in a coastal state with high fish consumption, modern fried and curried preparations often oxidize delicate Omega-3 fatty acids, leaving families deficient in bioavailable EPA and DHA.'
    },
    {
      year: '2022',
      title: 'Rejecting Shortcuts',
      desc: 'We refused mass-market white-label fish oils sourced from farmed fish slurry. We partnered directly with certified sub-polar pelagic fisheries and pharmaceutical chemists to formulate molecularly distilled softgels.'
    },
    {
      year: '2023',
      title: 'The Enteric Breakthrough',
      desc: 'We perfected our delayed-release enteric casing. Patient trials showed 100% elimination of fishy reflux and stomach irritation, making Omega-3 enjoyable for children and grandparents alike.'
    },
    {
      year: '2024 - Present',
      title: '500+ Community Pharmacies',
      desc: 'Today, BlueFin is a trusted daily wellness staple prescribed by wellness practitioners and stocked on shelves across Ernakulam, Kozhikode, Malappuram, and Thiruvananthapuram.'
    }
  ];

  return (
    <>
      <Header />

      <main>
        {/* HERO BANNER */}
        <section className="subpage-hero-wrapper" style={{ minHeight: '500px' }}>
          <img
            src="/assets/hero_our_story.jpg"
            alt="Tranquil coastal horizon at golden dawn with maritime heritage"
            className="subpage-hero-bg"
          />
          <div className="subpage-hero-overlay overlay-story" />

          <div className="subpage-hero-content">
            <div className="shop-hero-grid" style={{ alignItems: 'center' }}>
              <div>
                <h1 className="subpage-title">
                  Born From a Legacy of Everyday Family Care.
                </h1>

                <p className="subpage-subtitle" style={{ color: '#e2e8f0' }}>
                  BlueFin began with an honest conviction: the supplements you give your parents and children should be as pure and uncompromised as the ocean itself.
                </p>
              </div>

              {/* Right: Glassmorphic Heritage Card */}
              <div
                style={{
                  background: 'rgba(7, 33, 54, 0.72)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '24px',
                  padding: '2.25rem',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.4)',
                  position: 'relative'
                }}
              >
                <div style={{ color: '#38bdf8', fontSize: '2rem', fontFamily: 'serif', lineHeight: 1, marginBottom: '0.5rem' }}>
                  &ldquo;
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#ffffff', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  Health is not about emergency medicine; it is the quiet daily habit that keeps three generations laughing and thriving together.
                </p>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, color: '#e2e8f0' }}>The BlueFin Family</span>
                  <span style={{ color: '#38bdf8' }}>Cochin, Kerala</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NARRATIVE SECTION */}
        <section className="subpage-content" style={{ background: '#ffffff', padding: '6rem 1.5rem' }}>
          <div className="subpage-container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '4rem',
                alignItems: 'center',
                marginBottom: '5rem'
              }}
            >
              <div>
                <div className="section-eyebrow">ROOTED IN HONESTY</div>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    color: '#072136',
                    lineHeight: 1.25,
                    marginBottom: '1.5rem',
                    fontWeight: 400
                  }}
                >
                  We built the fish oil we wanted our own parents to take.
                </h2>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  Walk into any pharmacy and you&apos;ll see dozens of fish oil bottles. But read the labels closely and you&apos;ll find synthetic fillers, low EPA/DHA ratios, and fish oil imported in giant drums prone to rancidity under tropical heat.
                </p>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.8, marginBottom: '1.75rem' }}>
                  BlueFin was founded to reset the standard. We source exclusively from cold, wild pelagic schools, molecularly purify the oil in a pharmaceutical GMP facility, and seal each capsule with natural Vitamin E to guarantee fresh, odor-free potency until the last softgel.
                </p>
                <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', color: '#0284c7', fontWeight: 600 }}>
                      100%
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Wild Pelagic Origin</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', color: '#0284c7', fontWeight: 600 }}>
                      0%
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Fishy Aftertaste</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', color: '#0284c7', fontWeight: 600 }}>
                      500+
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Verified Pharmacies</div>
                  </div>
                </div>
              </div>

              {/* Story Visual Card */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(7, 33, 54, 0.15)',
                  background: '#072136'
                }}
              >
                <img
                  src="/assets/family_lifestyle.jpg"
                  alt="Family wellness in Kerala"
                  style={{ width: '100%', height: '480px', objectFit: 'cover', opacity: 0.85 }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(7, 33, 54, 0.9) 0%, transparent 60%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '2.5rem'
                  }}
                >
                  <div style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                    COMMUNITY ROOTS
                  </div>
                  <div style={{ color: 'white', fontFamily: 'var(--font-serif)', fontSize: '1.35rem', lineHeight: 1.4 }}>
                    &ldquo;Health is not about medical emergencies; it is the daily habits that keep three generations laughing together.&rdquo;
                  </div>
                </div>
              </div>
            </div>

            {/* TIMELINE */}
            <div style={{ marginTop: '6rem' }}>
              <div className="section-header text-center" style={{ marginBottom: '3.5rem' }}>
                <div className="section-eyebrow">OUR JOURNEY</div>
                <h2 className="section-title">Milestones in purity & trust</h2>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '2rem'
                }}
              >
                {milestones.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#f8fafc',
                      padding: '2.25rem 1.75rem',
                      borderRadius: '16px',
                      border: '1px solid #e2e8f0',
                      position: 'relative'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#0284c7',
                        fontFamily: 'var(--font-serif)',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {m.year}
                    </div>
                    <h3 style={{ fontSize: '1.15rem', color: '#072136', marginBottom: '0.75rem', fontWeight: 600 }}>
                      {m.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65 }}>
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EMBEDDED FAMILY GENERATIONS SECTION */}
        <FamilySection />
      </main>

      <Footer />
    </>
  );
}
