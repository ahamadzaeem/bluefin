'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CapsuleSection from '@/components/CapsuleSection';
import ReasonsSection from '@/components/ReasonsSection';

export default function WhyBlueFinPage() {
  const comparisonRows = [
    { feature: 'Source Fish', bluefin: 'Wild Sub-Arctic Pelagic Fish (anchovies, sardines)', generic: 'Farmed or unspecified mixed fish scrap' },
    { feature: 'Distillation Process', bluefin: 'Triple Molecular Vacuum Distillation', generic: 'Basic high-heat solvent extraction' },
    { feature: 'Heavy Metals & Mercury', bluefin: 'Undetectable (Third-party lab batch verified)', generic: 'Varies; often close to regulatory ceilings' },
    { feature: 'Digestive Comfort', bluefin: 'Enteric coated — Zero reflux or fishy burps', generic: 'Frequently causes fishy regurgitation & nausea' },
    { feature: 'Capsule Potency', bluefin: 'High EPA (180mg) & DHA (120mg) standardized', generic: 'Low active ratio, diluted with filler oils' },
    { feature: 'Shelf Stability', bluefin: 'Natural Vitamin E antioxidant fortification', generic: 'Prone to rapid oxidation and rancidity' },
    { feature: 'Local Verification', bluefin: 'Trusted by 500+ pharmacies across Kerala', generic: 'Unverified online white-label brands' },
  ];

  return (
    <>
      <Header />

      <main>
        {/* HERO BANNER */}
        <section className="subpage-hero-wrapper" style={{ minHeight: '520px', textAlign: 'center' }}>
          <img
            src="/assets/hero_why_bluefin.jpg"
            alt="Pristine Arctic sub-zero waters with sunlight beam and golden oil droplet"
            className="subpage-hero-bg"
          />
          <div className="subpage-hero-overlay overlay-why" />

          <div className="subpage-hero-content" style={{ maxWidth: '960px' }}>
            <h1 className="subpage-title">
              Science-Backed Purity. No Compromise.
            </h1>

            <p className="subpage-subtitle" style={{ margin: '0 auto 2.5rem', color: '#e2e8f0' }}>
              Most fish oils oxidize before reaching pharmacy shelves, triggering indigestion and rancid fishy burps. We engineered BlueFin from sub-polar pelagic waters to solve every flaw of standard Omega-3s.
            </p>

            {/* 3 Scientific Metric Chips */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
                maxWidth: '780px',
                margin: '0 auto'
              }}
            >
              <div
                style={{
                  background: 'rgba(7, 33, 54, 0.7)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: '16px',
                  padding: '1.25rem 1.5rem',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#38bdf8', fontWeight: 600 }}>
                  0%
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ffffff', marginTop: '0.25rem' }}>
                  Heavy Metals &amp; Lead
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Triple vacuum distillation</div>
              </div>

              <div
                style={{
                  background: 'rgba(7, 33, 54, 0.7)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: '16px',
                  padding: '1.25rem 1.5rem',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#38bdf8', fontWeight: 600 }}>
                  100%
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ffffff', marginTop: '0.25rem' }}>
                  Targeted Enteric Release
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Zero reflux or burps</div>
              </div>

              <div
                style={{
                  background: 'rgba(7, 33, 54, 0.7)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: '16px',
                  padding: '1.25rem 1.5rem',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#38bdf8', fontWeight: 600 }}>
                  300 MG
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ffffff', marginTop: '0.25rem' }}>
                  Active EPA + DHA
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Per 1000mg Softgel</div>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS GRID */}
        <section className="subpage-content" style={{ background: '#ffffff', padding: '5.5rem 1.5rem' }}>
          <div className="subpage-container">
            <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
              <div className="section-eyebrow">OUR FOUR PURITY PILLARS</div>
              <h2 className="section-title">The anatomy of pharmaceutical-grade fish oil</h2>
              <p className="section-subtitle">Every softgel undergoes rigorous quality control from deep pelagic catch to delivery.</p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '2rem'
              }}
            >
              <div
                style={{
                  background: '#f8fafc',
                  padding: '2.5rem 2rem',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 15px rgba(0, 30, 60, 0.03)'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>🧊</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#072136', marginBottom: '0.75rem' }}>
                  Pelagic Deep-Sea Catch
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.65 }}>
                  We harvest small pelagic fish (sardines, anchovies) from cold oceanic currents. Small fish sit low on the food chain, naturally preventing heavy metal bio-accumulation.
                </p>
              </div>

              <div
                style={{
                  background: '#f8fafc',
                  padding: '2.5rem 2rem',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 15px rgba(0, 30, 60, 0.03)'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>🔬</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#072136', marginBottom: '0.75rem' }}>
                  Molecular Vacuum Distillation
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.65 }}>
                  Our cold-temperature molecular distillation strips away 100% of PCBs, dioxins, lead, and mercury without thermal oxidation or nutrient degradation.
                </p>
              </div>

              <div
                style={{
                  background: '#f8fafc',
                  padding: '2.5rem 2rem',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 15px rgba(0, 30, 60, 0.03)'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>🛡️</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#072136', marginBottom: '0.75rem' }}>
                  Targeted Enteric Release
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.65 }}>
                  The softgel survives harsh stomach acid intact and dissolves exclusively in the alkaline pH of the small intestine. Zero fishy burps, maximum bioavailability.
                </p>
              </div>

              <div
                style={{
                  background: '#f8fafc',
                  padding: '2.5rem 2rem',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 15px rgba(0, 30, 60, 0.03)'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>🌿</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#072136', marginBottom: '0.75rem' }}>
                  Freshness Guaranteed
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.65 }}>
                  Infused with natural d-alpha tocopherol (Vitamin E) to lock in fresh, neutral taste and shield active fatty acid bonds against free-radical oxidation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE 3D SOFTGEL DISSECTION */}
        <CapsuleSection />

        {/* COMPARISON TABLE */}
        <section className="subpage-content" style={{ background: '#f8fafc', padding: '6rem 1.5rem' }}>
          <div className="subpage-container">
            <div className="section-header text-center" style={{ marginBottom: '3.5rem' }}>
              <div className="section-eyebrow">THE BLUEFIN DIFFERENCE</div>
              <h2 className="section-title">How BlueFin compares</h2>
              <p className="section-subtitle">See why physicians and wellness seekers choose BlueFin over commercial brands.</p>
            </div>

            <div
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(0, 30, 60, 0.06)'
              }}
            >
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                  <thead>
                    <tr style={{ background: '#072136', color: '#ffffff' }}>
                      <th style={{ padding: '1.5rem 2rem', fontSize: '0.95rem', fontWeight: 600 }}>Standard Criterion</th>
                      <th style={{ padding: '1.5rem 2rem', fontSize: '0.95rem', fontWeight: 600, color: '#38bdf8' }}>
                        BlueFin Omega-3
                      </th>
                      <th style={{ padding: '1.5rem 2rem', fontSize: '0.95rem', fontWeight: 500, color: '#94a3b8' }}>
                        Generic Drugstore Fish Oil
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, idx) => (
                      <tr
                        key={idx}
                        style={{
                          borderBottom: '1px solid #f1f5f9',
                          background: idx % 2 === 0 ? '#ffffff' : '#f8fafc'
                        }}
                      >
                        <td style={{ padding: '1.25rem 2rem', fontWeight: 600, color: '#072136', fontSize: '0.9rem' }}>
                          {row.feature}
                        </td>
                        <td style={{ padding: '1.25rem 2rem', color: '#0369a1', fontWeight: 500, fontSize: '0.9rem' }}>
                          <span style={{ marginRight: '0.5rem', color: '#0284c7' }}>✓</span>
                          {row.bluefin}
                        </td>
                        <td style={{ padding: '1.25rem 2rem', color: '#64748b', fontSize: '0.88rem' }}>
                          {row.generic}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA BANNER */}
            <div
              style={{
                marginTop: '4rem',
                textAlign: 'center',
                padding: '3rem 2rem',
                borderRadius: '20px',
                background: 'radial-gradient(circle at 50% 50%, #0a3556 0%, #072136 100%)',
                color: 'white'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem', fontWeight: 400 }}>
                Experience the Difference in Your Daily Health
              </h3>
              <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1rem' }}>
                Join thousands of families in Kerala who start their morning with pure, clean, odourless BlueFin Omega-3.
              </p>
              <Link href="/shop" className="btn btn-pill-nav" style={{ padding: '0.95rem 2.25rem', fontSize: '0.9rem', display: 'inline-block' }}>
                EXPLORE FORMULATIONS →
              </Link>
            </div>
          </div>
        </section>

        {/* 6 REASONS GRID */}
        <ReasonsSection />
      </main>

      <Footer />
    </>
  );
}
