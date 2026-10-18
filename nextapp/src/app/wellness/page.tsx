'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoutineSection from '@/components/RoutineSection';

export default function WellnessPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'neuro' | 'cardio' | 'mobility'>('all');

  const healthBenefits = [
    {
      id: '01',
      category: 'cardio',
      title: 'Cardiovascular Vitality',
      subtitle: 'EPA 180mg · DHA 120mg',
      clinicalFocus: 'Circulatory Health',
      pathway: 'Endothelial Nitric Oxide & Arterial Lumen Flexibility',
      metric: '3.4x Bioavailability (rTG Form)',
      desc: 'Maintains optimal serum triglyceride homeostasis, preserves endothelial elasticity, and encourages uninhibited microvascular blood flow for continuous physical stamina.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M3.22 12H9.5l1.5-3 2 6 1.5-3h6.28" />
        </svg>
      )
    },
    {
      id: '02',
      category: 'neuro',
      title: 'Cognitive Sharpness & Memory',
      subtitle: 'DHA Retinal & Brain Matrix',
      clinicalFocus: 'Neuroplasticity',
      pathway: 'Synaptosomal Membrane Fluidity & BDNF Signaling',
      metric: '>20% Cerebral Cortex Lipid Concentration',
      desc: 'DHA serves as the primary structural phospholipid in the human brain. Daily replenishment maintains synapse fluid dynamics, deep work focus, and rapid executive recall.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04" />
        </svg>
      )
    },
    {
      id: '03',
      category: 'mobility',
      title: 'Joint Flexibility & Comfort',
      subtitle: 'Inflammatory Modulation',
      clinicalFocus: 'Cartilage Integrity',
      pathway: 'Arachidonic Acid Down-Regulation & Synovial Fluid Cushioning',
      metric: 'Significant Morning Ease in 21 Days',
      desc: 'Competitively displaces pro-inflammatory omega-6 arachidonic acid in cellular bilayers, noticeably mitigating morning stiffness and supporting pain-free articular movement.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2" />
          <path d="M5 21l4.5-8.5L7 10l5-3 3 3-2 3.5 3.5 7.5" />
          <path d="M14 7l3 3-1.5 4" />
        </svg>
      )
    },
    {
      id: '04',
      category: 'neuro',
      title: 'Retinal & Digital Eye Comfort',
      subtitle: 'Meibomian Gland Lipid Support',
      clinicalFocus: 'Photoreceptor Balance',
      pathway: 'Tear Film Lipid Layer Stabilization & Macular Nourishment',
      metric: 'Rapid Relief from Screen Strain',
      desc: 'Directly restores the delicate lipid bilayer of the ocular tear film. Protects photoreceptors against digital blue-light oxidative stress and sustains natural eye lubrication throughout high-screen days.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      id: '05',
      category: 'mobility',
      title: 'Epidermal Barrier & Hydration',
      subtitle: 'Stratum Corneum Integrity',
      clinicalFocus: 'Cellular Moisture Lock',
      pathway: 'Intracellular Ceramide & Phospholipid Matrix Optimization',
      metric: 'Trans-Epidermal Water Loss Reduction',
      desc: 'Fortifies cellular lipid envelopes from the inside out, locking hydration deep within dermal tissue while neutralizing environmental oxidative damage and seasonal dryness.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          <path d="M12 9a3 3 0 0 0-3 3" />
        </svg>
      )
    },
    {
      id: '06',
      category: 'cardio',
      title: 'Immune Cellular Resilience',
      subtitle: 'Specialized Pro-Resolving Mediators',
      clinicalFocus: 'Immune Homeostasis',
      pathway: 'Resolvin & Protectin Precursor Biosynthesis',
      metric: 'Active Immune System Resolution',
      desc: 'EPA and DHA act as critical biological precursors to maresins, resolvins, and protectins—endogenous lipid mediators that actively orchestrate the resolution phase of immune balance without suppressing vital immune defense.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    }
  ];

  const filteredBenefits = activeCategory === 'all'
    ? healthBenefits
    : healthBenefits.filter(item => item.category === activeCategory);

  const dosageGuides = [
    {
      group: 'Active Adults & High Performers',
      rec: 'BlueFin 1000 MG',
      dosage: '1 Softgel Daily',
      timing: 'Immediately after a nutrient-rich breakfast',
      desc: 'Formulated for high-focus professionals and active lifestyles. Counteracts digital screen fatigue, optimizes cardiovascular output, and supports daily neuroplasticity.',
      badgeColor: '#0369a1',
      badgeBg: '#e0f2fe'
    },
    {
      group: 'Seniors & Joint Health',
      rec: 'BlueFin 1000 MG',
      dosage: '1 Softgel Daily',
      timing: 'With lunch or first warm meal',
      desc: 'Targeted to maintain supple cartilage cushion, arterial compliance, and gentle enteric absorption with zero gastric reflux.',
      badgeColor: '#0284c7',
      badgeBg: '#f0f9ff'
    },
    {
      group: 'Teenagers & First-Time Users',
      rec: 'BlueFin 500 MG',
      dosage: '1 Mini Softgel Daily',
      timing: 'With morning breakfast or evening meal',
      desc: 'Calibrated mini-capsule providing pure DHA for growing minds, study endurance, and healthy ocular function during long academic hours.',
      badgeColor: '#0f766e',
      badgeBg: '#ccfbf1'
    }
  ];

  return (
    <>
      <Header />

      <main>
        {/* HERO BANNER */}
        <section className="subpage-hero-wrapper" style={{ minHeight: '520px', textAlign: 'center' }}>
          <img
            src="/assets/hero_wellness.jpg"
            alt="Crystal clear deep ocean wave symbolizing marine purity and cellular vitality"
            className="subpage-hero-bg"
          />
          <div className="subpage-hero-overlay overlay-wellness" />

          <div className="subpage-hero-content" style={{ maxWidth: '960px' }}>
            <h1 className="subpage-title">
              The Foundation of Every Living Cell.
            </h1>

            <p className="subpage-subtitle" style={{ margin: '0 auto 2.5rem', color: '#e2e8f0' }}>
              Your body cannot synthesize essential Omega-3 fatty acids on its own. Discover how daily marine EPA and DHA in their natural re-esterified triglyceride form fortify cardiovascular stamina, mental focus, and lifelong joint mobility.
            </p>

            {/* 5 Vitality Pillars Quick Links — Clean, Elegant Vector Chips */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                justifyContent: 'center',
                maxWidth: '750px',
                margin: '0 auto'
              }}
            >
              {[
                'Cardiovascular Vitality',
                'Cognitive Matrix',
                'Synovial Flexibility',
                'Retinal Tear Film',
                'Cellular Hydration'
              ].map((label, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(7, 33, 54, 0.72)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    borderRadius: '999px',
                    padding: '0.55rem 1.25rem',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    color: '#ffffff',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <span style={{ color: '#38bdf8', marginRight: '0.45rem' }}>•</span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLINICAL BENCHMARKS STRIP */}
        <section style={{ background: '#041220', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', padding: '2.5rem 1.5rem' }}>
          <div className="subpage-container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '2rem',
                textAlign: 'center'
              }}
            >
              {[
                { value: '3.4x', label: 'Superior Bioavailability', detail: 'Re-esterified Triglyceride Form' },
                { value: '3 : 2', label: 'Optimal Clinical Ratio', detail: '180mg EPA to 120mg DHA Matrix' },
                { value: '< 0.001', label: 'Heavy Metals (PPM)', detail: 'Far Below Global Pharmacopeia Limits' },
                { value: '100%', label: 'Cold-Ocean Traceable', detail: 'Wild Peruvian Anchoveta Fishery' }
              ].map((stat, i) => (
                <div key={i} style={{ padding: '0.5rem' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2.2rem',
                      fontWeight: 700,
                      color: '#38bdf8',
                      lineHeight: 1.1,
                      marginBottom: '0.35rem'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff', letterSpacing: '0.02em' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.55)', marginTop: '0.2rem' }}>
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 HEALTH BENEFITS — High-End Clinical Presentation */}
        <section className="subpage-content" style={{ background: '#f8fafc', padding: '6rem 1.5rem' }}>
          <div className="subpage-container">
            <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
              <div className="section-eyebrow" style={{ letterSpacing: '0.15em', color: '#0284c7' }}>
                CLINICAL EVIDENCE & MECHANISMS
              </div>
              <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
                How Omega-3 empowers whole-body health
              </h2>
              <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Peer-reviewed physiological actions of pure cold-water marine fatty acids across human biology.
              </p>
            </div>

            {/* Interactive Category Filter Pills */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '3.5rem'
              }}
            >
              {[
                { key: 'all', label: 'All Biological Systems' },
                { key: 'cardio', label: 'Cardiovascular & Immunity' },
                { key: 'neuro', label: 'Neuroplasticity & Retinal' },
                { key: 'mobility', label: 'Joint Mobility & Barrier' }
              ].map(tab => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveCategory(tab.key as any)}
                  style={{
                    background: activeCategory === tab.key ? '#072136' : '#ffffff',
                    color: activeCategory === tab.key ? '#ffffff' : '#475569',
                    border: activeCategory === tab.key ? '1px solid #072136' : '1px solid #e2e8f0',
                    padding: '0.65rem 1.4rem',
                    borderRadius: '999px',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: activeCategory === tab.key ? '0 4px 14px rgba(7, 33, 54, 0.18)' : '0 1px 3px rgba(0,0,0,0.04)'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Elevated Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '2rem'
              }}
            >
              {filteredBenefits.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    padding: '2.5rem 2.25rem',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 20px rgba(7, 33, 54, 0.04)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }}
                >
                  {/* Top Bar: Icon + Numeral + Focus Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '14px',
                          background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.1), rgba(56, 189, 248, 0.06))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(2, 132, 199, 0.18)'
                        }}
                      >
                        {item.icon}
                      </div>
                      <span
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          color: '#94a3b8',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {item.id} //
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '999px',
                        background: '#f0f9ff',
                        color: '#0369a1',
                        border: '1px solid rgba(2, 132, 199, 0.2)'
                      }}
                    >
                      {item.clinicalFocus}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      color: '#0284c7',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      marginBottom: '0.45rem'
                    }}
                  >
                    {item.subtitle}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.45rem',
                      color: '#072136',
                      lineHeight: 1.3,
                      marginBottom: '1rem'
                    }}
                  >
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                    {item.desc}
                  </p>

                  {/* Scientific Mechanism Strip */}
                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid #f1f5f9',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem'
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      <strong style={{ color: '#072136' }}>Pathway:</strong> {item.pathway}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: 600 }}>
                      <span style={{ color: '#64748b', fontWeight: 500 }}>Key Metric: </span>
                      {item.metric}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMBEDDED ROUTINE SECTION */}
        <RoutineSection />

        {/* DOSAGE GUIDE ACCORDING TO LIFE STAGES */}
        <section className="subpage-content" style={{ background: '#ffffff', padding: '6rem 1.5rem', borderTop: '1px solid #e2e8f0' }}>
          <div className="subpage-container">
            <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
              <div className="section-eyebrow" style={{ letterSpacing: '0.15em', color: '#0284c7' }}>
                PRESCRIPTION INTEGRITY
              </div>
              <h2 className="section-title">Dosage guidance for every life stage</h2>
              <p className="section-subtitle">How to match each family member with their precise BlueFin formulation.</p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem'
              }}
            >
              {dosageGuides.map((guide, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#f8fafc',
                    padding: '2.75rem 2.25rem',
                    borderRadius: '20px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 8px 25px rgba(0, 30, 60, 0.03)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#072136', lineHeight: 1.3 }}>
                      {guide.group}
                    </h3>
                  </div>

                  <div
                    style={{
                      background: guide.badgeBg,
                      padding: '0.65rem 1rem',
                      borderRadius: '10px',
                      color: guide.badgeColor,
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      marginBottom: '1.25rem',
                      border: '1px solid rgba(2, 132, 199, 0.15)'
                    }}
                  >
                    Recommended: {guide.rec}
                  </div>

                  <div style={{ fontSize: '0.88rem', color: '#334155', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#072136' }}>Daily Protocol:</strong> {guide.dosage}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#334155', marginBottom: '1.25rem' }}>
                    <strong style={{ color: '#072136' }}>Timing:</strong> {guide.timing}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.65, marginTop: 'auto', marginBottom: '1.5rem' }}>
                    {guide.desc}
                  </p>

                  <Link
                    href="/shop"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: '#0284c7',
                      textDecoration: 'none'
                    }}
                  >
                    Select this formulation →
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center', marginTop: '4.5rem' }}>
              <Link href="/shop" className="btn btn-navy-pill" style={{ padding: '1rem 2.75rem', fontSize: '0.92rem' }}>
                START YOUR BLUEFIN PROTOCOL →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
